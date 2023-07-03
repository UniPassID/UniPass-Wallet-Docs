---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Wagmi

## Demo

A live demo for Wagmi with UniPass is available [here](https://up-wagmi-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/wagmi-connector-demo).

## Installation

<Tabs>
<TabItem value="npm">

```shell
npm install @unipasswallet/wagmi-connector wagmi
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add @unipasswallet/wagmi-connector wagmi
```

</TabItem>
</Tabs>

## Parameters

* `chains` -- Chains supported by app. This is the same parameter as would be passed to other RainbowKit wallets..

* `options.connect` -- Connection options for the default networkId, name of the app.

* `options.connect.chainId` -- Default chainId.

* `options.connect.returnEmail` -- If true, email will return when connect function been called.

* `options.connect.appSettings` -- Config appName, appIcon and theme.

* `options.connect.rpcUrls` -- Config mainnet and testnet rpc URLs. In the local development environment, you don't need to fill in, this will use our default test URLs, but in the production environment, you need to fill in with your own rpc node url.

## Usage

```ts
  import { UniPassConnector } from "@unipasswallet/wagmi-connector'

  const { chains, publicClient } = configureChains(
    [goerli, polygonMumbai],
    [publicProvider()]
  );

  const unipass = new UniPassConnector({
    options: {
      chainId: 80001,
      returnEmail: false,
      appSettings: {
        appName: "wagmi demo",
        appIcon: "your icon url",
        theme: UniPassTheme.dark,
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
  });

  // Set up wagmi config
  const config = createConfig({
    autoConnect: true,
    connectors: [
      unipass,
      new MetaMaskConnector({
        chains,
      }),
    ],
    publicClient,
  });
  
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).
