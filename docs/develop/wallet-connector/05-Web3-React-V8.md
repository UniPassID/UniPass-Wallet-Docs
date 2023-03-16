---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Web3-React V8

## Demo

A demo app for web3-react V8 is available [here](https://up-web3-react-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/web3-react-demo).

## Installation

<Tabs>
<TabItem value="npm">

```shell
npm install @unipasswallet/web3-react
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add @unipasswallet/web3-react
```

</TabItem>
</Tabs>

## Parameters

* `options.connect.chainId` -- Default chainId.

* `options.connect.returnEmail` -- If true, email will return when connect function been called.

* `options.connect.appSettings` -- Config appName, appIcon and theme.

* `options.connect.rpcUrls` -- Config mainnet and testnet rpc URLs. In the local development environment, you don't need to fill in, this will use our default test URLs, but in the production environment, you need to fill in with your own rpc node url.

## Usage

```js
import { UniPassTheme } from "@unipasswallet/popup-types";
import { initializeConnector } from "@web3-react/core";
import { UniPass } from "@unipasswallet/web3-react";

export const [uniPassWallet, hooks] = initializeConnector<UniPass>(
  (actions) =>
    new UniPass({
      actions,
      options: {
        chainId: 5,
        returnEmail: true,
        appSettings: {
          appName: "web3-react test for unipass",
          appIcon: "your icon url",
          theme: UniPassTheme.DARK,
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
    })
);
```
```js
import { hooks, uniPassWallet } from "./connector";

const { useProvider, useAccount } = hooks;

const provider = useProvider();
const account = useAccount();

const connect = () => {
    return uniPassWallet.activate().catch((e) => {
        console.error(e);
    });
};

const disconnect = () => {
    return uniPassWallet.deactivate()
};
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).