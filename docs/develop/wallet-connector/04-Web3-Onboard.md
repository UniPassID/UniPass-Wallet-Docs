---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Web3-Onboard

## Demo

A demo app for web3-onboard is available [here](https://up-web3-onboard-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/web3-onboard-demo).

## Installation

<Tabs>
<TabItem value="npm">

```shell
npm install @web3-onboard/core @unipasswallet/web3-onboard
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add @web3-onboard/core @unipasswallet/web3-onboard
```

</TabItem>
</Tabs>

## Parameters

- `options.chainId` -- Default chainId.

- `options.returnEmail` -- If true, email will return when connect function been called.

- `options.appSettings` -- Config appName, appIcon and theme.

* `options.connect.rpcUrls` -- Config mainnet and testnet rpc URLs. In the local development environment, you don't need to fill in, this will use our default test URLs, but in the production environment, you need to fill in with your own rpc node url.

## Usage

```typescript
import Onboard from '@web3-onboard/core'
import unipassModule from '@unipasswallet/web3-onboard'

// initialize the module with options
const unipass = unipassModule({
  chainId: 80001,
  returnEmail: true,
  appSettings: {
    appName: 'web3-onboard test for unipass',
    appIcon: 'your icon url',
    theme: UniPassTheme.DARK
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
})

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    unipass
    //... other wallets
  ]
})
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).