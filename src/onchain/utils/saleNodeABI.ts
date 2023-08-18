export const SaleNodeABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "qty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
    ],
    name: "NodePurchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "CS_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_BASE_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_TOKEN_DECIMALS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FOUNDATION_ADDRESS",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NATIVE_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_PERCENTAGE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPaymentToken",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "usdRate",
            type: "uint256",
          },
        ],
        internalType: "struct IA_NODE_PURCHASE.PaymentRate[]",
        name: "rsArrPaymentRate",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListRound",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_roundId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_numb",
        type: "uint256",
      },
    ],
    name: "getNodePriceByNumb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
    ],
    name: "getPaymentRate",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "usdRate",
            type: "uint256",
          },
        ],
        internalType: "struct IA_NODE_PURCHASE.PaymentRate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_roundId",
        type: "address",
      },
    ],
    name: "getRoundInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "roundId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isPause",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "priceUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPerUser",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startIncreaseNumb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "linearIncreaseNumb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "linearIncreaseAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IA_NODE_PURCHASE.Round",
        name: "rsRound",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "usdRate",
            type: "uint256",
          },
        ],
        internalType: "struct IA_NODE_PURCHASE.PaymentRate[]",
        name: "rsArrSupportedToken",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_roundId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_qty",
        type: "uint256",
      },
    ],
    name: "getTotalAmountByQty",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_roundId",
        type: "address",
      },
    ],
    name: "getUserPortfolio",
    outputs: [
      {
        internalType: "uint256",
        name: "purchasedQty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_foundationAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "mapArrSupportedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mapPaymentTokenRate",
    outputs: [
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "usdRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mapRealTokenAndLockToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mapRound",
    outputs: [
      {
        internalType: "address",
        name: "roundId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPause",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "priceUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPerUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "basePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startIncreaseNumb",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "linearIncreaseNumb",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "linearIncreaseAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "mapSchdulePricing",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "roundId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isPause",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "priceUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPerUser",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startIncreaseNumb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "linearIncreaseNumb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "linearIncreaseAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IA_NODE_PURCHASE.Round",
        name: "_round",
        type: "tuple",
      },
    ],
    name: "modifyRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_roundId",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_arrPaymentToken",
        type: "address[]",
      },
    ],
    name: "modifyRoundPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "roundId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isPause",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "priceUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPerUser",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startIncreaseNumb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "linearIncreaseNumb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "linearIncreaseAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IA_NODE_PURCHASE.Round",
        name: "_round",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_arrPaymentToken",
        type: "address[]",
      },
    ],
    name: "openRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_roundId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_qty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
    ],
    name: "purchaseNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_foundationAddress",
        type: "address",
      },
    ],
    name: "setFoundationAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_paymentToken_usd",
        type: "uint256",
      },
    ],
    name: "setPaymentRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentTokenReal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_paymentTokenLock",
        type: "address",
      },
    ],
    name: "setRealTokenAndLockToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
