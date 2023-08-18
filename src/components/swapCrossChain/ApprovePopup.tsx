import { LoadingButton } from "@mui/lab";
import { Modal, Typography } from "@mui/material";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { WalletProvider } from "modules/walletProvider/walletProvider";
import { nativeCoinList } from "onchain/abi";
import {
  ContentModalBox,
  ModalBox,
  SCCDecimals,
  checkBeforePurchase,
} from "pages/SwapCrossChain";
import React from "react";
import { toast } from "react-toastify";
import { formatPrice } from "settings/format";
import { fCurrency } from "utils/format";
import { SwapProvider } from "./SwapProvider";
import { ButtonLoadingPrimary } from "components/common/CustomButton";

const changeChain = async (prefix: any, chainInfo: any) => {
  try {
    await prefix.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainInfo.chainId }],
    });
    return true;
  } catch (switchError: any) {
    const mobileErrorCode = switchError.data?.originalError?.code;
    if (switchError.code === 4902 || mobileErrorCode === 4902) {
      try {
        await prefix.request({
          method: "wallet_addEthereumChain",
          params: [chainInfo],
        });
        return true;
      } catch (addError) {
        throw addError;
      }
    } else {
      console.log(switchError);
      throw switchError;
    }
  }
};

export const ApprovePopup = ({
  selectedChain,
  baseAmount,
  provider,
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
  const walletAction = WalletProvider.useAction();

  const onClick = () => {
    const check = handleCheckCondition();
    if (check) {
      setOpen(true);
    }
  };

  const handleApprove = async () => {
    var temp = {
      name: selectedChain.info.name,
      chainId: ethers.utils.hexValue(selectedChain.info.chainId),
      rpcUrls: [selectedChain.info.rpcUrl],
      chainName: selectedChain.info.chainName,
      blockExplorerUrls: [selectedChain.info.explorerUrl],
      nativeCurrency: nativeCoinList.POLYGON.prod,
    };
    await changeChain(walletState.prefix, temp);
    startHandle();
    setOpen(false);
    const value = parseUnits(formatPrice(baseAmount, SCCDecimals), 18);
    setLoading(true);
    const signer = await walletState.signer;
    const check = await checkBeforePurchase(
      walletState.provider,
      signer,
      addresses[selectedChain.chainName].tokenAddress,
      addresses[selectedChain.chainName].bridgeContract,
      value,
      walletState.walletAddress,
      (error: any) => {
        toast.error(error);
        setLoading(false);
        endHandle();
      }
    );
    setLoading(false);

    if (check) {
      endHandle();
      toast.success("Approved");
      handleSuccess();
    }
  };

  return (
    <>
      <ButtonLoadingPrimary
        variant="contained"
        sx={{ width: "40%", mr: 2 }}
        onClick={onClick}
        loading={loading}
        disabled={approved || !connectedWallet}
      >
        Approve
      </ButtonLoadingPrimary>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <ContentModalBox>
            <Typography textAlign={"center"}>Cross-chain Router</Typography>
            <Typography my={2} variant="h4" textAlign={"center"}>
              {fCurrency(baseAmount, SCCDecimals)} SWP
            </Typography>
            <Typography textAlign="center" mb={5}>
              Allow our contact to use your SWP on the BSC chain.
            </Typography>
            <ButtonLoadingPrimary
              variant="contained"
              onClick={handleApprove}
              size="large"
            >
              Approve SWP
            </ButtonLoadingPrimary>
          </ContentModalBox>
        </ModalBox>
      </Modal>
    </>
  );
};
