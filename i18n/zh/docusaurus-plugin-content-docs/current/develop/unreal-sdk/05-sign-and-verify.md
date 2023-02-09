---
sidebar_position: 5
---

# 签名消息与验签

## 签名消息

在 Widget Blueprint 中创建一个 `Sign Message` 函数，然后设置相关参数。

1. `Message`：调用 SignMessage 方法须传入 Message 字段
2. `OnSignMessage Event`：通过自定义事件获取到签名完成返回的 Signature

![sign message](./img/unreal-sign-message.png)

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)。