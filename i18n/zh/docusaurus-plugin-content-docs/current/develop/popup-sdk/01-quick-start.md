---
sidebar_position: 1
---

# 快速开始

| 更新版本 | 更新日期 | 调用的 UniPass Wallet 网址 | 更新说明 |
| --- | --- | --- | --- |
| v0.0.1 | 2022.10.09 | https://testnet.wallet.unipass.id/ | 支持连接钱包获取地址，转账原生代币和ERC20代币，签名/验签等功能。 |
| v0.0.4 | 2022.10.14 | https://testnet.wallet.unipass.id/ | isValidSignature 增加 account 可选参数 |

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
- [Demo code](https://github.com/UniPassID/unipass-popup-sdk/tree/main/examples/demo)

:::tip
当前 Demo 调用的 UniPass Wallet 网址：[https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::
