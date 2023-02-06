---
sidebar_position: 1
---

# 快速开始

| 更新版本 | 重大变更        | 更新日期   | 更新说明                                                                               |
| -------- | --------------- | ---------- | -------------------------------------------------------------------------------------- |
| v1.0.2 |                      | 2023.02.06    | login方法新增authorize参数，用于 sign with ethereum |
| v1.0.1 |                      | 2023.02.01    | 新增对标准SDK支持 |
| v0.0.11 |                     | 2022.12.16   | 新增 storageType 参数 |
| v0.0.10 |                     | 2022.12.14   | 新增 signTypedData(EIP712) 和 isValidTypedSignature 方法|
| v0.0.9   | --              | 2022.11.25 | 优化 SDK 初始化传参数, 减少非必要参数                           |
| v0.0.8   | --              | 2022.11.18 | 修复登录后，无法发送交易 (报错: can not authorize without login) 的问题                |
| v0.0.7   | **Breaking change** | 2022.11.15 | 支持 Google 第三方登录，增加连接钱包返回 Email 的可选功；signMessage 增加 unipass 前缀 |
| v0.0.4   | --              | 2022.10.14 | isValidSignature 增加 account 可选参数                                                 |
| v0.0.1   | --              | 2022.10.09 | 支持连接钱包获取地址，转账原生代币和 ERC20 代币，签名/验签等功能。                     |

Popup SDK 是连接 UniPass Wallet 页面的 javascript SDK 工具包，提供了一系列的方法供第三方应用与 UniPass Wallet 进行交互。

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

```mdx-code-block
<Tabs>
<TabItem value="npm">
```

```bash
npm install --save @unipasswallet/popup-sdk
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn add @unipasswallet/popup-sdk
```

```mdx-code-block
</TabItem>
</Tabs>


## 相关资料

- [Popup SDK GitHub](https://github.com/UniPassID/unipass-popup-sdk)
- [Online Demo](https://popup-demo.wallet.unipass.id/)
- [Demo 源码](https://github.com/UniPassID/unipass-popup-sdk/tree/main/examples/demo)

:::tip
当前 Demo 调用的 UniPass Wallet 网址：[https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::
```
