---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 Wagmi

## Demo

A live demo for Wagmi with UniPass is available [here](https://up-wagmi-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/wagmi-connector-demo).

## 安装

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

## 参数

* `chains` -- Chains supported by app. This is the same parameter as would be passed to other RainbowKit wallets..

* `options.connect` -- Connection options for the default networkId, name of the app.

* `options.connect.chainId` -- Default chainId.

* `options.connect.returnEmail` -- If true, email will return when connect function been called.

* `options.connect.appSettings` -- Config appName, appIcon and theme.

* `options.connect.rpcUrls` -- Config mainnet and testnet rpc URLs. In the local development environment, you don't need to fill in, this will use our default test URLs, but in the production environment, you need to fill in with your own rpc node url.

## 用例

```ts
  import { UniPassConnector } from "@unipasswallet/wagmi-connector'

  const unipass = new UniPassConnector({
    options: {
      connect: {
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
    },
  });

  const connectors = [
    unipass,
    new MetaMaskConnector({
      chains,
    }),
  ];
  
  const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
  });
```

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)。
