import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "@mui/material";
import UserSidebar from "./components/UserSidebar";
import { useState } from "react";

const RootStyle = styled("div")({
  color: "#fff",
});
const MainStyle = styled("div")(({ theme }) => ({
  backgroundImage: "url('/images/home/section-bg-2.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
    backgroundImage: "url('/images/home/section-bg-1.png')",
  },
}));

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <RootStyle>
      <Header />
      {/* <UserSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} /> */}
      <MainStyle>
        <Container maxWidth={"xl"}>
          <Outlet />
        </Container>
      </MainStyle>
    </RootStyle>
  );
}
