---
sidebar_position: 1
---

# UniPass Wallet SDKs

UniPass Wallet 将提供多平台的 SDK，方便应用方在各种平台上都可以便捷地接入 UniPass Wallet。

基于 Html5 的网页版应用，可以通过对接 Popup SDK，在网页中打开一个 popup 弹窗连接至 UniPass Wallet。

基于 Flutter, Unity 的应用，可以通过对接相关的 SDK，在 APP 中打开一个 UniPass Wallet WebView 页面进行连接。


| SDK | 当前状态 | 开发文档 |
| --- | --- | --- | 
| Popup SDK | 已完成 | [**开发文档**](./popup-sdk/01-quick-start.md) |
| Flutter SDK | 已完成 | [**开发文档**](./flutter-sdk/01-quick-start.md) |
| Unity SDK | 已完成 | [**开发文档**](./unity-sdk/01-quick-start.md) |
| Unreal SDK| 计划中 | |


:::info 接入须知
当前 UniPass Wallet 仍处于测试网阶段：
1. 请勿往地址内转入真实的主网资产
2. 合约升级可能会导致已注册账户不可用 (后续支持 OAuth 和 zkp 将需要升级合约)
:::

## RPC 配置

### 测试网

| 链标识  | nodeRPC URL  |
|---|---|
| **Goerli** (Ethereum testnet)| https://node.wallet.unipass.id/eth-goerli |
| **BSC testnet** | https://node.wallet.unipass.id/bsc-testnet |
| **Mumbai** (Polygon testnet)| https://node.wallet.unipass.id/polygon-mumbai |
| **Robin** (Rangers testnet)| https://node.wallet.unipass.id/rangers-robin |


## 给我们一些反馈

如果您在测试或者开发过程中，遇到任何问题或者有任何意见，请在[**这里**](https://unipass.canny.io/feedback)给我们一些反馈。

我们将时刻关注大家的反馈，并不断完善我们的产品。