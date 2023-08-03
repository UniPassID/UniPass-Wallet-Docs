---
sidebar_position: 2
---

import Image from '@theme/IdealImage';
import thumbnail_1 from './img/keyset-structure.png';
import thumbnail_2 from './img/keys-type.png';
import thumbnail_3 from './img/roles-type.png';

# 密钥管理

## 账户结构

智能合约钱包并不是没有密钥，而是可以通过智能合约灵活地设置和管理钱包的密钥，甚至在密钥丢失时，能够通过备用密钥的社交恢复方式重新找回账户。

UniPass Contract 是一个通用的可以生成智能钱包的合约，主要管理支持的密钥类型以及密钥和账户权限之间的逻辑。

为用户创建一个基于 UniPass Contract 的智能钱包，可以视为是创建了一个基于 UniPass Contract 的实例合约，这个实例合约的地址就是用户的智能钱包地址，并且这个实例合约中会存储着管理这个账户的密钥数据。

在 UniPass Contract 中，用户可以通过一系列具有角色权重的密钥来管理账户，每一个密钥都有一个对应的角色及权重。用户只要集齐了超过某角色要求权重的密钥的签名后，就可以通过 UniPass Contract 执行这个角色相关的权限。

<p align="center">
    <Image img={thumbnail_1} width="80%"/>
</p>

## 密钥类型

<p align="center">
    <Image img={thumbnail_2} width="80%"/>
</p>

UniPass Contract 支持设置多种类型的密钥。已经支持的密钥类型包括我们经常使用的 EOA 地址，支持 EIP-1271 协议的合约地址。UniPass Contract 还支持使用邮箱来作为密钥，因为 UniPass Contract 可以通过验证 DKIM 签名的方式，验证用户对于一个互联网邮箱的所有权。并且在验证过程中，UniPass 采用了零知识证明技术，确保用户邮件信息的隐私安全。

在未来， UniPass Contract 还将考虑支持相比于 secp256k1 更高效更简洁的签名算法（比如：Schnorr，BLS），后量子安全签名算法（比如：Lamport，Winternitz）等等。

## 密钥的角色及权重

<p align="center">
    <Image img={thumbnail_3} width="80%"/>
</p>

在设置完密钥类型后，我们需要给密钥设置角色及权重。目前主要有三种角色：

:::info 👤 Owner

Owner 是账户的所有者。Owner 控制账户的部署、升级、销毁等核心功能，是账户的最高权限控制者。

:::

:::info 💵 Operator

Operator 是账户资产的执行者。Operator 负责账户的资产转账、合约调用、授权许可等功能，是用户日常使用的密钥。

:::

:::info 🛡️ Guardian

Guardian 是账户的守护者。当账户内的密钥损毁或丢失，用户失去账户控制时，可以通过 guardian 来恢复账户。UniPass 提供的一大特色功能就是：链上邮件社交恢复。

:::

一个密钥允许被赋予单个或多种角色。密钥在被赋予某个角色的时候，会同时被设定对应的权重。而用户要开始执行某身份的相关操作时，需要用该角色总权重达到 `100` 及以上的单把或多把密钥进行签名。

当然，对于没有复杂的自定义需求的用户，UniPass Contract 会综合考量用户账户的当前情况，如账上资产总量及注册时间，及用户目前所绑定的各类型的密钥，智能为用户推荐角色及权重设置，来实现安全便捷的密钥管理体验。

基于 UniPass Contract 的多类型密钥支持，及灵活的角色权重体系，开发者可以进行深度的自定义，以满足不同用户、不同场景的需求。欢迎通过 [Twitter](https://twitter.com/UniPassWallet)，[Email](mailto:contact@unipass.id) 联系我们，与我们交流。
