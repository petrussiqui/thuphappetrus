import {
  Avatar,
  CardHeader,
  Hidden,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import useResponsive from "hooks/useResponsive";
import React, { useRef, useState } from "react";
import ConnectWalletButton from "./ConnectWalletButton";
import { SwapProvider } from "./SwapProvider";

export default function SelectQuoteChain({
  sx,
  selectedChain,
  setSelectedQuoteChain,
  selectedQuoteChain,
  disabled,
}: any) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(null);
  const [chainList, setChainList] = useState(null);
  const { contracts } = SwapProvider.useState();

  const isMobile = useResponsive("down", "sm");
  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  React.useEffect(() => {
    setSelectedQuoteChain(null);
    if (contracts && selectedChain) {
      const chainList = contracts.filter(
        (c: any) =>
          c.symbol === selectedChain.symbol &&
          selectedChain.chainName !== c.chainName
      );
      setChainList(chainList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contracts, selectedChain]);

  const handleClose = () => {
    setOpen(null);
  };

  const handleSelect = (option: any) => {
    setSelectedQuoteChain(option);
    handleClose();
  };

  return (
    <>
      <ConnectWalletButton
        ref={anchorRef}
        sx={{ ...sx }}
        disabled={disabled}
        onClick={disabled ? () => {} : handleOpen}
      >
        {selectedQuoteChain ? (
          <>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={`/images/coins/${selectedQuoteChain.chainName}.png`}
              />
            </ListItemIcon>
            <ListItemText>
              <CardHeader
                sx={{ padding: 0 }}
                title={
                  <Typography sx={{ fontSize: 14 }}>
                    {selectedQuoteChain?.info?.name}{" "}
                    <Hidden smDown>
                      <span style={{ opacity: 0.6 }}>
                        ({selectedQuoteChain?.chainName})
                      </span>
                    </Hidden>
                  </Typography>
                }
              />
            </ListItemText>
          </>
        ) : (
          <ListItemText>
            <Typography sx={{ opacity: 0.5 }}>Select network</Typography>
          </ListItemText>
        )}
        {/* <IconChevronDown
          size={"1.3rem"}
          style={{ marginLeft: "10px", opacity: 0.5 }}
        /> */}
      </ConnectWalletButton>
      {/* <MenuPopover
        open={open}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          minWidth: "250px",
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Scrollbar
          style={{
            height: "50%",
            maxHeight: "calc(100vh - 205px)",
            overflowX: "hidden",
          }}
        >
          {chainList && chainList.length > 0 ? (
            <Stack sx={{ p: 1 }}>
              {chainList?.map((option, index) => (
                <MenuItem key={index} onClick={() => handleSelect(option)}>
                  <ListItemIcon>
                    <Avatar
                      src={CoinImage[option.chainName]}
                      sx={{
                        marginRight: "10px",
                        height: isMobile ? 30 : 40,
                        width: isMobile ? 30 : 40,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText>{option.chainName}</ListItemText>
                </MenuItem>
              ))}
            </Stack>
          ) : (
            <Stack sx={{ p: 1 }}>No record found</Stack>
          )}
        </Scrollbar>
      </MenuPopover> */}
    </>
  );
}
