---
sidebar_position: 4
---

# Gasless support

UniPass Wallet is a smart contract wallet. When users initiate a transaction, a third-party is needed to act as a relayer to fulfill the it. In this process, the relayer can allow users to use arbitrary supported tokens to pay for the gas fee, or even pay the gas fee for the users, thus achieving a gasless user experience.

## Out of the box relayer

UniPass will provide a default UniPass Relayer Node that you can use out of the box. In the beginning, UniPass Relayer will accept gas payment in the form of native tokens and mainstream stable coins.

In the future, UniPass Relayer will consider SWAP protocol to achieve gas payment in more tokens.

## Build your own relayer

UniPass Relayer is an open-source program, so you can customize it deploy your own relayer node.

Below are what you can do:

- Use the native token to pay gas fee
- Set up whitelisted smart contracts, which the relayer will automatically pay the gas fee for the users interacting with them
- Set up tiered gas policy, like giving additional gas fee discount to new users