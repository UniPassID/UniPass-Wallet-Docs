---
sidebar_position: 5
---

# 签名消息和验签

## 签名消息

```ts
const signMessage = async () => {
  try {
    const sig = await upWallet.signMessage(message);
  } catch (err) {
    console.log("auth err", err);
  }
};
```

## 验签

```ts
const verifySig = async () => {
  const message = "hello world"; // 需要签名的用户自定义消息
  const sig: string; // 调用UniPass签名获取到的结果
  try {
    const ret = await upWallet.isValidSignature(
      message.value,
      sig.value,
      accountAddress
    );
    if (ret === true) {
      console.success("verify signature success");
    } else {
      console.error("verify signature failed");
    }
  } catch (err) {
    console.log("auth err", err);
  }
};
```
