import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

export const ButtonLoadingNormal = styled(LoadingButton)(({ theme }) => ({
  background: "transparent",
  color: "var(--color-text-secondary)",
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
    color: "var(--color-text-secondary)",
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
  color: "var(--color-blue)",
  borderRadius: "0px 15px",
  background: "rgba(0, 207, 255, 0.20)",
  backdropFilter: "blur(3.5px)",
  fontWeight: "bold",
  transition: "0.5s",
  padding: "8px 24px",
  border: "1px solid var(--color-border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  "&:hover": {
    color: "#444",
    background: "var(--linear-primary)",
    boxShadow: "var(--shadow-primary)",
  },
  "&.Mui-disabled": {
    color: "#999",
    background: "var( --color-third-30)",
    border: "none",
  },
}));
export const ButtonLoadingThird = styled(LoadingButton)(({ theme }) => ({
  background: "var(--linear-primary-10)",
  color: "var(--color-secondary)",
  border: "1px solid var(--color-text-secondary-10)",
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
