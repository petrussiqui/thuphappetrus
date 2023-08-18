import { alpha, Box, Modal, styled, Typography } from "@mui/material";
import { ethers } from "ethers";
import React from "react";
import { formatDisplayName } from "settings/format";
import { SwapProvider } from "./SwapProvider";

const getLogsByRangeBlock = async (
  provider: any,
  arrRangeBlockNumber: any,
  topic0: any,
  contractAddress: any
) => {
  const arrLogs = await provider.getLogs({
    fromBlock: arrRangeBlockNumber[0],
    toBlock: arrRangeBlockNumber[arrRangeBlockNumber.length - 1],
    topics: [topic0],
    address: contractAddress,
  });
  return arrLogs;
};

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90vw",
  width: 800,
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  color: "#000",
  backgroundColor: alpha("#fff", 0.9),
  //   boxShadow: "inset 0 0 50px rgb(0,255,221,0.3)",
  borderRadius: "10px",
  padding: "4rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    backgroundColor: alpha("#fff", 1),
    // boxShadow: "inset 0 0 10px rgb(0,255,221,0.3)",
  },
}));

export default function HistoryDetail({ item, handleClose }: any) {
  const { networks, addresses } = SwapProvider.useState();

  React.useEffect(() => {
    if (item) {
      (async () => {
        const findSendNetwork = networks.find(
          (network: any) => network.chainName === item.send.chain
        );
        const provider = new ethers.providers.JsonRpcBatchProvider(
          findSendNetwork.rpcUrl,
          "any"
        );

        const sendContractAddress = addresses[item.send.chain].bridgeContract;
        const sendDetail = await getLogsByRangeBlock(
          provider,
          item.send.time,
          item.recordId,
          sendContractAddress
        );
        console.log(sendDetail);
      })();
    }
  }, [item]);

  return (
    <Modal open={Boolean(item)} onClose={handleClose}>
      <ModalBox>
        <Typography textAlign={"left"} variant="h4">
          #{formatDisplayName(item?.id)}'s transaction detail
        </Typography>
      </ModalBox>
    </Modal>
  );
}
