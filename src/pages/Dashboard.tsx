import { Box, Stack, Typography } from "@mui/material";
import { ButtonLoadingSecondary } from "components/common/CustomButton";
import { TypographyGradient } from "components/common/CustomTypography";
import {
  AddressBox,
  FeaturesStack,
  IconFeatureBox,
  ImgAccent,
  WelcomeStack,
} from "components/dashboard/Styled";
import useResponsive from "hooks/useResponsive";
import WalletDrawer from "modules/walletProvider/walletDrawer";
import { WalletProvider } from "modules/walletProvider/walletProvider";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { formatAddress } from "settings/format";

const featureList = [
  {
    iconName: "profile",
    title: "My Profile",
    link: "/app/profile",
  },
  {
    iconName: "wallet",
    title: "Wallet",
    link: "/app/wallet",
  },
  {
    iconName: "my-items",
    title: "my items",
    link: "/app/my-items",
  },
  {
    iconName: "vesting",
    title: "vesting",
    link: "/app/vesting",
  },
  {
    iconName: "staking",
    title: "staking",
    link: "/app/staking",
  },
  {
    iconName: "marketplace",
    title: "marketplace",
    link: "/app/marketplace",
  },
  {
    iconName: "crosschain",
    title: "cross-chain",
    link: "/app/cross-chain",
  },
  {
    iconName: "governance",
    title: "governance",
    link: "/app/governance",
  },
  {
    iconName: "community",
    title: "community",
    link: "/app/community",
  },
];

export default function Dashboard() {
  const isMobile = useResponsive("down", "sm");
  const [open, setOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(false);
  const walletState = WalletProvider.useState();
  const walletAction = WalletProvider.useAction();

  useEffect(() => {
    if (!walletState.walletAddress) setConnectedWallet(false);
    else setConnectedWallet(true);
  }, [walletState.walletAddress]);

  return (
    <Stack gap={5}>
      <WelcomeStack>
        <ImgAccent
          src="/images/home/star.png"
          sx={{ top: 0, left: 0, width: isMobile ? "15px" : "auto" }}
          alt=""
          className="star"
        />
        <ImgAccent
          src="/images/home/star.png"
          sx={{
            bottom: 5,
            right: 0,
            width: isMobile ? "15px" : "auto",
          }}
          alt=""
          className="star"
        />
        <Stack>
          <Typography variant={isMobile ? "body1" : "h5"} fontWeight={800}>
            HI #USER_NAME
          </Typography>
          <TypographyGradient variant={isMobile ? "h6" : "h4"} fontWeight={800}>
            WELCOME TO SPRINT!
          </TypographyGradient>
        </Stack>
        {connectedWallet ? (
          <Stack
            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 1.5 : 2}
          >
            <CopyToClipboard
              text={walletState.walletAddress as string}
              onCopy={(value: any, e: any) => toast.success("Copied")}
            >
              <AddressBox>
                {formatAddress(walletState.walletAddress, 10)}
              </AddressBox>
            </CopyToClipboard>

            <ButtonLoadingSecondary
              onClick={() => walletAction.disconnectWallet()}
            >
              Disconnect
            </ButtonLoadingSecondary>
          </Stack>
        ) : (
          <ButtonLoadingSecondary onClick={() => setOpen(true)}>
            <Box
              component="img"
              src="/images/icons/wallet.png"
              sx={{
                width: isMobile ? "16px" : "24px",
              }}
              alt=""
            />
            Connect Wallet
          </ButtonLoadingSecondary>
        )}
      </WelcomeStack>
      <WalletDrawer open={open} handleClose={() => setOpen(false)} />
      <FeaturesStack>
        {featureList.map((item, index) => (
          <Link key={index} to={item.link}>
            <IconFeatureBox>
              <img src={`/images/icons/${item.iconName}.png`} alt="" />
              <Typography
                variant="body1"
                fontWeight={700}
                textTransform={"uppercase"}
              >
                {item.title}
              </Typography>
            </IconFeatureBox>
          </Link>
        ))}
      </FeaturesStack>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <ButtonLoadingSecondary onClick={() => setOpen(true)}>
          <Box
            component="img"
            src="/images/icons/logout.png"
            sx={{
              width: isMobile ? "16px" : "24px",
            }}
            alt=""
          />
          Logout
        </ButtonLoadingSecondary>{" "}
      </Stack>
    </Stack>
  );
}
