---
sidebar_position: 1
---

import Container from '../../../../../src/components/Container';

# UniPass Wallet SDKs

UniPass Wallet 将提供多平台的 SDK，方便应用方在各种平台上都可以便捷地接入 UniPass Wallet。

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

## RPC 配置

### 测试网

| 链标识                        | nodeRPC URL                                   |
| ----------------------------- | --------------------------------------------- |
| **Goerli** (Ethereum testnet) | https://node.wallet.unipass.id/eth-goerli     |
| **BSC testnet**               | https://node.wallet.unipass.id/bsc-testnet    |
| **Mumbai** (Polygon testnet)  | https://node.wallet.unipass.id/polygon-mumbai |
| **Robin** (Rangers testnet)   | https://node.wallet.unipass.id/rangers-robin  |

:::warning 注意
当前 UniPass Wallet 仍处于测试网阶段，**请勿往测试网地址内转入真实的主网资产**，因为同一个邮箱或谷歌账户注册的 UniPass Wallet 的主网地址与测试网地址不一致。
:::