import {
  Box,
  CircularProgress,
  Link,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ethers } from "ethers";
import { WalletProvider } from "modules/walletProvider/walletProvider";
import moment from "moment";
import React, { useState } from "react";
import { fCurrency, formatAddress } from "utils/format";
import Scrollbar from "../common/Scrollbar";
import { SCCDecimals } from "../../pages/SwapCrossChain";
import { SwapProvider } from "./SwapProvider";
import SearchNotFound from "components/common/SearchNotFound";

export default function History({ refreshing }: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { networks } = SwapProvider.useState();
  const walletState = WalletProvider.useState();
  const [page, setPage] = useState(1);

  React.useEffect(() => {
    if (walletState.walletAddress) {
      setLoading(true);
      (async () => {
        if (walletState.walletAddress) {
          const address = ethers.utils.getAddress(walletState.walletAddress);
          const req = await fetch(
            `https://bridge.stepwatch.io/api/v1/bridge/getHistoryByAddress?page=${page}&pageSize=10&userAddress=${address}`
          );
          const data = (await req.json()).result;
          setData(data);
        }
        setLoading(false);
      })();
    }
  }, [walletState.walletAddress, page, refreshing]);

  const handleChange = (e: any, newValue: any) => {
    setPage(newValue);
  };

  return (
    <Box mt={10}>
      <TableContainer sx={{ borderRadius: "15px" }}>
        <Scrollbar>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Send</TableCell>
                <TableCell>Receive</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.totalRecords.map((item: any, index: number) => {
                  const findChain = networks?.find(
                    (network: any) => network?.chainName === item.srcChain
                  );
                  const findReceiveChain = networks?.find(
                    (network: any) => network.chainName === item.destChain
                  );

                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {fCurrency(item.srcAmount, SCCDecimals)} SWP
                        <br />
                        {item.srcChain}
                        <br />{" "}
                        {moment(item.srcTime * 1000).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                        <br />
                        <Link
                          href={`${findChain?.explorerUrl}tx/${item.srcTxHash}`}
                          target="_blank"
                        >
                          {formatAddress(item.srcTxHash, 10)}
                        </Link>
                        <br />
                        Fee: {fCurrency(item.feeAmount, SCCDecimals)} SWP
                      </TableCell>
                      <TableCell>
                        {item.destAmount
                          ? fCurrency(item.destAmount, SCCDecimals)
                          : "--/--"}{" "}
                        SWP
                        <br />
                        {item.destChain}
                        <br />
                        {item.destTime
                          ? moment(item.destTime * 1000).format(
                              "YYYY-MM-DD HH:mm:ss"
                            )
                          : "--/--"}
                        <br />
                        {item.destTxHash ? (
                          <Link
                            href={`${findReceiveChain?.explorerUrl}tx/${item.destTxHash}`}
                            target="_blank"
                          >
                            {formatAddress(item.destTxHash, 10)}
                          </Link>
                        ) : (
                          `--/--`
                        )}
                        <br />
                        Status: <b>{item.status}</b>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {!loading && data && data.totalPages === 0 && (
                <TableRow>
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <SearchNotFound />
                  </TableCell>
                </TableRow>
              )}
              {loading && (
                <TableRow>
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <Stack
                      justifyContent={"center"}
                      alignItems={"center"}
                      minHeight={200}
                      color="#aaa"
                    >
                      <CircularProgress color="inherit" />
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Scrollbar>
        <Box
          sx={{
            background: "#fff",
            py: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Pagination
            count={data?.totalPages}
            shape="rounded"
            onChange={handleChange}
          />
        </Box>
      </TableContainer>
    </Box>
  );
}
