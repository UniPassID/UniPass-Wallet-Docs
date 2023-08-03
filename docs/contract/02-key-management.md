---
sidebar_position: 2
---

import Image from '@theme/IdealImage';
import thumbnail_1 from './img/keyset-structure.png';
import thumbnail_2 from './img/keys-type.png';
import thumbnail_3 from './img/roles-type.png';

# Key Management

## Key structure

A smart contract wallet is not without keys; instead, it allows you to set and manage your wallet's keys flexibly using smart contracts. Even if you lose your key, you can recover your account by using a backup key through a social recovery process.

UniPass Contract is a versatile contract that creates smart wallets and mainly handles different types of keys and their permissions.

When you create a smart wallet based on UniPass Contract, it's like making a proxy contract wallet just for you. The address of this proxy contract becomes your smart wallet address, and it holds the keys information that manages your account.

In UniPass Contract, you can manage your account using various keys, each with a specific role and weights. By gathering signatures from keys that meet or exceed the required weights for a certain role, you can execute the permissions associated with that role through the UniPass Contract.

<p align="center">
    <Image img={thumbnail_1} width="80%" />
</p>


## Keys and algorithms

<p align="center">
    <Image img={thumbnail_2} width="80%" />
</p>


UniPass Contract supports various types of keys. The currently supported key types include the commonly used EOA (Externally Owned Account) address and contract addresses that comply with the EIP-1271 protocol. UniPass Contract also allows the use of an email address as a key by verifying the user's ownership of an internet email through DKIM signature verification. During this verification process, UniPass utilizes zero-knowledge proof technology to ensure the privacy and security of the user's email information.

In the future, UniPass Contract will also consider supporting more efficient and concise signature algorithms compared to secp256k1, such as Schnorr and BLS, as well as post-quantum secure signature algorithms like Lamport and Winternitz.

## Roles and Weights of Keys

<p align="center">
    <Image img={thumbnail_3} width="80%"/>
</p>

After setting up the key types, we need to assign roles and weights to the keys. Currently, there are three main roles:

:::info 👤 Owner

Owner is the account's owner and has the ultimate authority when it comes to controlling the account's basic operations, including deployment, upgrade, and deletion.

:::

:::info 💵 Operator

Operator is the executor of the account's assets and is in charge of all asset transfers, contract invocations, licensing, and other activities. The key that users most used.

:::

:::info 🛡️ Guardian

Guardian is the guardians of the account. Guardians can be used to retrieve the account if the keys are lost or deleted and the user no longer has access to it. On-chain email social recovery is one of the features that only UniPass has.

:::

A key may be given to a single role or several roles. A key is given a commensurate weight when it is allocated to a role. A user must sign with one or more keys that together have a total weight of `100` or above for that role in order to begin executing actions linked to that role.

Of course, for users who don't have complex custom requirements, UniPass Contract will consider the current situation of the user's account. Such as the total assets and registration time, as well as the types of keys currently bound. It will then intelligently recommend role and weight settings to achieve a secure and convenient key management experience.

With the support for multiple types of keys and a flexible role weighting system in UniPass Contract, developers can deeply customize the system to meet the diverse needs of different users and scenarios. We welcome you to get in touch with us via Twitter or Email to discuss and exchange ideas.