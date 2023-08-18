import { Sync } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  Hidden,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { IconArrowBigDownLines, IconLineDashed } from "@tabler/icons-react";
import {
  ButtonLoadingPrimary,
  ButtonLoadingThird,
} from "components/common/CustomButton";
import { TypographyGradient } from "components/common/CustomTypography";
import { SectionBoxFirst } from "components/home/HomeStyled";
import { ApprovePopup } from "components/swapCrossChain/ApprovePopup";
import { ConfirmPopup } from "components/swapCrossChain/ConfirmPopup";
import { ethers } from "ethers";
import WalletDrawer from "modules/walletProvider/walletDrawer";
import { WalletProvider } from "modules/walletProvider/walletProvider";
import { ABI_ERC20 } from "onchain/abi";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { formatAddress, formatPrice } from "settings/format";
import { parseEthereumError } from "../components/swapCrossChain/common";
import ConnectWalletButton from "../components/swapCrossChain/ConnectWalletButton";
import CustomInput from "../components/swapCrossChain/CustomInput";
import Reminder from "../components/swapCrossChain/Reminder";
import SelectChain from "../components/swapCrossChain/SelectChain";
import SelectQuoteChain from "../components/swapCrossChain/SelectQuoteChain";
import SelectToken from "../components/swapCrossChain/SelectToken";
import { SwapCrossChainABI } from "../components/swapCrossChain/swapABI";
import { SwapProvider } from "../components/swapCrossChain/SwapProvider";
import useResponsive from "../hooks/useResponsive";
import { fCurrency } from "../utils/format";
export const SCCDecimals = 6;

const CrossBox = styled(Box)(({ theme }) => ({
  borderRadius: "30px 0",
  background: "var(--color-third)",
  border: "1px solid var(--color-primary-50)",
  padding: theme.spacing(5),
  color: "var(--color-text-title)",
  [theme.breakpoints.down("sm")]: {},
}));

export const getOnchainBalance = async (
  walletAddress: any,
  selectedToken: any
) => {
  try {
    var balance = null;
    if (selectedToken.contractAddress === ethers.constants.AddressZero) {
      const provider = window.ethereum;
      balance = await provider.request({
        method: "eth_getBalance",
        params: [walletAddress, "latest"],
      });
    } else {
      const provider = new ethers.providers.JsonRpcBatchProvider(
        selectedToken.info.rpcUrl,
        "any"
      );
      const contractInstance = new ethers.Contract(
        selectedToken.contractAddress,
        ABI_ERC20,
        provider
      );
      balance = await contractInstance.balanceOf(walletAddress);
    }
    balance = balance ? Number(ethers.utils.formatEther(balance)) : 0;
    return balance;
  } catch (error) {
    console.log(error);
  }
};

export async function getReceipt(provider: any, txHash: string) {
  try {
    const receipt = await provider.waitForTransaction(txHash);
    if (receipt.status === 1) {
      return true;
    } else {
      toast.error("Transaction error with status code 0");
      return false;
    }
  } catch (error) {
    toast.error(parseEthereumError(error));
    throw error;
  }
}

export async function checkBeforePurchase(
  provider: any,
  signer: any,
  tokenAddress: any,
  approveAddress: any,
  amountNeeded: any,
  walletAddress: any,
  errorCallback: any
) {
  try {
    if (tokenAddress === ethers.constants.AddressZero) return true;

    const contractInstance = new ethers.Contract(
      tokenAddress,
      ABI_ERC20,
      provider
    );

    var balance = await contractInstance.balanceOf(walletAddress);

    var approveAmount = await contractInstance.allowance(
      walletAddress,
      approveAddress
    );

    if (
      Number(ethers.utils.formatEther(approveAmount.toString())) >=
      Number(ethers.utils.formatEther(amountNeeded))
    ) {
      return true;
    }

    if (
      Number(ethers.utils.formatEther(balance)) >=
      Number(ethers.utils.formatEther(amountNeeded))
    ) {
      const contractWithSigner = new ethers.Contract(
        tokenAddress,
        ABI_ERC20,
        signer
      );

      const tx = await contractWithSigner.approve(approveAddress, amountNeeded);

      var approveSuccess = await getReceipt(provider, tx.hash);

      if (!approveSuccess) {
        return false;
      }

      if (approveSuccess) return true;

      return false;
    } else {
      errorCallback(`Unavailable balance`);
      return false;
    }
  } catch (error) {
    errorCallback(parseEthereumError(error));
    return false;
  }
}

export default function SwapCrossChain() {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");
  const [selectedToken, setSelectedToken] = React.useState<any>(null);
  const [selectedChain, setSelectedChain] = React.useState<any>(null);
  const [selectedQuoteChain, setSelectedQuoteChain] = React.useState<any>(null);
  const [baseBalance, setBaseBalance] = React.useState<any>(0);
  const [quoteBalance, quoteQuoteBalance] = React.useState<any>(0);
  const [provider, setProvider] = React.useState(null);
  const [error, setError] = React.useState("");
  const [pageLoading, setPageLoading] = React.useState(false);
  const [baseAmount, setBaseAmount] = React.useState<any>(0);
  const { staticContracts, networks, addresses, contracts } =
    SwapProvider.useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [approved, setApproved] = React.useState(false);
  const [fee, setFee] = React.useState(0);
  const [quoteAmount, setQuoteAmount] = React.useState<any>(0);
  const { mapContracts, getNetwork } = SwapProvider.useAction();
  const [sendPool, setSendPool] = React.useState<any>(0);
  const [receivePool, setReceivePool] = React.useState(0);
  const [handling, setHandling] = React.useState(false);
  const [connectedWallet, setConnectedWallet] = React.useState(false);
  const SWPSupply = 500000000;
  const walletState = WalletProvider.useState();
  const walletAction = WalletProvider.useAction();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    getNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!walletState.walletAddress) setConnectedWallet(false);
    else setConnectedWallet(true);
  }, [walletState.walletAddress]);

  React.useEffect(() => {
    if (!selectedToken && contracts) {
      const recommendChain = contracts.find(
        (contract: any) =>
          contract.symbol === "SWP" && contract.chainName === "POLYGON"
      );
      setSelectedToken(recommendChain);
    }
  }, [contracts, selectedToken]);

  React.useEffect(() => {
    if (contracts && !selectedChain && !selectedQuoteChain) {
      const recommendChain = contracts.find(
        (contract: any) =>
          contract.symbol === "SWP" && contract.chainName === "POLYGON"
      );
      const recommendReceiveChain = contracts.find(
        (contract: any) =>
          contract.symbol === "SWP" && contract.chainName === "BSC"
      );
      setSelectedChain(recommendChain);
      // setSelectedQuoteChain(recommendReceiveChain);
      setTimeout(() => {
        setSelectedQuoteChain(recommendReceiveChain);
      }, 300);
    }
  }, [contracts, selectedChain, selectedQuoteChain]);

  React.useEffect(() => {
    if (selectedChain && selectedQuoteChain && addresses && contracts) {
      (async () => {
        const polygon = contracts.find(
          (c: any) => c.symbol === "SWP" && c.chainName === "POLYGON"
        );
        const sendPool = await getOnchainBalance(
          addresses["POLYGON"].bridgeContract,
          polygon
        );
        if (sendPool) {
          if (selectedChain.chainName === "POLYGON") {
            setSendPool(sendPool);
            setReceivePool(SWPSupply - sendPool);
          } else {
            setReceivePool(sendPool);
            setSendPool(SWPSupply - sendPool);
          }
        }
      })();
    } else {
      setSendPool(0);
      setReceivePool(0);
    }
  }, [addresses, contracts, selectedChain, selectedQuoteChain]);

  // React.useEffect(() => {
  //   if (selectedChain) {
  //     (async () => {
  //       const sendPool = await getOnchainBalance(
  //         addresses[selectedChain.chainName].bridgeContract,
  //         selectedChain
  //       );
  //       setSendPool(sendPool);
  //     })();
  //   }
  // }, [selectedChain, refreshing]);

  // React.useEffect(() => {
  //   if (selectedQuoteChain) {
  //     (async () => {
  //       const sendPool = await getOnchainBalance(
  //         addresses[selectedQuoteChain.chainName].bridgeContract,
  //         selectedQuoteChain
  //       );
  //       setReceivePool(sendPool);
  //     })();
  //   }
  // }, [selectedQuoteChain, refreshing]);

  React.useEffect(() => {
    if (networks && staticContracts) {
      mapContracts(staticContracts, networks);
      setTimeout(() => {
        setPageLoading(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staticContracts, networks]);

  React.useEffect(() => {
    if (selectedChain) {
      setBaseBalance(0);
      (async () => {
        if (walletState.walletAddress?.length) {
          const balance = await getOnchainBalance(
            walletState.walletAddress,
            selectedChain
          );
          setBaseBalance(balance);
        }
      })();
    }
  }, [selectedChain, walletState.walletAddress, refreshing]);

  React.useEffect(() => {
    if (selectedQuoteChain) {
      quoteQuoteBalance(0);
      (async () => {
        if (walletState.walletAddress) {
          const balance = await getOnchainBalance(
            walletState.walletAddress,
            selectedQuoteChain
          );
          quoteQuoteBalance(balance);
        }
      })();
    }
  }, [selectedQuoteChain, walletState.walletAddress, refreshing]);

  React.useEffect(() => {
    if (walletState.provider && selectedChain && walletState.walletAddress) {
      (async () => {
        setFee(0);
        const provider = new ethers.providers.JsonRpcBatchProvider(
          selectedChain.info.rpcUrl,
          "any"
        );
        const contract = new ethers.Contract(
          addresses[selectedChain.chainName].bridgeContract,
          SwapCrossChainABI,
          provider
        );
        const checkInWhitelist = await contract.mapWhitelist(
          walletState.walletAddress
        );
        const whitelistFeePercent = Number(
          ethers.utils.formatEther(await contract.whitelistFeePercent())
        );
        const swapFeePercent = Number(
          ethers.utils.formatEther(await contract.swapFeePercent())
        );
        setFee(checkInWhitelist ? whitelistFeePercent : swapFeePercent);
      })();
    }
  }, [
    addresses,
    selectedChain,
    walletState.provider,
    walletState.walletAddress,
  ]);

  React.useEffect(() => {
    if (baseAmount && selectedChain && selectedQuoteChain) {
      setQuoteAmount(
        parseFloat(baseAmount) - parseFloat(baseAmount) * (fee / 100)
      );
    } else {
      setQuoteAmount(0);
    }
  }, [baseAmount, fee, selectedChain, selectedQuoteChain]);

  React.useEffect(() => {
    setError("");
    setApproved(false);
  }, [baseAmount, selectedChain, selectedQuoteChain, selectedToken]);

  const handleCheckCondition = () => {
    setError("");
    if (!walletState.walletAddress) {
      setError("Please connect wallet");
    } else if (!selectedToken) {
      setError("Please choose token you wanna send");
    } else if (!selectedChain) {
      setError("Please choose network you wanna send");
    } else if (!selectedQuoteChain) {
      setError("Please choose network you wanna receive");
    } else if (!parseFloat(baseAmount)) {
      setError("Please input amount you wanna swap");
    } else {
      return true;
    }
  };

  const startHandle = () => setHandling(true);
  const endHandle = () => setHandling(false);

  React.useEffect(() => {
    walletAction.checkLocalStorageWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!networks) {
  //   return <Loading />;
  // }

  // if (!walletState.walletAddress) {
  //   return (
  //     <SectionBoxFirst
  //       sx={{ backgroundImage: "url('/images/home/section-bg-2.png')" }}
  //     >
  //       <Button onClick={() => walletAction.connectWallet("metamask")}>
  //         Connect Wallet
  //       </Button>
  //     </SectionBoxFirst>
  //   );
  // }

  return (
    <Box>
      {pageLoading ? (
        <Container maxWidth={"md"}>
          <Box textAlign={"center"}>
            <CircularProgress />
          </Box>
        </Container>
      ) : (
        <Container maxWidth={"md"}>
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems={isMobile ? "flex-start" : "flex-end"}
            justifyContent={"space-between"}
            gap={1}
          >
            <TypographyGradient
              variant={isMobile ? "h4" : "h2"}
              fontWeight={700}
            >
              Crosschain
            </TypographyGradient>

            {!connectedWallet && (
              <Typography
                color={"var(--color-secondary)"}
                mb={1}
                fontStyle={"italic"}
              >
                **Please connect wallet to use
              </Typography>
            )}
          </Stack>
          {selectedChain ? (
            <Stack
              direction={"row"}
              alignItems={isMobile ? "flex-start" : "center"}
              justifyContent={"flex-end"}
              gap={1}
              pb={2}
            >
              {/* <Typography py={2} color={"var(--color-text-title)"}>
                {selectedChain?.info?.name} pool:{" "}
                {fCurrency(sendPool, SCCDecimals)} {selectedToken?.symbol}
              </Typography> */}
              {/* <Link
                    href={`${selectedChain?.info?.explorerUrl}token/${
                      addresses[selectedChain.chainName]?.tokenAddress
                    }?a=${addresses[selectedChain.chainName]?.bridgeContract}`}
                    target="_blank"
                  >
                    <OpenInNewIcon fontSize="small" sx={{ pb: 0, ml: 1 }} />
                  </Link> */}
              {walletState.walletAddress && (
                <CopyToClipboard
                  text={walletState.walletAddress as string}
                  onCopy={(value: any, e: any) => toast.success("Copied")}
                >
                  <ButtonLoadingThird sx={{ color: "var(--color-text-title)" }}>
                    {formatAddress(walletState.walletAddress, 10)}
                  </ButtonLoadingThird>
                </CopyToClipboard>
              )}
              {connectedWallet ? (
                <ButtonLoadingThird
                  onClick={() => walletAction.disconnectWallet()}
                >
                  Disconnect
                </ButtonLoadingThird>
              ) : (
                <ButtonLoadingThird onClick={() => setOpen(true)}>
                  Connect Wallet
                </ButtonLoadingThird>
              )}
              <WalletDrawer open={open} handleClose={() => setOpen(false)} />
            </Stack>
          ) : null}
          <CrossBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography mb={1} variant="h6">
                  Send
                </Typography>
                <CustomInput
                  value={baseAmount.toString()}
                  onChange={(e: any) => setBaseAmount(e.target.value)}
                  sx={{
                    fontSize: 20,
                  }}
                  disabled={handling || !connectedWallet}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  mb={1}
                  sx={{
                    display: "flex",
                    justifyContent: isMobile ? "flex-start" : "flex-end",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    setBaseAmount(formatPrice(baseBalance, SCCDecimals))
                  }
                >
                  Balance:{" "}
                  {walletState.walletAddress && selectedChain ? (
                    `${fCurrency(baseBalance, SCCDecimals)} ${
                      selectedToken?.symbol
                    }`
                  ) : (
                    <IconLineDashed />
                  )}
                </Typography>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  justifyContent="space-between"
                >
                  <SelectToken
                    sx={{
                      width: isMobile ? "100%" : selectedToken ? "37%" : "44%",
                      height: !isMobile && "70px",
                    }}
                    selectedToken={selectedToken}
                    setSelectedToken={(token: any) => setSelectedToken(token)}
                    disabled={handling}
                  />
                  <SelectChain
                    sx={{
                      width: isMobile ? "100%" : selectedToken ? "60%" : "53%",
                      height: !isMobile && "70px",
                      marginTop: isMobile && "1rem",
                    }}
                    selectedToken={selectedToken}
                    selectedChain={selectedChain}
                    setSelectedChain={(chain: any) => setSelectedChain(chain)}
                    disabled={handling}
                  />
                </Stack>
              </Grid>
            </Grid>
          </CrossBox>
          <Box
            m={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <IconArrowBigDownLines />
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mx: "1rem",
              }}
              color={"var(--color-text-title)"}
            >
              Fee:{" "}
              {selectedChain ? (
                `${formatPrice(baseAmount * (fee / 100), SCCDecimals)} ${
                  selectedChain?.symbol
                } ~ ${fee}%`
              ) : (
                <IconLineDashed />
              )}
            </Typography>
          </Box>
          <CrossBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography mb={1} variant="h6">
                  Receive
                </Typography>
                <CustomInput
                  value={formatPrice(quoteAmount, SCCDecimals)}
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  mb={1}
                  sx={{
                    display: "flex",
                    justifyContent: isMobile ? "flex-start" : "flex-end",
                  }}
                >
                  Balance:{" "}
                  {walletState.walletAddress && selectedQuoteChain ? (
                    `${fCurrency(quoteBalance, SCCDecimals)} ${
                      selectedToken?.symbol
                    }`
                  ) : (
                    <IconLineDashed />
                  )}
                </Typography>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  justifyContent="space-between"
                >
                  <ConnectWalletButton
                    sx={{
                      width: isMobile ? "100%" : selectedToken ? "37%" : "44%",
                    }}
                    disabled={handling}
                  >
                    {selectedToken ? (
                      <>
                        <ListItemIcon sx={{ minWidth: "40px" }}>
                          {selectedToken?.symbol ? (
                            <Avatar
                              sx={{ width: 30, height: 30 }}
                              src={`/images/coins/${selectedToken.symbol}.png`}
                            />
                          ) : null}
                        </ListItemIcon>
                        <ListItemText>
                          <CardHeader
                            sx={{ padding: 0 }}
                            title={
                              <Typography>
                                {selectedToken.symbol}{" "}
                                <Hidden smDown>
                                  <span style={{ opacity: 0.6 }}></span>
                                </Hidden>
                              </Typography>
                            }
                          />
                        </ListItemText>
                      </>
                    ) : (
                      <ListItemText>
                        <Typography sx={{ opacity: 0.5 }}>
                          Select token
                        </Typography>
                      </ListItemText>
                    )}
                  </ConnectWalletButton>
                  <SelectQuoteChain
                    sx={{
                      width: isMobile ? "100%" : selectedToken ? "60%" : "53%",
                      height: !isMobile && "70px",
                      marginTop: isMobile && "1rem",
                    }}
                    selectedToken={selectedToken}
                    selectedChain={selectedChain}
                    selectedQuoteChain={selectedQuoteChain}
                    setSelectedQuoteChain={(chain: any) =>
                      setSelectedQuoteChain(chain)
                    }
                    disabled={handling}
                  />
                </Stack>
              </Grid>
            </Grid>
          </CrossBox>
          {/* {selectedQuoteChain ? (
            <Stack direction="row" alignItems="center">
              <Typography py={2} color={"var(--color-text-title)"}>
                {selectedQuoteChain?.info?.name} pool:{" "}
                {fCurrency(receivePool, SCCDecimals)} {selectedToken.symbol}
              </Typography>
               <Link
                    href={`${selectedQuoteChain?.info?.explorerUrl}token/${
                      addresses[selectedQuoteChain.chainName]?.tokenAddress
                    }?a=${
                      addresses[selectedQuoteChain.chainName]?.bridgeContract
                    }`}
                    target="_blank"
                  >
                    <OpenInNewIcon fontSize="small" sx={{ pb: 0, ml: 1 }} />
                  </Link>
            </Stack>
          ) : null} */}
          <Box mt={3} />
          <Reminder fee={fee} />
          <Box textAlign={"center"} mt={5}>
            <Typography color="#FF4842" my={5} textAlign="left">
              {error}
            </Typography>
            <Stack direction={"row"} mt={5}>
              <ApprovePopup
                handleCheckCondition={handleCheckCondition}
                baseAmount={baseAmount}
                provider={provider}
                handleSuccess={() => setApproved(true)}
                selectedChain={selectedChain}
                approved={approved}
                startHandle={startHandle}
                endHandle={endHandle}
                connectedWallet={connectedWallet}
              />
              <ConfirmPopup
                handleCheckCondition={handleCheckCondition}
                baseAmount={baseAmount}
                provider={provider}
                connectedWallet={connectedWallet}
                handleSuccess={() => {
                  setApproved(false);
                  setRefreshing(!refreshing);
                }}
                selectedChain={selectedChain}
                approved={approved}
                startHandle={startHandle}
                endHandle={endHandle}
              />
              <ButtonLoadingPrimary
                sx={{ width: "20%" }}
                onClick={() => setRefreshing(!refreshing)}
                disabled={!connectedWallet}
              >
                <Sync />
              </ButtonLoadingPrimary>
            </Stack>
          </Box>
        </Container>
      )}
    </Box>
  );
}

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90vw",
  width: 600,
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  color: "var(--color-primary)",
  backgroundColor: "var(--color-accent)",
  borderRadius: "10px",
  border: "1px solid var(--color-text-secondary-10)",
  padding: "8px",
  [theme.breakpoints.down("sm")]: {
    padding: "2px",
  },
}));

export const ContentModalBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: "var(--color-primary)",
  backgroundColor: "var(--color-accent)",
  borderRadius: "10px",
  border: "solid 1px var(--color-text-secondary-50)",
  padding: "3rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));
