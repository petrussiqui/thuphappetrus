import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ShadowInsetBox = styled(Box)(({ theme }) => ({
  padding: "1rem",
  margin: "0.25rem",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(315deg,transparent, rgb(255,255,255,0.03) 30%, rgb(255,255,255,0.1) 100%)",
  boxShadow: "inset 0 0 20px rgb(255,255,255,0.2), 2px 3px 10px rgb(0,0,0,0.1)",
  backdropFilter: "blur(3px)",
  position: "relative",
}));

export const IconTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: "1.5rem",
  "& img": { marginRight: "8px" },
}));
