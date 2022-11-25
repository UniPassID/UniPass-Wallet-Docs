---
sidebar_position: 1
---

# UniPass Wallet SDKs

UniPass Wallet 将提供多平台的 SDK，方便应用方在各种平台上都可以便捷地接入 UniPass Wallet。

基于 Html5 的网页版应用，可以通过对接 Popup SDK，在网页中打开一个 popup 弹窗连接至 UniPass Wallet。

基于 Flutter, Unity 的应用，可以通过对接相关的 SDK，在 APP 中打开一个 UniPass Wallet WebView 页面进行连接。

| SDK         | 当前状态 | 开发文档                                        |
| ----------- | -------- | ----------------------------------------------- |
| Popup SDK   | 已完成   | [**开发文档**](./popup-sdk/01-quick-start.md)   |
| Flutter SDK | 已完成   | [**开发文档**](./flutter-sdk/01-quick-start.md) |
| Unity SDK   | 已完成   | [**开发文档**](./unity-sdk/01-quick-start.md)   |
| Unreal SDK  | 计划中   |                                                 |

:::warning 注意
当前 UniPass Wallet 仍处于测试网阶段，**请勿往测试网地址内转入真实的主网资产**，因为同一个邮箱或谷歌账户注册的 UniPass Wallet 的主网地址与测试网地址不一致。
:::

## RPC 配置

### 主网

| 链标识       | nodeRPC URL                                    |
| ------------ | ---------------------------------------------- |
| **Ethereum** | https://node.wallet.unipass.id/eth-mainnet     |
| **BSC**      | https://node.wallet.unipass.id/bsc-mainnet     |
| **Polygon**  | https://node.wallet.unipass.id/polygon-mainnet |
| **Rangers**  | https://node.wallet.unipass.id/rangers-mainnet |

### 测试网

| 链标识                        | nodeRPC URL                                   |
| ----------------------------- | --------------------------------------------- |
| **Goerli** (Ethereum testnet) | https://node.wallet.unipass.id/eth-goerli     |
| **BSC testnet**               | https://node.wallet.unipass.id/bsc-testnet    |
| **Mumbai** (Polygon testnet)  | https://node.wallet.unipass.id/polygon-mumbai |
| **Robin** (Rangers testnet)   | https://node.wallet.unipass.id/rangers-robin  |

## 给我们一些反馈

如果您在测试或者开发过程中，遇到任何问题或者有任何意见，请在[**这里**](https://unipass.canny.io/feedback)给我们一些反馈。

我们将时刻关注大家的反馈，并不断完善我们的产品。
