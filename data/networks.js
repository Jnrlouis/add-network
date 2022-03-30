const networks = [
  {
    chainId: "80001",
    chainName: "Polygon Testnet Mumbai",
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    nativeCurrency: {
      symbol: "MATIC",
    },
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    faucetUrls:["https://faucet.polygon.technology/"]
  },
  {
    chainId: "137",
    chainName: "Polygon Mainnet",
    rpcUrls: ["https://polygon-rpc.com/"],
    nativeCurrency: {
      symbol: "MATIC",
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  {
    chainId: "1666600000",
    chainName: "Harmony Mainnet Shard 0",
    rpcUrls: ["https://api.harmony.one"],
    nativeCurrency: {
      symbol: "ONE",
    },
    blockExplorerUrls: ["https://explorer.harmony.one/"],
  },
  {
    chainId: "1666700000",
    chainName: "Harmony Testnet Shard 0",
    rpcUrls: ["https://api.s0.b.hmny.io"],
    nativeCurrency: {
      symbol: "ONE",
    },
    blockExplorerUrls: ["https://explorer.pops.one/"],
    faucetUrls:["https://faucet.pops.one/"]
  },
];

export default networks;
