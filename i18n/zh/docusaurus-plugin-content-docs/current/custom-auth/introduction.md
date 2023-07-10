---
sidebar_position: 1
---

import Container from '../../../../../src/components/Container';

# Custom Auth SDK 介绍

Custom Auth SDK 是一套基于 UniPass 合约的 non-UI SDK。通过接入 Custom Auth SDK，开发者可以轻松地帮助用户创建、使用智能合约钱包（我们更愿意称之为：**智能钱包**），并且完全可以根据应用的业务需求，选择不同的密钥管理方案，自定义注册/登录和签名/发交易界面。

* **创建智能钱包**：Custom Auth SDK 可以与市面上流行的身份验证解决方案以及 EOA 钱包集成，不管是 Web2 用户还是 Web3 用户，您都可以轻松地为其创建智能钱包。

* **使用智能钱包**：Custom Auth SDK 除了提供基础的签名，发交易功能外，还提供基于智能钱包的特殊功能：如批量交易，Gasless 服务，钱包所有权转移，社交恢复等等。

* **自定义 UI**
    * 自定义用户注册/登录流程
        * 自定义用户注册/登录方式
        * 沿用应用原本的用户流程，为已有 Web2 用户生成智能钱包
    * 自定义签名、发交易页面
        * 支持静默签名

## 接入 Custom Auth SDK 的步骤？

### 1. 确定主密钥管理方案

智能钱包需要通过密钥进行管理。所以在接入 Custom Auth SDK 初始化智能钱包前，需要确认智能钱包的主密钥（master key）的方案。通常情况下，谁掌握主密钥，谁就拥有这个智能钱包。

您可以根据应用需求，自由选择主密钥方案：

* **EOA 钱包**
    
    对于 Web3 用户，您可以直接使用他们现有的 EOA 地址作为智能钱包的主密钥。

    您可以通过连接 MetaMask 或者 WalletConnect 获取到用户的 EOA 地址，然后通过 Custom Auth SDK 为其创建智能钱包。

    * [**MetaMask**](https://web3auth.io/)
    * **WalletConnect** (即将推出)

* **钱包服务**

    当前市面上有很多基于 TSS，MPC 等方案的“钱包即服务”解决方案，而将这些 EOA 钱包解决方案与 Custom Auth SDK 这样的智能钱包结合，既可以实现低门槛的用户流程，又可以享受智能钱包提供的 gasless，批量交易等服务。
    
    * [**Web3Auth**](https://web3auth.io/)

:::tip tip
虽然钱包服务提供的也是一个 EOA 地址，但是因为接入方式略区别于 EOA 钱包，因此分开介绍。
:::

* **JWT Token**

    为了方便开发者接入，UniPass 也提供基于 [JWT Token](https://jwt.io/) (JSON Web Token) 的方案。可以联系 UniPass 官方了解更多。

### 2. 接入 Custom Auth SDK

在确定并初始化智能钱包的 master key 后，就可以接入 Custom Auth SDK 了。我们提供了 Web，Android，iOS 的 SDK。

* [**Web**](./web-sdk/01-quick-start.md)
* **Android** (即将推出) 
* **iOS** (即将推出)

---

## 什么是智能钱包？

智能钱包区别于 EOA（Externally Owned Accounts）钱包，是一个在链上具备合约逻辑的钱包。智能钱包是使用合约地址作为资产收发地址的钱包方案。

智能钱包依然需要密钥进行管理，但是密钥种类和密钥逻辑是