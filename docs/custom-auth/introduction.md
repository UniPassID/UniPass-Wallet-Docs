---
sidebar_position: 1
---

# Introduction of Custom Auth SDK

The Custom Auth SDK is a non-UI SDK based on the UniPass contract. By integrating the Custom Auth SDK, developers can easily assist users in creating and using smart contract wallet (which we prefer to call **Smart Wallet** or **Smart Account**). Additionally, developers have the flexibility to choose different key management solutions and customize registration/login and signature/send transaction pages based on their application's requirements.

Custom Auth SDK can provide the following features:

* **Create and Manage Smart Wallets**:
    - Easily create and manage smart wallets with support for various key management schemes.
    - Integrate with EOA wallets or popular identity authentication solutions to support Web3 users.
    - Support social logins through integration with wallet services like Web3Auth and Magic Link.
    - Provide a customized integration solution based on JWT Token, making interactions with wallet services like Web3Auth more straightforward.

* **Using Smart Wallets**:
    - Provide basic signing and transaction verification functionality.
    - Offer special features based on smart wallets, such as batch transactions, Gasless services, wallet ownership transfer, and social recovery.

* **Customizable UI**:
    - Customize user registration/login flows:
        - Customize user registration/login methods.
        - Integrate with the existing user flow for Web2 users to generate smart wallets.
    - Customize signature/transaction pages, support silent signing.

* **Multi-Platform Integration**:
    - SDKs will be available for Web, Android, and iOS platforms, ensuring seamless integration into various applications.

## How to integrate the Custom Auth SDK

### 1. Determine the Master Key Solution

Smart wallet can be managed using multiple keys. To simplify key management complexity, in the Custom Auth SDK, we need to determine a master key that will be used for the daily operations of the account. In most cases, whoever has the master key will have control over the smart wallet.

Therefore, before integrating the Custom Auth SDK and initializing the smart wallet, the first step is to select the master key solution for the smart wallet.

You have the freedom to choose the master key solution based on your application's specific requirements:

* **EOA Wallet**

    If your application supports EOA wallet logins, you can directly use the user's existing EOA address as the master key for the smart wallet when integrating the Custom Auth SDK.

    You can obtain the user's EOA address by connecting MetaMask or WalletConnect, and then use the Custom Auth SDK to create a smart wallet.

    |**EOA Wallet**|**Platforms**|
    |--|--|
    |**MetaMask**|[**Web**](./web-sdk/init-master-key/01-eoa.md/#init-master-key-from-metamask)|
    |**Private Key**|[**Android**](./android-sdk/init-master-key/01-eoa.md/#init-master-key-from-private-key)|
    |**WalletConnect** (coming soon)||

* **Wallet Services**

    If your application supports social logins, you can first integrate popular wallet services that provide social login functionality, such as Web3Auth or Magic Link.
    
    Then, you can use the EOA address returned by these wallet solutions as the master key for the smart wallet when integrating the Custom Auth SDK.

    By combining these wallet solutions with the Custom Auth SDK, you can achieve a user-friendly onboarding process while enjoying additional features provided by smart wallet, such as gasless services and batch transactions.

    |**Wallet Service**|**Platforms**|
    |--|--|
    |**Web3Auth**|[**Web**](./web-sdk/init-master-key/02-waas.md/#init-master-key-from-web3auth)|
    
:::tip
Although wallet services also provide an EOA address as EOA wallets, they are introduced separately due to their integration approach being slightly different from EOA wallets.
:::

* **JWT Token**

    If you prefer a simpler and more convenient integration with the Custom Auth SDK, and you want UniPass to assist you in integrating wallet services like Web3Auth or provide other key management solutions, we offer a customized integration solution based on [JWT Token](https://jwt.io/) (JSON Web Token).

    For more information, you can contact UniPass representatives.

### 2. Integrating the Custom Auth SDK

Once you have determined and initialized the master key, you can proceed with integrating the Custom Auth SDK. We provide SDKs for the Web, Android, and iOS platforms.

* [**Web**](./web-sdk/01-quick-start.md)
* [**Android**](./android-sdk/01-quick-start.md)
* **iOS** (coming soon)

---

## What is a Smart Wallet?

A smart wallet is different from an EOA (Externally Owned Accounts) wallet as it is a wallet on the blockchain with contract logic. A smart wallet is a wallet solution that uses a contract address as the address for sending and receiving assets.