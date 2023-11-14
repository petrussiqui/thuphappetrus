import { Box, styled } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
  background: "var(--color-footer)",
  padding: "64px 0 32px",
  " a": {
    color: "var(--color-text)",
    ":hover": {
      color: "var(--color-primary)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
  },
}));

export const EndBox = styled(Box)(() => ({
  color: "white",
  padding: "16px 0",
  "& p": {
    fontSize: "0.85rem",
    fontWeight: 500,
  },
}));
