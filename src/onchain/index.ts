import { parseEthereumError } from 'onchain/common';
import { ERC20_ABI } from "./ABIs";
import { ING_LOCK_ABI } from "./ABIs/INGLockABI";
import { SaleNodeABI } from "./utils/saleNodeABI";

export const OnchainHelper = {
  ABIs: {
    ERC20: ERC20_ABI,
    SaleNodeABI: SaleNodeABI,
    INGLockABI: ING_LOCK_ABI,
  },
  parseEthereumError
};
