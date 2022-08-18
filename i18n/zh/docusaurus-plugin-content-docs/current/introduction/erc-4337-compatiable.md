---
sidebar_position: 5
---

# 兼容 ERC-4337

## 什么是 ERC-4337？

[**ERC-4337**](https://eips.ethereum.org/EIPS/eip-4337)（Account Abstraction via Entry Point Contract specification）是一个由 Vitalik 提出的通过 Entry Point 合约实现的无需更改以太坊协议的账户抽象的以太坊改进提案。

ERC-4337 目前尚处于 Draft 阶段，未成为确定性提案。但是由于 ERC-4337 协议无需更改以太坊底层协议，目前已经有开发者在以太坊生态进行实现，例如：[OpenZeppelin](https://github.com/eth-infinitism/account-abstraction)，[Stackup](https://github.com/stackupfinance/stackup) 等。

ERC-4337 定义了一些新的规范，比如将交易转变为 UserOperation 对象，可以将用户的意图与签名和其他数据打包以进行验证。引入 paymaster 机制，实现去中心化的交易手续费代付功能。

## 兼容 ERC-4337

UniPass Wallet 将会兼容 ERC-4337 协议，并将与其他生态产品和服务商一道推动 ERC-4337 协议的推广普及和建设完善。