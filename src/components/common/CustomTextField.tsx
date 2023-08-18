import { TextField, styled } from "@mui/material";

export const DefaultInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  color: "#F0D94F",
  marginTop: "0.5rem",
  "& .MuiSelect-select": {
    display: "inline-flex",
  },
  "& label.Mui-focused": {
    color: "#fff8",
  },
  "& .MuiOutlinedInput-root": {
    color: "#F0D94F",
    "& fieldset": {
      borderColor: "rgb(68,68,68)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(240,217,79,0.2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(240,217,79,0.2)",
    },
  },
  "& > label": {
    color: "white!important",
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      color: "#F0D94F",
    },
  },
}));

export const TextFieldPrimary = styled(TextField)(({ theme }) => ({
  background: "#0E3E34",
  margin: "12px 0 16px",
  borderRadius: "0px",
  "& fieldset": { border: "none" },
  "& input": {
    color: "rgb(255,255,255,0.75)",
  },
}));

export const TextFieldSecondary = styled(TextField)(({ theme }) => ({
  background: "#fff",
  margin: "12px 0 16px",
  borderRadius: "10px",
  boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
  "& fieldset": { border: "none" },
}));
