import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavSection from "components/common/NavSection";
import Scrollbar from "components/common/Scrollbar";
import useResponsive from "hooks/useResponsive";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MENU_USER_CONFIG: {
  icon: any;
  title: string;
  path: string;
}[] = [
  {
    icon: <img src="/images/icons/profile.png" alt="" />,
    title: "My Profile",
    path: "/app/profile",
  },
  {
    icon: <img src="/images/icons/wallet.png" alt="" />,
    title: "Wallet",
    path: "/app/wallet",
  },
  {
    icon: <img src="/images/icons/my-items.png" alt="" />,
    title: "my items",
    path: "/app/my-items",
  },
  {
    icon: <img src="/images/icons/vesting.png" alt="" />,
    title: "vesting",
    path: "/app/vesting",
  },
  {
    icon: <img src="/images/icons/staking.png" alt="" />,
    title: "staking",
    path: "/app/staking",
  },
  {
    icon: <img src="/images/icons/marketplace.png" alt="" />,
    title: "marketplace",
    path: "/app/marketplace",
  },
  {
    icon: <img src="/images/icons/crosschain.png" alt="" />,
    title: "cross-chain",
    path: "/app/cross-chain",
  },
  {
    icon: <img src="/images/icons/governance.png" alt="" />,
    title: "governance",
    path: "/app/governance",
  },
  {
    icon: <img src="/images/icons/community.png" alt="" />,
    title: "community",
    path: "/app/community",
  },
];
const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    zIndex: "8",
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

export default function UserSidebar({
  isOpenSidebar,
  onCloseSidebar,
}: {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        overflowY: "auto",
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
        "&::-webkit-scrollbar": { display: "none" },
        background: "linear-gradient(to right,#0e1823 0%, #1e293f 100%)",
        paddingTop: "10rem",
        "& a": {
          color: "white",
          fontSize: "1rem",
          marginLeft: "1rem",
          "&.active": {
            color: "#EA8535",
            background: "transparent",
            position: "relative",
            textShadow: "#ea8535 0 0 10px",
            "&::before": {
              content: "''",
              position: "absolute",
              left: "-1rem",
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: " 10px solid #EA8535",
            },
          },
        },
      }}
    >
      <NavSection navConfig={MENU_USER_CONFIG} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRight: "1px solid #1E5180",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
