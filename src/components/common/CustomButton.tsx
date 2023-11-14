import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

export const ButtonLoadingNormal = styled(LoadingButton)(({ theme }) => ({
  background: "transparent",
  color: "var(--color-subtext)",
  fontWeight: "bold",
  textTransform: "initial",
  borderRadius: "0 10px 0 10px",
  transition: "0.5s",
  padding: "12px 36px",
  position: "relative",
  fontSize: "16px",
  "&::before": {
    content: "''",
    position: "absolute",
    background: "var(--linear-primary)",
    inset: "0px",
    zIndex: 1,
    borderRadius: "0 10px 0 10px",
    padding: "1px",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
  },
  " svg": {
    color: "var(--color-subtext)",
    marginRight: theme.spacing(1),
  },
  "&:hover": {
    background: "var(--linear-primary)",
    color: "var(--color-accent)",
    " svg": {
      color: "var(--color-accent)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px 24px",
  },
}));

export const ButtonLoadingPrimary = styled(LoadingButton)(({ theme }) => ({
  background: "var(--linear-primary)",
  color: "var(--color-accent)",
  fontWeight: "bold",
  textTransform: "initial",
  borderRadius: "0 10px 0 10px",
  transition: "0.5s",
  padding: "6px 30px",
  position: "relative",
  fontSize: "16px",
  "&:hover": {
    boxShadow: "var(--shadow-primary)",
  },
  "&.Mui-disabled": {
    background: "var(--linear-primary-10)",
    color: "var(--color-primary)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px 20px",
    height: "fit-content",
    fontSize: "14px",
  },
}));

export const ButtonLoadingSecondary = styled(LoadingButton)(({ theme }) => ({
  color: "var(--white)",
  background: "var(--linear-primary)",
  fontWeight: "bold",
  textTransform: "initial",
  borderRadius: "50px",
  transition: "0.5s",
  padding: "6px 24px",
  border: "none",
  "&:hover": {
    color: "#444",
    background: "var(--linear-primary)",
    boxShadow: "var(--shadow-primary)",
    border: "none",
  },
  "&.Mui-disabled": {
    color: "#999",
    background: "var(--linear-notice)",
    border: "none",
  },
}));
export const ButtonLoadingThird = styled(LoadingButton)(({ theme }) => ({
  background: "var(--linear-primary-10)",
  color: "var(--color-secondary)",
  border: "1px solid var(--color-subtext)",
  fontWeight: "bold",
  textTransform: "initial",
  borderRadius: "0 10px 0 10px",
  transition: "0.5s",
  padding: "6px 30px",
  position: "relative",
  fontSize: "16px",

  "&:hover": {
    background: "var(--linear-primary)",
    color: "var(--color-accent)",
  },
  "&.Mui-disabled": {
    background: "var(--linear-primary-10)",
    color: "var(--color-primary)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px 20px",
    height: "fit-content",
    fontSize: "14px",
  },
}));
