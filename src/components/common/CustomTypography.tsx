import { styled, Typography } from "@mui/material";

export const TypographyGradient = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  background: "var(--linear-primary)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const TypographyAccent = styled(Typography)(({ theme }) => ({
  color: "#F0D94F",
  display: "initial",
}));
export const TypographyWhite = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
}));

export const TypographyShadow = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  textShadow: "0 0 8px rgba(255,255,255,0.5)",
}));

export const TypographyOutline = styled(Typography)(({ theme }) => ({
  display: "initial",
  lineHeight: "1.3",
  textShadow: "0 0 8px rgba(255,235,133,0.5)",
  background:
    "linear-gradient(180deg, rgb(240,217,79,0.5) 0%, rgb(240,217,79,0.025) 50% , transparent 100%)",
  WebkitTextStroke: "1px #F0D94F",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
  fontFamily: "'DM Sans', sans-serif",
}));
