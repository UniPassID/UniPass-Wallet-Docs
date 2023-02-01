---
sidebar_position: 1
---

# Quick Start

| Version | Breaking change     | Last updated | Upgrade Instructions                                                                                           |
| ------- | ------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| v1.0.0 |                     | 2023.02.01    | support standard SDKs |
| v0.0.11 |                     | 2022.12.16   | add storageType in initial config |
| v0.0.10 |                     | 2022.12.14   | add signTypedData(EIP712) and isValidTypedSignature |
| v0.0.9  |                     | 2022.11.25   | Optimize parameters for SDK initialization, remove unnecessary parameters |
| v0.0.8  |                     | 2022.11.18   | Fixed the issue where transactions could not be sent after logging in (error: can not authorize without login) |
| v0.0.7  | **Breaking change** | 2022.11.15   | Support Google login. Add the optional function of connect to return email. Add a prefix in signMessage        |
| v0.0.1  |                     | 2022.10.09   | Connect / Transfer / Sign Message & Verify                                                                     |
| v0.0.4  |                     | 2022.10.14   | optional param ‘account’ for method ‘isValidSignature’                                                         |

Popup-SDK is a javascript SDK for web-based applications. The basic UX will be just like MetaMask as there will be a popup window for users to inspect transactions and take actions.

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


## Reference

- [Popup SDK GitHub](https://github.com/UniPassID/unipass-popup-sdk)
- [Online Demo](https://popup-demo.wallet.unipass.id/)
- [Demo code](https://github.com/UniPassID/unipass-popup-sdk/tree/main/examples/demo)

:::tip
UniPass Wallet entry URL used by current demo: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::
```
