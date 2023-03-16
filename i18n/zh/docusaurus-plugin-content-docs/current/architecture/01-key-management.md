---
sidebar_position: 1
---

import Image from '@theme/IdealImage';
import thumbnail_1 from './img/keyset-structure.png';
import thumbnail_2 from './img/keys-type.png';
import thumbnail_3 from './img/roles-type.png';

# 密钥管理

## 账户结构

用户注册 UniPass Wallet 账户时，会给每个用户在链上部署一个智能合约，合约内会存储着这个账户相关的数据和逻辑。

在 UniPass Wallet 的智能合约中，用户是通过一系列具有角色权重的密钥来管理账户的。除了以安全多方计算（MPC）方案实现的 [Master key](/i18n/zh/docusaurus-plugin-content-docs/current/architecture/03-master-key.md) 外，用户还可以设置多种其他类型的密钥。每一个密钥都有一个对应的角色及权重。用户只有在集齐了总角色权重门限超过要求的密钥后，才可以获得该角色的授权。

<p align="center">
    <Image img={thumbnail_1} width="80%"/>
</p>

## 密钥

<p align="center">
    <Image img={thumbnail_2} width="80%"/>
</p>

UniPass Wallet 的合约账户中支持用户设置多种类型的密钥。已经支持的密钥类型包括我们经常使用的外部地址，支持 EIP-1271 协议的合约账户。UniPass 的用户还可以使用邮箱来作为密钥。我们在链上部署的智能合约，可以通过 DKIM 来以密码学的手段验证用户对于一个互联网邮箱的所有权。在验证过程中，UniPass 采用了零知识证明技术，确保用户邮件信息的隐私安全。

在未来， UniPass Wallet 还将考虑支持相比于 secp256k1 更高效更简洁的签名算法（比如：Schnorr，BLS），后量子安全签名算法（比如：Lamport，Winternitz）等等。

## 角色及权重

<p align="center">
    <Image img={thumbnail_3} width="80%"/>
</p>

密钥主要有三种角色：

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

当然，对于没有复杂的自定义需求的用户，UniPass Wallet 会综合考量用户账户的当前情况，如账上资产总量及注册时间，及用户目前所绑定的各类型的密钥，智能为用户推荐角色及权重设置，来实现安全便捷的密钥管理体验。

基于 UniPass Wallet 的多类型密钥支持，及灵活的角色权重体系，开发者可以进行深度的自定义，以满足不同用户、不同场景的需求。欢迎通过 [Discord](https://discord.gg/XaRMFW85Pg)，[Twitter](https://twitter.com/UniPassID)，[Email](mailto:contact@unipass.id) 联系我们，与我们交流。
