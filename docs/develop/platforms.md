---
sidebar_position: 1
---

import Container from '../../src/components/Container';

# UniPass Wallet SDKs

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
    name: "Flutter SDK",
    url: `./flutter-sdk/quick-start`
    },
    {
    name: "React Native SDK",
    url: `./rn-sdk/quick-start`
    },
    ]}
/>

### Game SDKs
<Container
items={[
    {
    name: "Unity SDK",
    url: `./unity-sdk/quick-start`
    },
    {
    name: "Unreal SDK",
    url: `./unreal-sdk/quick-start`
    },
    ]}
/>

### Wallet Connectors
<Container
items={[
    {
    name: "Wagmi",
    url: `./wallet-connector/Wagmi-Usage`
    },
    {
    name: "RainbowKit",
    url: `./wallet-connector/RainbowKit-Usage`
    },
    {
    name: "Web3 Onboard",
    url: `./wallet-connector/Web3-Onboard`
    },
    {
    name: "Web3 React V8",
    url: `./wallet-connector/Web3-React-V8`
    },
    {
    name: "Web3 React V6",
    url: `./wallet-connector/Web3-React-V6`
    },
    {
    name: "Web3 Modal",
    url: `./wallet-connector/Web3-Modal-V1`
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
