---
sidebar_position: 1
---

# Custom Auth SDK 介绍

Custom Auth SDK 是一套基于 UniPass 合约的 non-UI SDK。通过接入 Custom Auth SDK，开发者可以轻松地帮助用户创建、使用智能合约钱包（我们更愿意称之为：**智能钱包**或**智能账户**），并且完全可以根据应用的需求，选择不同的密钥管理方案，自定义注册/登录和签名/发交易页面。

Custom Auth SDK 可以提供以下功能：

* **创建和管理智能钱包**：
    - 轻松创建和管理智能钱包，并支持多种密钥管理方案；
    - 与 EOA 钱包或流行的身份验证解决方案集成，为 Web3 用户提供支持；
    - 支持社交登录，通过与 Web3Auth 和 Magic Link 等钱包服务方案集成；
    - 提供基于 JWT Token 的定制化接入方案，使与 Web3Auth 等钱包服务的交互更加简化。

* **使用智能钱包**：
    - 提供基础的签名验签，发交易功能；
    - 提供基于智能钱包的特殊功能：如批量交易，Gasless 服务，钱包所有权转移，社交恢复等等。

* **自定义 UI**：
    - 自定义用户注册/登录流程：
        - 自定义用户注册/登录方式；
        - 沿用应用原本的用户流程，为已有 Web2 用户生成智能钱包。
    - 自定义签名/发交易页面，支持静默签名。

* **多平台接入**：
    - 将在 Web、Android 和 iOS 平台上提供 SDK，无缝集成到不同的应用中。

## 如何接入 Custom Auth SDK

### 1. 确定主密钥方案

智能钱包可以通过多个密钥进行管理，为了简化密钥管理复杂度，在 Custom Auth SDK 中我们需要确定一个账户日常使用的主密钥 (master key)。通常情况下，谁掌握主密钥，谁就拥有这个智能钱包。

所以在接入 Custom Auth SDK 初始化智能钱包前，第一步就是需要选择智能钱包的主密钥方案。

你可以根据应用的实际需求，自由选择主密钥方案：

* **EOA 钱包**
    
    如果你的应用支持 EOA 钱包登录。那么对于这些 Web3 用户，你可以直接使用他们现有的 EOA 地址作为智能钱包的主密钥接入 Custom Auth SDK。

    你可以通过连接 MetaMask 或者 WalletConnect 获取到用户的 EOA 地址，然后通过 Custom Auth SDK 为其创建智能钱包。

    |**EOA 钱包**|**平台**|
    |--|--|
    |**MetaMask**|[**Web**](./web-sdk/init-master-key/01-eoa.md/#init-master-key-from-metamask)|
    |**WalletConnect** (即将推出)||

* **钱包服务**

    如果你的应用支持社交登录。那么你可以先接入市面上提供社交登录功能的钱包服务方案，比如 Web3Auth, Magic Link 等。
    
    再将这些钱包解决方案返回的 EOA 地址作为智能钱包的主密钥接入 Custom Auth SDK。

    将这些钱包解决方案与 Custom Auth SDK 结合，既可以实现低门槛的用户流程，又可以享受智能钱包提供的 gasless，批量交易等服务。

    |**钱包服务**|**平台**|
    |--|--|
    |**Web3Auth**|[**Web**](./web-sdk/init-master-key/02-waas.md/#init-master-key-from-web3auth)|

:::tip tip
虽然钱包服务同 EOA 钱包一样，提供的也是一个 EOA 地址，但是因为接入方式略区别于 EOA 钱包，因此分开介绍。
:::

* **JWT Token**

    如果你希望更简单便捷地接入 Custom Auth SDK，希望 UniPass 帮助你接入 Web3Auth 等钱包服务或者提供其他密钥管理方案，我们也提供基于 [JWT Token](https://jwt.io/) (JSON Web Token) 的定制化接入方案。
    
    你可以联系 UniPass 对接人员了解更多。

### 2. 接入 Custom Auth SDK

在确定并初始化 master key 后，就可以接入 Custom Auth SDK 了。我们提供了 Web，Android，iOS 平台的 SDK。

* [**Web**](./web-sdk/01-quick-start.md)
* [**Android**](./android-sdk/01-quick-start.md) 
* **iOS** (即将推出)

---

## 什么是智能钱包？

智能钱包区别于 EOA（Externally Owned Accounts）钱包，是一个在链上具备合约逻辑的钱包。智能钱包是使用合约地址作为资产收发地址的钱包方案。