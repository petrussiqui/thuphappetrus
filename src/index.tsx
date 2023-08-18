import "./styles/index.scss";
import "./styles/myAnimation.scss";
import "./styles/Animation.css";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
