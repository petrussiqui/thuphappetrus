import { LoadingButton } from "@mui/lab";
import { Modal, Typography } from "@mui/material";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { WalletProvider } from "modules/walletProvider/walletProvider";
import {
  ContentModalBox,
  ModalBox,
  SCCDecimals,
  getReceipt,
} from "pages/SwapCrossChain";
import React from "react";
import { toast } from "react-toastify";
import { formatPrice } from "settings/format";
import { fCurrency } from "utils/format";
import { SwapProvider } from "./SwapProvider";
import { parseEthereumError } from "./common";
import { SwapCrossChainABI } from "./swapABI";
import { ButtonLoadingPrimary } from "components/common/CustomButton";

export const ConfirmPopup = ({
  selectedChain,
  baseAmount,
  approved,
  handleCheckCondition,
  handleSuccess,
  startHandle,
  endHandle,
  connectedWallet = false,
}: any) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => setOpen(false);
  const { addresses } = SwapProvider.useState();
  const walletState = WalletProvider.useState();
  const onClick = () => {
    const check = handleCheckCondition();
    if (check) {
      setOpen(true);
    }
  };

  const handleSwap = async () => {
    try {
      startHandle();
      setLoading(true);
      setOpen(false);
      if (selectedChain.chainName === "BSC") {
        toast.error("Bridge is not available");
        setLoading(false);
        endHandle();
      } else {
        const signer = walletState.signer;
        const contract = new ethers.Contract(
          addresses[selectedChain.chainName].bridgeContract,
          SwapCrossChainABI,
          signer
        );
        const value = parseUnits(formatPrice(baseAmount, SCCDecimals), 18);

        const txHash = await contract.lockTokenFrom(
          walletState.walletAddress,
          value,
          {
            value:
              selectedChain.contractAddress === ethers.constants.AddressZero
                ? value
                : 0,
          }
        );
        const status = await getReceipt(walletState.provider, txHash.hash);
        setLoading(false);
        endHandle();
        if (status) {
          toast.success("Swap success");
          handleSuccess();
        }
      }
    } catch (error) {
      console.log(error);

      toast.error(parseEthereumError(error));
      setLoading(false);
      endHandle();
    }
  };

  return (
    <>
      <ButtonLoadingPrimary
        variant="contained"
        sx={{ width: "40%", mr: 2 }}
        onClick={onClick}
        loading={loading}
        disabled={!approved || !connectedWallet}
      >
        Swap
      </ButtonLoadingPrimary>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <ModalBox>
          <ContentModalBox>
            <Typography textAlign={"center"}>Cross-chain Router</Typography>
            <Typography my={2} variant="h4" textAlign={"center"}>
              {fCurrency(baseAmount, SCCDecimals)} SWP
            </Typography>
            <Typography textAlign="center" mb={5}>
              Confirm swap from BSC chain to Polygon chain.
            </Typography>
            <ButtonLoadingPrimary
              variant="contained"
              onClick={handleSwap}
              size="large"
            >
              Confirm
            </ButtonLoadingPrimary>
          </ContentModalBox>
        </ModalBox>
      </Modal>
    </>
  );
};
