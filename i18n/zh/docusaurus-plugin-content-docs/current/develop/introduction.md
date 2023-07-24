---
sidebar_position: 1
---

import Container from '../../../../../src/components/Container';

# Plug & Play SDK 介绍

Plug & Play SDK 是一套基于 UniPass 合约的 with-UI SDK, 这里的 with-UI 指的是 UniPass Wallet.

UniPass Wallet 是我们基于 UniPass 合约实现的一个低门槛的，支持邮件社交恢复的，非托管的智能合约钱包。

通过接入 Plug & Play SDK，开发者可以直接调用 UniPass Wallet 的界面，引导用户通过邮箱或者 Google 第三方登录来创建和使用智能合约钱包（此时你可以将 UniPass Wallet 视为一个网页版的智能合约钱包）。

Plug & Play SDK 可以提供以下功能：

* **创建和使用智能钱包**：
    - 低门槛的用户流程。直接唤起 UniPass Wallet 界面，用户可以通过邮箱或者 Google、Apple ID 创建智能钱包；
    - 非托管的智能钱包。使用 MPC 作为智能钱包管理密钥，并支持通过 OpenID 和 DKIM 邮件进行社交恢复；
    - 内含钱包 UI。提供 Wallet 资产展示和转账 UI，提供安全的签名和发交易界面；
    - 基于智能钱包的特殊功能。提供批量交易，Gasless 服务，社交恢复等等。

* **多平台接入**：
    - 支持多平台，包括 Web、Android、iOS 和 React Native，适用于不同的应用环境；
    - 适配 Rainbow Kit、Web3 Onboard、Web3 React、Web3 Modal 等主流 Wallet Connectors，可快速集成。

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