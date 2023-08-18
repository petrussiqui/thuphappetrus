import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { IconX } from "@tabler/icons-react";
import { ImgAccent } from "components/home/HomeStyled";
import { useEffect, useState } from "react";
import { WalletProvider } from "./walletProvider";

const WalletBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px 0 ",
  border: "1px solid var(--color-secondary)",
  padding: "6px",
  background: "rgba(0, 207, 255, 0.20)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  transition: "all 0.3s",
  color: "var(--color-text-title)",
  ":hover": {
    background: "var(--linear-primary-50)",
    color: "var(--color-accent)",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const WalletImageBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px 0 ",
  border: "1px solid rgb(0, 255, 249,0.6)",
  padding: "6px",
  background: "var(--color-accent)",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {},
}));

const Install = styled(Link)(({ theme }) => ({
  borderRadius: "10px 0 ",
  border: "1px solid rgb(0, 255, 249,0.6)",
  padding: "4px 8px",
  background: "var(--linear-primary)",
  display: "flex",
  alignItems: "center",
  color: "var(--color-accent)",
  textDecoration: "none",
  justifySelf: "flex-end",
  [theme.breakpoints.down("sm")]: {},
}));

export default function WalletDrawer({ open = false, handleClose = () => {} }) {
  const walletAction = WalletProvider.useAction();

  const [isInstalledMetamask, setIsInstalledMetamask] = useState(false);
  const [isInstalledBitKeep, setIsInstalledBitKeep] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsInstalledMetamask(true);
    }
    if (typeof window.bitkeep !== "undefined") {
      setIsInstalledBitKeep(true);
    }
  }, []);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{
        " .MuiPaper-root": {
          backgroundColor: "transparent!important",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          height: "100%",
          backgroundImage: 'url("/images/home/bg-drawer.png")',
          backgroundSize: "cover",
          color: "white",
          p: 6,
          pr: 4,
          my: 4,
          position: "relative",
        }}
      >
        <ImgAccent
          src="/images/home/star.png"
          sx={{
            top: "8px",
            left: "0",
            width: "24px",
          }}
          alt=""
          className="star"
        />
        <Box
          sx={{
            position: "absolute",
            top: "32px",
            right: "16px",
          }}
        >
          <IconButton onClick={handleClose}>
            <IconX color="white" />
          </IconButton>
        </Box>
        <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
          <Typography textAlign={"center"}>No logged in</Typography>
          <Box
            sx={{
              borderRadius: "10px 0 ",
              border: "1px solid var(--color-secondary)",
              padding: "12px",
              background: "rgba(0, 207, 255, 0.10)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src={"/images/icons/wallet.png"}
              alt=""
              width={"40px"}
            />
          </Box>
          <Typography textAlign={"center"} variant="h6" fontWeight={600}>
            My Wallet
          </Typography>
        </Stack>
        <Divider sx={{ borderColor: "#D9D9D9", my: 2 }} />

        <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
          <Typography textAlign={"center"} variant="body2">
            Connect with your available wallet or create new wallet to join our
            marketplace
          </Typography>
          <Stack gap={1.5} width={"100%"}>
            <WalletBox
              onClick={() => {
                if (isInstalledMetamask) {
                  walletAction.connectWallet("metamask");
                  handleClose();
                }
              }}
              sx={{
                cursor: isInstalledMetamask ? "pointer" : "normal",
              }}
            >
              <Stack direction={"row"} gap={2} alignItems={"center"}>
                <WalletImageBox>
                  <Box
                    component={"img"}
                    src={"/images/icons/metamask.png"}
                    alt=""
                    width={"32px"}
                  />
                </WalletImageBox>
                <Typography
                  textAlign={"center"}
                  variant="body1"
                  fontWeight={700}
                >
                  MetaMask
                </Typography>
              </Stack>
              {!isInstalledMetamask && (
                <Install href="https://metamask.io/download/" target="_blank">
                  <Typography variant="caption">Install</Typography>
                </Install>
              )}
            </WalletBox>

            <WalletBox
              onClick={() => {
                if (isInstalledBitKeep) {
                  walletAction.connectWallet("bitkeep");
                  handleClose();
                }
              }}
              sx={{
                cursor: isInstalledBitKeep ? "pointer" : "normal",
              }}
            >
              <Stack direction={"row"} gap={2} alignItems={"center"}>
                <WalletImageBox>
                  <Box
                    component={"img"}
                    src={"/images/icons/bitkeep.png"}
                    alt=""
                    width={"32px"}
                  />
                </WalletImageBox>
                <Typography
                  textAlign={"center"}
                  variant="body1"
                  fontWeight={700}
                >
                  BitKeep
                </Typography>
              </Stack>
              {!isInstalledBitKeep && (
                <Install
                  href="https://bitkeep.com/download?type=2&theme=light"
                  target="_blank"
                >
                  <Typography variant="caption">Install</Typography>
                </Install>
              )}
            </WalletBox>
          </Stack>
          <Box>
            <Typography textAlign={"center"} variant="body2">
              We do not hold private keys and cannot access your funds without
              your confirmation
            </Typography>
            <Typography textAlign={"center"} variant="body2">
              See{" "}
              <a
                href="https://docs.google.com/document/d/1ZEFjpQob0HFqEPxxvAoE2F-ucM3d0bbPah8iLMRkm4c/edit"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Terms and Conditions
              </a>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Drawer>
  );
}
