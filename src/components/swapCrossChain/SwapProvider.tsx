import React from "react";

const addresses = {
  BSC: {
    hotWallet: "0xb5bdceba7957b01a3e8d7cf34c7b0215dcf4398f",
    bridgeContract: "0xb11938D97545309Bd631DEFe60D14a8bB640C59b",
    tokenAddress: "0x53607c4a966f79d3ab1750180e770b0bfd493f46",
  },
  POLYGON: {
    hotWallet: "0xb5bdceba7957b01a3e8d7cf34c7b0215dcf4398f",
    bridgeContract: "0x84b27Ad0b851F8d1C14D4e93b73EafB378d0B026",
    tokenAddress: "0xabEDe05598760E399ed7EB24900b30C51788f00F",
  },
};

const contracts = [
  {
    chainName: "BSC",
    contractAddress: "0x53607c4a966f79d3ab1750180e770b0bfd493f46",
    symbol: "SWP",
  },
  {
    chainName: "POLYGON",
    contractAddress: "0xabEDe05598760E399ed7EB24900b30C51788f00F",
    symbol: "SWP",
  },
];

interface AppState {
  staticContracts: any;
  networks: any;
  addresses: any;
  contracts: any;
}
const initialState: AppState = {
  addresses,
  contracts: [],
  networks: null,
  staticContracts: contracts,
};

type TAction = "UPDATE";

type Action = {
  type: TAction;
  payload: any;
};

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = React.createContext<AppContextType | undefined>(undefined);

function reducer(state: AppState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE":
      return { ...state, ...payload };
    default:
      return state;
  }
}

export const Provider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const contextValue = { state, dispatch };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

function useState() {
  const { state } = React.useContext(AppContext)!;
  return state;
}

function useAction() {
  const { dispatch } = React.useContext(AppContext)!;

  function mapContracts(contracts: any, networks: any) {
    contracts.forEach((contract: any) => {
      contract.info = networks.find(
        (network: any) =>
          network.chainName.toLowerCase() === contract.chainName.toLowerCase()
      );
    });

    console.log({ contracts, networks });

    dispatch({
      type: "UPDATE",
      payload: {
        contracts,
        networks: networks,
      },
    });
  }
  async function getNetwork() {
    const res = await fetch(`https://bridge.stepwatch.io/api/v1/getConfig`);
    const data = (await res.json()).result;
    console.log(data);

    dispatch({
      type: "UPDATE",
      payload: {
        networks: data.networkConfig,
      },
    });
  }
  return { mapContracts, getNetwork };
}

export const SwapProvider = {
  Provider,
  useState,
  useAction,
};
