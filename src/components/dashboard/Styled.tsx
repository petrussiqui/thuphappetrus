import { Box, Stack, styled } from "@mui/material";

export const ImgAccent = styled("img")(({ theme }) => ({
  position: "absolute",
}));

export const WelcomeStack = styled(Stack)(({ theme }) => ({
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(/images/home/frame-welcome.png)",
  minHeight: 180,
  padding: theme.spacing(7),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: 16,
    padding: theme.spacing(7),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    backgroundImage: "url(/images/home/frame.png)",
    padding: theme.spacing(7, 5),
    gap: 16,
  },
}));

export const AddressBox = styled(Box)(({ theme }) => ({
  borderRadius: "0px 15px",
  background: "var(--color-third)",
  border: "1px solid var(--color-border)",
  padding: theme.spacing(1, 2),
  cursor: "pointer",
  color: "#626D7A",
  transition: "0.5s",
  "&:hover": {
    border: "1px solid var(--color-primary)",
    color: "var(--color-text)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const FeaturesStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: theme.spacing(0, 12),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 0),
    gap: theme.spacing(1.5),
  },
}));
export const IconFeatureBox = styled(Box)(({ theme }) => ({
  borderRadius: "30px 0px 30px 30px",
  background: "var(--linear-primary-10)",
  boxShadow: "0px 0px 15px 0px rgba(108, 246, 255, 0.55) inset",
  border: "1px solid  rgba(108, 246, 255, 0) ",
  backdropFilter: "blur(5px)",
  width: 180,
  height: 180,
  padding: theme.spacing(1),
  gap: theme.spacing(1),
  cursor: "pointer",
  transition: "0.5s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  " .MuiTypography-body1": {
    color: "white!important",
  },
  ":hover": {
    border: "1px solid var(--color-secondary)",
    boxShadow:
      "0px 0px 10px 0px rgba(108, 246, 255, 0.25),0px 0px 15px 0px rgba(108, 246, 255, 0.55) inset",
  },
  [theme.breakpoints.down("sm")]: {
    width: 140,
    height: 140,
    borderRadius: "20px 0px 20px 20px",
    " .MuiTypography-body1": {
      fontSize: "10px!important",
    },
    " img": {
      width: 32,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: 104,
    height: 104,
    borderRadius: "15px 0px 15px 15px",
    " .MuiTypography-body1": {
      fontSize: "10px!important",
    },
    " img": {
      width: 32,
    },
  },
}));
