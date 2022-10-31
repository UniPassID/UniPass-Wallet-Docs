---
sidebar_position: 2
---

# 用户友好的账户

## 用户友好的账户结构

基于 UniPass Wallet 灵活的架构，我们为用户量身定制了一套极为友好的免私钥、非托管智能合约账户解决方案。

在初始注册账户时，用户无需设置守护者。此时可将参数设置如下：

|  | Owner | Guardian | Operator |
| --- | --- | --- | --- |
| Master key（主密钥） | `60` | — | `100` |
| Register email（注册邮箱） | `60` | `60` | — |
| Guardian email（守护者邮箱） | — | `50` | — |

:::tip 参数配置说明:
- Master key，具备 `Owner: 60` 和 `Operator: 100` 的权限。这是用户日常进行转账、合约调用使用的密钥。

- Register email，具备 `Owner: 60` 和 `Guardian: 50` 的权限。用户的注册邮箱，可以配合 Master key 执行 Owner 操作，或者配合其他守护者执行 Guardian 操作。

- Guardian email，具备 `Guardian: 50` 的权限。用户设置的守护者邮箱，用户可以在丢失 Master key 时，通过 Register email 和 Guardian email 发送邮件发起账户链上社交恢复，从而更新账户内的密钥。
:::

此时：
- Master key + Register email，可以执行账户 owner 操作
- 当 Master key 丢失时:
    - Register email 可以通过发送邮件发起带时间锁的账户恢复，从而更新账户内的 Master key。
    - Register email 和 Guardian email 共同发起不带时间锁的账户恢复，从而即时更新账户内的 Master key。
    - 详情参考 >> [**邮件社交恢复**](../introduction/email-recovery.md)