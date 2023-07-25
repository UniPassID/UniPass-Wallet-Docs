---
sidebar_position: 3
---

# 免 gas 支持

UniPss Wallet 是一个智能合约钱包，用户发起交易时需要由一个第三方作为 relayer 帮助用户发起交易。在这个过程中，relayer 可以支持用户使用任意代币支付 gas，甚至可以完全帮助用户代付 gas，实现免 gas 的体验。

## 默认 gas 支付选择

UniPass 将会提供一个默认的 UniPass Relayer 节点。在早期 UniPass relayer 将接受用户使用链原生代币和一些主流稳定币支付 gas。

未来 UniPass relayer 将考虑接入 SWAP 协议，以实现用户使用多种代币支付 gas 的功能。

## 自定义 gas & gas 补贴

第三方可以通过自定义 relayer 相关参数实现：

- 选择官方代币作为交易 gas；
- 可以设置交互合约白名单，当用户与白名单内特定的合约进行交互时，relayer 将自动帮助用户代付 gas；
- 可以根据不同阶段的用户，自定义 gas 策略，如为新用户提供 gas 优惠等等。