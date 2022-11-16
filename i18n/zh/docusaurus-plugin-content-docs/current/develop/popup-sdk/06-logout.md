---
sidebar_position: 6
---

# 登出账户 & 错误提示

## 登出账户

可以通过调用 logout 方法完成登出

```ts
await upWallet.logout();
```
## 接口错误提示

| Number | Notification                             | Details                     |
| ------ | ---------------------------------------- | --------------------------- |
| 1      | 'Declined: user reject connect'          | 用户拒绝连接                |
| 2      | 'Declined: user reject sign message'     | 用户拒绝签名消息            |
| 3      | 'Declined: user reject send transaction' | 用户拒绝签名交易            |
| 4      | 'Declined: expired'                      | 用户登出 UniPass 或连接超时 |