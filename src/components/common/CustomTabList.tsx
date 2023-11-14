import { TabList } from "@mui/lab";
import { styled } from "@mui/material";

export const SpecialTabList = styled(TabList)(({ theme }) => ({
  transition: "1s",
  "& button": {
    padding: "0",
    marginRight: 16,
    color: "#ccc",
    fontWeight: 700,
    fontSize: 16,
    "& span": {
      transition: "0.5s",
      background: "transparent",
    },
  },
  "& button.Mui-selected": {
    color: "#333",
    transition: "1s",
  },
  " .MuiTabs-indicator": {
    // backgroundColor: "var(--primary)",
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("sm")]: {
    "& button": {
      marginRight: 8,
      fontSize: 14,
    },
  },
}));
