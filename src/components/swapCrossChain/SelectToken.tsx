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

export default function SelectToken({
  sx,
  selectedToken,
  setSelectedToken,
  disabled,
}: any) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(null);
  const [tokenList, setTokenList] = useState<any>(null);
  const { contracts } = SwapProvider.useState();
  const isMobile = useResponsive("down", "sm");

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  React.useEffect(() => {
    const tokenList = contracts?.filter(
      (value: any, index: any, self: any) =>
        index === self.findIndex((t: any) => t.symbol === value.symbol)
    );
    setTokenList(tokenList);
  }, [contracts]);

  const handleClose = () => {
    setOpen(null);
  };

  const handleSelect = (option: any) => {
    setSelectedToken(option);
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
        {selectedToken ? (
          <>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={`/images/coins/${selectedToken.symbol}.png`}
              />
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
            <Typography sx={{ opacity: 0.5 }}>Select token</Typography>
          </ListItemText>
        )}
        {/* <IconChevronDown /> */}
      </ConnectWalletButton>
      {/* <MenuPopover
        open={Boolean(open)}
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
        <Scrollbar>
          <Stack sx={{ p: 1 }}>
            {tokenList?.map((option: any, index: number) => (
              <MenuItem key={index} onClick={() => handleSelect(option)}>
                <ListItemIcon>
                  <Avatar
                    src={option.symbol ? CoinImage.SWP : CoinImage.SWP}
                    sx={{
                      marginRight: "10px",
                      height: isMobile ? 30 : 40,
                      width: isMobile ? 30 : 40,
                    }}
                  />
                </ListItemIcon>
                <ListItemText>{option.symbol}</ListItemText>
              </MenuItem>
            ))}
          </Stack>
        </Scrollbar>
      </MenuPopover> */}
    </>
  );
}
