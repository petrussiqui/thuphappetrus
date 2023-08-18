export const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY
  ? process.env.REACT_APP_ACCESS_TOKEN_KEY
  : "LouyiO1igij54zszbC7FlwRe0uxZ";
export const DEVICE_KEY = "uU5tEUmAgvBWArsv";
export const SCOPES_KEY = "AhBcmvr1EkMdPnL5";
export const hostname = window.location.hostname.replace("www.", "");
//setup environment
export let AppConfig: { WS: string; API: string; ETHERSCAN_LINK: string } = {
  WS: process.env.REACT_APP_WS_URL
    ? process.env.REACT_APP_WS_URL
    : "https://apisprint.feliciastation.com",
  API: process.env.REACT_APP_API_BASE_URL
    ? process.env.REACT_APP_API_BASE_URL
    : `https://apisprint.feliciastation.com/api/v1`,
  ETHERSCAN_LINK: "",
};
