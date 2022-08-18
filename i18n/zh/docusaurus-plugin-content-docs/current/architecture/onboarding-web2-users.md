---
sidebar_position: 2
---

# 服务 Web2 用户

## 专为 Web2 用户定制的账户结构

基于 UniPass Wallet 灵活的架构，我们为互联网用户量身定制了一套免私钥的、非托管的智能合约账户解决方案。

用户在账户中通常会设置 3 个密钥。

- Master key，具备 `Owner: 50` 和 `Operator: 100`的权限。用户日常进行转账、合约调用使用的密钥。
- Register email，具备 `Owner: 50` 和 `Guardian: 50` 的权限。用户的注册邮箱，可以配合 Master key 执行 Owner 操作，或者配合其他守护者执行 Guardian 操作。
- Guardian email，具备 `Guardian: 50` 的权限。用户设置的守护者邮箱，用户可以在丢失 Master key 时，通过 Register email 和 Guardian email 发送邮件发起账户链上社交恢复，从而更新账户内的密钥。