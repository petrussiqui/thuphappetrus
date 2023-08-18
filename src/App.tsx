import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SwapProvider } from "components/swapCrossChain/SwapProvider";
import { WalletProvider } from "modules/walletProvider/walletProvider";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "routes/routes";
import { useAppDispatch } from "store/hooks";
import { _changeLanguage } from "store/setting/settingActions";

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    []
  );

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(_changeLanguage(localStorage.getItem("lang")));
    console.log("version 0.0.1");
  }, [dispatch]);

  return (
    <WalletProvider.Provider>
      <SwapProvider.Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </ThemeProvider>
      </SwapProvider.Provider>
    </WalletProvider.Provider>
  );
}

export default App;
