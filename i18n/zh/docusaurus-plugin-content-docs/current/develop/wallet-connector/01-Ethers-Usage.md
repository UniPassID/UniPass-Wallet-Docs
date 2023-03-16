---
sidebar_position: 1
---

# 使用 ethers.js

```ts
import { UniPassProvider } from "@unipasswallet/ethereum-provider";
import { providers, utils } from "ethers";

async function runTest() {
  // init UniPass Provider
  const upProvider = new UniPassProvider({
    chainId: 137,
    returnEmail: false,
    appSetting: {
      appName: 'test dapp',
      appIcon: 'your icon url',
    },
    rpcUrls: {
      mainnet: "your eth mainnet rpc url",
      polygon: "your polygon mainnet rpc url",
      bscMainnet: "your bsc mainnet rpc url",
      rangersMainnet: "your rangers mainnet rpc url",
      arbitrumMainnet: "your arbitrum mainnet rpc url",

      polygonMumbai: "your polygon testnet rpc url",
      goerli: "your goerli testnet rpc url",
      bscTestnet: "your bsc testnet rpc url",
      rangersRobin: "your rangers testnet rpc url",
      arbitrumTestnet: "your arbitrum testnet rpc url",
    },
  });
  await upProvider.connect();

  // init ethers Web3Provider
  const provider = new providers.Web3Provider(upProvider, "any");
  const signer = provider.getSigner();

  // get address
  const address = await signer.getAddress();
  console.log("provider address", address);

  // get balance
  const balance = await signer.getBalance();
  console.log("balance", utils.formatEther(balance));

  // switch chain
  await provider.send("wallet_switchEthereumChain", [{ chainId: 1 }]);
  const chainId = await signer.getChainId();
  console.log("chainId", chainId);
}
```

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)。