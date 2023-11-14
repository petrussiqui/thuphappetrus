import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const RootStyle = styled("div")({
  color: "#fff",
});
const MainStyle = styled("div")(({ theme }) => ({
  minHeight: "80vh",
  [theme.breakpoints.down("md")]: {},
}));

export default function MainLayout() {
  return (
    <RootStyle>
      <Header />
      <MainStyle>
        <Outlet />
      </MainStyle>
      <Footer />
    </RootStyle>
  );
}
