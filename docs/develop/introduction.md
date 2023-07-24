---
sidebar_position: 1
---

import Container from '../../src/components/Container';

# Introduction of Plug & Play SDK

The Plug & Play SDK is a with-UI SDK based on the UniPass contract, where the with-UI refers to the UniPass Wallet.

UniPass Wallet is a user-friendly, non-custodial smart contract wallet with support for social recovery, built on top of the UniPass contract.

By integrating the Plug & Play SDK, developers can directly access the UniPass Wallet interface, guiding users to create and use smart contract wallets through email or Google third-party login (at this point, you can consider UniPass Wallet as a web-based smart contract wallet).

The Plug & Play SDK can provide the following features:

* **Creating and Using Smart Wallets**:
    - Low barrier for users. Users can directly invoke the UniPass Wallet interface and create smart contract wallets through email or Google, Apple ID login.
    - Non-custodial smart wallets. Utilize MPC as the smart wallet management key and support social recovery through OpenID and DKIM emails.
    - Built-in Wallet UI. Provide Wallet asset display and transfer UI, with secure signing and transaction interfaces.
    - Special features based on smart wallets. Provide batch transactions, Gasless services, social recovery, and more.

* **Multi-Platform Integration**:
    - Support for multiple platforms, including Web, Android, iOS, and React Native, suitable for different application environments.
    - Compatible with popular Wallet Connectors like Rainbow Kit, Web3 Onboard, Web3 React, and Web3 Modal, enabling rapid integration.

## Pulg & Play SDKs
**Web SDKs**
<Container
items={[
    {
    name: "Popup SDK",
    url: `./popup-sdk/quick-start`
    },
    ]}
/>

**Mobile SDKs**
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

**Wallet Connectors**
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
    name: "Web3 Modal V1",
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
