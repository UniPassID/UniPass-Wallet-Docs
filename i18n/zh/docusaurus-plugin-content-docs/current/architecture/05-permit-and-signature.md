---
sidebar_position: 5
---

# 签名密钥和 permit

因为 master key 采用的是 TSS 方案，需要多方参与才能完成签名，并不适合作为用户日常签名交易的 key。

因此我们采用了 master key 授权 session key 的方式，用户日常可以使用 session key 进行签名、签交易。

首先是授权 permit 流程：

- 用户获得 master key 中 2 个密钥分片的签名权限
- 在本地生成一个不可导出的 session key
- 使用这 2 个密钥分片对 session key 和授权截止时间的 timestamp 进行签名，即可获得授权 permit。

![permit-and-signature.png](./img/permit-and-signature.png)

:::tip
这里 permit 的内在含义是：允许 session key 在此 timestamp 前代表 master key 签名交易。
:::

然后是 sign transaction 和 verify 的流程：

- 用户使用 session key 签名一笔交易
- 将 session key signature 和 permit 放在一笔交易内提交至链上
- 链上账户合约验证两个内容：
    - 验证 permit 的有效性
    - 验证 session key signature 的有效性
- 验证通过后，即可执行交易

实际使用中，我们会在不同的安全环境中，对 timestamp 进行不同的设置，比如在网页环境中，permit 有效期只有 4 个小时；而在 APP 环境中，permit 有效期可以延长至 1 周。