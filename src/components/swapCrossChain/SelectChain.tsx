import {
  Avatar,
  CardHeader,
  Hidden,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import ConnectWalletButton from "./ConnectWalletButton";
import { SwapProvider } from "./SwapProvider";

export default function SelectChain({
  sx,
  selectedChain,
  selectedToken,
  setSelectedChain,
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
    setSelectedChain(null);
    if (selectedToken) {
      const chainList = contracts.filter(
        (c: any) => c.symbol === selectedToken.symbol
      );
      setChainList(chainList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedToken, contracts]);

  const handleClose = () => {
    setOpen(null);
  };

  const handleSelect = (option: any) => {
    setSelectedChain(option);
    handleClose();
  };

  return (
    <>
      <ConnectWalletButton
        disabled={disabled}
        onClick={disabled ? () => true : handleOpen}
        ref={anchorRef}
        sx={{ ...sx }}
      >
        {selectedChain ? (
          <>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={`/images/coins/${selectedToken.chainName}.png`}
              />
            </ListItemIcon>
            <ListItemText>
              <CardHeader
                sx={{ padding: 0 }}
                title={
                  <Typography sx={{ fontSize: 14 }}>
                    {selectedChain?.info?.name}{" "}
                    <Hidden smDown>
                      <span style={{ opacity: 0.6 }}>
                        ({selectedChain.chainName})
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
