---
sidebar_position: 1
---

import Container from '../../src/components/Container';

# Introduction of Plug & Play SDK

UniPass Wallet provides a variety of platform SDKs to make it simple for applications to access it across many platforms.

### Web SDKs
<Container
items={[
    {
    name: "Popup SDK",
    url: `./popup-sdk/quick-start`
    },
    ]}
/>

### Mobile SDKs
<Container
items={[
    {
    name: "Android SDK",
    url: `./android-sdk/quick-start`
    },
    {
    name: "iOS SDK",
    url: `./ios-sdk/quick-start`
    },
    {
    name: "React Native SDK",
    url: `./rn-sdk/quick-start`
    },
    ]}
/>

### Wallet Connectors
<Container
items={[
    {
    name: "Wagmi",
    url: `./wallet-connector/wagmi`
    },
    {
    name: "RainbowKit",
    url: `./wallet-connector/rainbowkit`
    },
    {
    name: "Web3 Onboard",
    url: `./wallet-connector/web3-onboard`
    },
    {
    name: "Web3 React V8",
    url: `./wallet-connector/web3-react-v8`
    },
    {
    name: "Web3 React V6",
    url: `./wallet-connector/web3-react-v6`
    },
    {
    name: "Web3 Modal",
    url: `./wallet-connector/web3-modal-v1`
    },
    ]}
/>

## RPC URL

### Testnet

| Chain Handle                  | nodeRPC URL                                   |
| ----------------------------- | --------------------------------------------- |
| **Goerli** (Ethereum testnet) | https://node.wallet.unipass.id/eth-goerli     |
| **BSC testnet**               | https://node.wallet.unipass.id/bsc-testnet    |
| **Mumbai** (Polygon testnet)  | https://node.wallet.unipass.id/polygon-mumbai |
| **Robin** (Rangers testnet)   | https://node.wallet.unipass.id/rangers-robin  |

:::warning Notice
**Kindly avoid sending real crypto assets to the testnet address**, because the testnet address of UniPass Wallet does not match the mainnet address registered to the same email or Google account.
:::
