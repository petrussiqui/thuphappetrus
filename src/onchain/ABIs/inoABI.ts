export const INO_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "roundId",
        type: "address",
      },
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
        indexed: false,
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "BoxPurchase",
    type: "event",
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
        internalType: "struct KTBoxPurchase.PaymentRate[]",
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
        internalType: "struct KTBoxPurchase.PaymentRate",
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
            internalType: "address[]",
            name: "arrOldNftContract",
            type: "address[]",
          },
        ],
        internalType: "struct KTBoxPurchase.Round",
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
        internalType: "struct KTBoxPurchase.PaymentRate[]",
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
      {
        components: [
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isHolder",
            type: "bool",
          },
        ],
        internalType: "struct KTBoxPurchase.HoldDetail[]",
        name: "tempHoldDetail",
        type: "tuple[]",
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
    name: "mapOldNftWithPayment",
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
            internalType: "address[]",
            name: "arrOldNftContract",
            type: "address[]",
          },
        ],
        internalType: "struct KTBoxPurchase.Round",
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
            internalType: "address[]",
            name: "arrOldNftContract",
            type: "address[]",
          },
        ],
        internalType: "struct KTBoxPurchase.Round",
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
      {
        internalType: "uint256",
        name: "_ref",
        type: "uint256",
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
        internalType: "address",
        name: "_oldNftContract",
        type: "address",
      },
    ],
    name: "setOldNftContractWithPayment",
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
];
