---
sidebar_position: 3
---

# Gasless Support

In the EVM, due to the limitations of the underlying architecture, contract addresses cannot initiate transactions directly; they require an EOA (Externally Owned Account) address to do so.

Therefore, when using a smart wallet created based on UniPass Contract, users need a third-party relayer to help them initiate transactions. In this process, the relayer can allow users to use arbitrary supported tokens to pay for the gas fee, or even pay the gas fee for the users, thus achieving a gasless user experience.

## Out of the box relayer

UniPass will provide a default UniPass Relayer Node that you can use out of the box. In the beginning, UniPass Relayer will accept gas payment in the form of native tokens and mainstream stable coins.

In the future, UniPass Relayer will consider SWAP protocol to achieve gas payment in more tokens.

## Customize Gasless

You can achieve following features through customizing the relayer parameters:

- Use the application token to pay gas fee
- Set up whitelisted smart contracts, which the relayer will automatically pay the gas fee for those users
- Set up tiered gas policy, like giving additional gas fee discount to new users