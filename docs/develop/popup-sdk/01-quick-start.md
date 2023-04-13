---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

Popup-SDK is a javascript SDK for web-based applications. The basic UX will be just like MetaMask as there will be a popup window for users to inspect transactions and take actions.

<Tabs>
<TabItem value="npm">

```bash
npm install --save @unipasswallet/popup-sdk
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @unipasswallet/popup-sdk
```

</TabItem>
</Tabs>

## Source Code

- [Popup SDK GitHub](https://github.com/UniPassID/unipass-popup-sdk)
- [Online Demo](https://popup-demo.wallet.unipass.id/)
- [Demo code](https://github.com/UniPassID/unipass-popup-sdk/tree/main/examples/demo)

:::tip
UniPass Wallet entry URL used by current demo: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## History version

| Version | Breaking change     | Last updated | Upgrade Instructions                                                                                           |
| ------- | ------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| v1.1.8 |                      | 2023.04.13    | login func add forceLogin param |
| v1.1.7 |                      | 2023.04.04    | Ethereum Provider added support for kcc and avax |
| v1.1.6 |                      | 2023.03.30    | Add support for kcc and avax |
| v1.1.5 |                      | 2023.03.28    | Clear useless console log |
| v1.1.4 |                      | 2023.03.03    | New feature：Added tips float window when popover is blocked, which can be used to open popover by clicking |
| v1.1.3 |                      | 2023.03.01    | Remove dependency of buffer^6.0.3 |
| v1.1.2 |                      | 2023.02.24    | logout func add deep param, if deep is true, UniPass Wallet will logout too |
| v1.1.1 |                      | 2023.02.14    | support arbitrum network |
| v1.1.0 |                      | 2023.02.13    | add rpcUrls config for ethereum-provider |
| v1.0.2 |                      | 2023.02.06    | login func add authorize param, for sign with ethereum |
| v1.0.1 |                      | 2023.02.01    | support standard SDKs |
| v0.0.11 |                     | 2022.12.16   | add storageType in initial config |
| v0.0.10 |                     | 2022.12.14   | add signTypedData(EIP712) and isValidTypedSignature |
| v0.0.9  |                     | 2022.11.25   | Optimize parameters for SDK initialization, remove unnecessary parameters |
| v0.0.8  |                     | 2022.11.18   | Fixed the issue where transactions could not be sent after logging in (error: can not authorize without login) |
| v0.0.7  | **Breaking change** | 2022.11.15   | Support Google login. Add the optional function of connect to return email. Add a prefix in signMessage        |
| v0.0.1  |                     | 2022.10.09   | Connect / Transfer / Sign Message & Verify                                                                     |
| v0.0.4  |                     | 2022.10.14   | optional param ‘account’ for method ‘isValidSignature’                                                         |