# Using ethers.js

```ts
import { UniPassProvider } from "@unipasswallet/ethereum-provider";
import { providers, utils } from "ethers";

async function runTest() {
  // init UniPass Provider
  const upProvider = new UniPassProvider({
    chainId: 137,
    returnEmail: false,
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

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).