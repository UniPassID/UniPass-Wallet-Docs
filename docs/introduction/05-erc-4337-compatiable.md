---
sidebar_position: 5
---

# What is ERC-4337

[**ERC-4337**](https://eips.ethereum.org/EIPS/eip-4337)(**Account Abstraction via Entry Point Contract specification**) is a specification that aims to use entry point contract to achieve account abstraction without changing the consensus layer protocol of Ethereum.

ERC-4337 is still in draft stage and not finalized yet. But since ERC-4337 will not change the consensus layer, there are already implementations available like [OpenZeppelin](https://github.com/eth-infinitism/account-abstraction) and [Stackup](https://github.com/stackupfinance/stackup).

ERC-4337 defines some new rules, like introducing higher-layer pseudo-transaction object called `UserOperation`, use bundlers to package a set of these objects into a transaction for batch verification and execution, and introducing paymaster mechanism that can achieve decentralized gas fee payment sponsorship.

## ERC-4337 compatibility

UniPass Wallet will be compatible with ERC-4337 and will facilitate the wider adoption and improvement of ERC-4337 with other wallet providers.