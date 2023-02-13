# Using Web3-Modal V1

## Example

A demo app for web3-modal-v1 is available [here](https://up-web3-modal-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/web3-modal-v1-demo).

## Installation

```shell
  npm install @unipasswallet/web3Modal @unipasswallet/ethereum-provider
```
or
```shell
  yarn add @unipasswallet/web3Modal @unipasswallet/ethereum-provider
```

## Parameters

* `options.connect.chainId` -- Default chainId.

* `options.connect.returnEmail` -- If true, email will return when connect function been called.

* `options.connect.appSettings` -- Config appName, appIcon and theme.

* `options.connect.rpcUrls` -- Config mainnet and testnet rpc URLs. In the local development environment, you don't need to fill in, this will use our default test URLs, but in the production environment, you need to fill in with your own rpc node url.

## Usage

```ts
import Web3Modal from "@unipasswallet/web3modal";
import { UniPassProvider } from "@unipasswallet/ethereum-provider";

const providerOptions = {
    // add other wallet here
    unipass: {
        package: UniPassProvider,
        options: {
        chainId: 80001,
        returnEmail: false,
        appSettings: {
            appName: "web3 modal demo",
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
    },
},
};

const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true,
});

function App()  {

    useEffect(() => {
        if (web3Modal.cachedProvider) {
            connectWallet();
        }
    }, []);  

    const connectWallet = async () => {
        const wallet = await web3Modal.connect();
        const provider = new providers.Web3Provider(wallet);
    };

    const connectWeb3Modal = async () => {
        if (web3Modal.cachedProvider) {
            web3Modal.clearCachedProvider();
        }
        connectWallet();
  };

    return (
        <button onClick={connectWeb3Modal}>
          connect
        </button>
    );
}
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).