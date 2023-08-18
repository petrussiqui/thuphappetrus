import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { BigNumber, BigNumberish, Contract, ethers } from "ethers";
import { formatEther, parseUnits } from "ethers/lib/utils";
import { OnchainHelper } from "onchain";
import { parseEthereumError } from "onchain/common";
import React from "react";
import { toast } from "react-toastify";
const zeroAddress = "0x000000000000000000000000000000000000";

export const RealData = true;

export type TSupportToken = {
  symbol: string | undefined;
  contractAddress: string;
  price: BigNumberish;
  usdRate: number;
  label?: string;
};

type TSaleNodeInformation = {
  currentPrice: BigNumberish;
  currentNode: BigNumberish;
  contractAddress: string;
  supportTokens: TSupportToken[];
  nextNodePrice: string;
};

type TConfig = {
  purchaseNodeContract: string;
  roundId: string;
  providerLink: string;
  tokens: { symbol: string; address: string; label: string }[];
  chainInfo: any;
} | null;
interface AppState {
  provider: JsonRpcProvider | null | undefined;
  prefix: any | null;
  signer: any | null;
  walletAddress?: string | null;
  contract: Contract | null;
  saleNodeInformation: TSaleNodeInformation;
  config: TConfig;
}
const initialState: AppState = {
  provider: undefined,
  prefix: null,
  signer: null,
  walletAddress: null,
  contract: null,
  saleNodeInformation: {
    currentNode: 0,
    currentPrice: 0,
    contractAddress: "",
    supportTokens: [],
    nextNodePrice: "0",
  },
  config: null,
};

type TAction =
  | "SET_WALLET"
  | "SET_CONTRACT"
  | "SET_SALE_NODE_INFORMATION"
  | "SET_CONFIG";
type TSupportWallet = "metamask" | "bitkeep";

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
    case "SET_CONFIG":
      return { ...state, config: payload };
    case "SET_SALE_NODE_INFORMATION":
      return { ...state, saleNodeInformation: payload };
    case "SET_CONTRACT":
      return { ...state, contract: payload };
    case "SET_WALLET":
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
  const { state, dispatch } = React.useContext(AppContext)!;

  async function connectWallet(
    walletName: "metamask" | "bitkeep",
    callback: () => void = () => false
  ) {
    let prefix = null;
    let provider = null;
    let signer = null;
    switch (walletName) {
      case "bitkeep":
        prefix = window.bitkeep.ethereum;
        break;
      default:
        prefix = window.ethereum;
        break;
    }
    if (prefix) {
      provider = new Web3Provider(prefix, "any");
      signer = provider.getSigner();
      let walletAddress = "";
      try {
        const address = await signer.getAddress();
        walletAddress = address;
      } catch (error) {
        try {
          const accounts = await prefix.request({
            method: "eth_requestAccounts",
          });
          const address = accounts[0];
          walletAddress = address;
        } catch (error) {
          console.error(error);
        }
      }
      localStorage.setItem("wallet-name", walletName);
      prefix.on("accountsChanged", (accounts: any) => {
        connectWallet(walletName, callback);
      });
      callback();
      dispatch({
        type: "SET_WALLET",
        payload: {
          walletAddress,
          provider,
          prefix,
          signer,
        },
      });
    } else {
      dispatch({
        type: "SET_WALLET",
        payload: {
          walletAddress: null,
        },
      });
    }
  }

  function disconnectWallet() {
    localStorage.removeItem("wallet-name");
    dispatch({
      type: "SET_WALLET",
      payload: {
        prefix: null,
        provider: null,
        signer: null,
        walletAddress: null,
      },
    });
  }

  async function checkLocalStorageWallet() {
    const walletName = localStorage.getItem("wallet-name") as TSupportWallet;
    if (walletName) {
      await connectWallet(walletName);
    }
  }

  async function createCommunicateContract() {
    if (state.config) {
      const provider = new JsonRpcProvider(state.config.providerLink);
      const contract = new ethers.Contract(
        state.config.purchaseNodeContract,
        OnchainHelper.ABIs.SaleNodeABI,
        provider
      );
      dispatch({ type: "SET_CONTRACT", payload: contract });
    }
  }

  async function getSaleNodeInformation() {
    if (state.config) {
      const contract = state.contract;
      const info: {
        rsRound: {
          totalSold: BigNumberish;
          priceUsd: BigNumberish;
          contractAddress: string;
        };
        rsArrSupportedToken: { paymentToken: string; usdRate: BigNumberish }[];
      } = await contract?.getRoundInfo(state.config.roundId);
      const supportTokens: TSupportToken[] = [];
      const nextNodePrice = await contract?.getNodePriceByNumb(
        state.config.roundId,
        info.rsRound.totalSold
      );
      info.rsArrSupportedToken.forEach((token) => {
        const find = state.config?.tokens.find(
          (t) => t.address === token.paymentToken
        );
        const { usdRate } = token;
        supportTokens.push({
          contractAddress: token.paymentToken,
          price: Number(info.rsRound.priceUsd) / Number(usdRate),
          symbol: find?.symbol,
          usdRate: Number(formatEther(usdRate)),
          label: find?.symbol === "ING" ? "ING + ING Lockup" : find?.symbol,
        });
      });
      const result: TSaleNodeInformation = {
        currentNode: info.rsRound.totalSold,
        currentPrice: info.rsRound.priceUsd,
        contractAddress: state.config.purchaseNodeContract,
        supportTokens,
        nextNodePrice: formatEther(nextNodePrice),
      };
      dispatch({ type: "SET_SALE_NODE_INFORMATION", payload: result });
    }
  }

  async function getReceipt(txHash: string) {
    try {
      const receipt: any = await state?.provider?.waitForTransaction(txHash);
      if (receipt.status === 1) {
        return true;
      } else {
        toast.error("Transaction error with status code 0");
        return false;
      }
    } catch (error: any) {
      toast.error(parseEthereumError(error));
      throw error;
    }
  }

  async function checkBeforePurchase(
    tokenAddress: string,
    approveAddress: string,
    amountNeeded: BigNumberish,
    walletAddress: string | null | undefined,
    errorCallback: any
  ) {
    try {
      if (state.provider) {
        if (tokenAddress.includes(zeroAddress)) return true;

        const contractInstance = new ethers.Contract(
          tokenAddress,
          OnchainHelper.ABIs.ERC20,
          state.provider
        );

        var balance = await contractInstance.balanceOf(walletAddress);

        var approveAmount = await contractInstance.allowance(
          walletAddress,
          approveAddress
        );

        if (
          Number(ethers.utils.formatEther(approveAmount.toString())) >=
          Number(ethers.utils.formatEther(amountNeeded))
        ) {
          return true;
        }

        // if (
        //   Number(ethers.utils.formatEther(balance)) >=
        //   Number(ethers.utils.formatEther(amountNeeded))
        // ) {
        const contractWithSigner = new ethers.Contract(
          tokenAddress,
          OnchainHelper.ABIs.ERC20,
          state.signer
        );

        const estimateGas = await contractWithSigner.estimateGas.approve(
          approveAddress,
          amountNeeded
        );

        const tx = await contractWithSigner.approve(
          approveAddress,
          amountNeeded,
          { gasLimit: Number(estimateGas) * 10 }
        );

        var approveSuccess = await getReceipt(tx.hash);

        if (!approveSuccess) {
          return false;
        }

        if (approveSuccess) return true;

        return false;
        // } else {
        //   errorCallback(`Unavailable balance`);
        //   return false;
        // }
      }
    } catch (error) {
      console.log(error);

      errorCallback(parseEthereumError(error));
      return false;
    }
  }

  async function purchaseSaleNote({
    paymentToken,
    amount,
    price,
    approvedCallback,
    confirmedCallback,
    successCallback,
    errorCallback,
  }: {
    paymentToken: TSupportToken;
    amount: number;
    price: BigNumber;
    approvedCallback: any;
    confirmedCallback: any;
    successCallback: any;
    errorCallback: any;
  }) {
    try {
      if (state.config) {
        let value: any =
          Number(formatEther(price)) / Number(paymentToken?.usdRate);
        value = parseUnits(value.toFixed(8), 18);

        const check = await checkBeforePurchase(
          paymentToken.contractAddress,
          state.config?.purchaseNodeContract,
          value,
          state.walletAddress,
          errorCallback
        );

        if (check) {
          approvedCallback();
          const contract = new ethers.Contract(
            state.config?.purchaseNodeContract,
            OnchainHelper.ABIs.SaleNodeABI,
            state.signer
          );
          const txHash = await contract.purchaseNFT(
            state.config.roundId,
            amount,
            value,
            paymentToken.contractAddress
            // {
            //   value: paymentToken.contractAddress.includes(zeroAddress)
            //     ? value.toString()
            //     : 0,
            // }
          );
          const status = await getReceipt(txHash.hash);
          if (status) {
            confirmedCallback();
            successCallback();
          }
        }
      }
    } catch (error) {
      console.log(error);

      errorCallback(parseEthereumError(error));
    }
  }

  const changeChain = async () => {
    // const chainInfo = {
    //   chainId: "0x61",
    //   rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    //   chainName: "Binance Smart Chain Testnet",
    //   nativeCurrency: {
    //     name: "Binance Smart Chain Testnet",
    //     decimals: 18,
    //     symbol: "tBNB",
    //   },
    //   blockExplorerUrls: ["https://testnet.bscscan.com"],
    // };
    if (state.config) {
      const chainInfo = state.config.chainInfo;
      try {
        await state.prefix.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainInfo.chainId }],
        });
        return true;
      } catch (switchError: any) {
        const mobileErrorCode = switchError.data?.originalError?.code;
        if (switchError.code === 4902 || mobileErrorCode === 4902) {
          try {
            await state.prefix.request({
              method: "wallet_addEthereumChain",
              params: [chainInfo],
            });
            return true;
          } catch (addError) {
            throw addError;
          }
        } else {
          console.log(switchError);
          throw switchError;
        }
      }
    }
  };

  const getSaleNodeTotalAmount = async (amount: number) => {
    const result = await state?.contract?.getTotalAmountByQty(
      state.config?.roundId,
      amount
    );

    return result;
  };

  const getBalance = async (token: TSupportToken) => {
    if (state.walletAddress && state.config) {
      const provider = new JsonRpcProvider(state.config?.providerLink);
      const contractInstance = new ethers.Contract(
        token.contractAddress,
        OnchainHelper.ABIs.ERC20,
        provider
      );
      var balance = await contractInstance.balanceOf(state.walletAddress);
      return balance;
    } else {
      return 0;
    }
  };

  return {
    connectWallet,
    checkLocalStorageWallet,
    disconnectWallet,
    createCommunicateContract,
    getSaleNodeInformation,
    purchaseSaleNote,
    changeChain,
    getBalance,
    getSaleNodeTotalAmount,
  };
}

export const WalletProvider = {
  Provider,
  useState,
  useAction,
};
