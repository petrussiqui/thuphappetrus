import { ListItem, styled } from "@mui/material";

const ConnectWalletButton = styled(ListItem)(({ theme }) => ({
  width: "unset",
  cursor: "pointer",
  borderRadius: "10px",
  transition: "all 0.2s !important",
  background: "rgba(255,255,255,0.05)",
  "&:hover": {
    background: "rgba(255,255,255,0.1)",
  },
  "& .MuiListItemText-root": {
    margin: "0px",
  },
  "& .subHeader": {
    marginTop: "-5px !important",
    marginLeft: "15px",
    color: "rgba(255,255,255,0.6)",
    position: "relative",
    fontSize: "0.7rem",
    "&:before": {
      content: '""',
      width: 10,
      height: 10,
      borderRadius: 10,
      background: "#36af11",
      position: "absolute",
      top: "calc(50% - 5px)",
      left: "-15px",
      border: "1px solid rgba(255,255,255,0.5)",
    },
  },
}));

export default ConnectWalletButton;
