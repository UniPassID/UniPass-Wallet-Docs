---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

```ts
const signMessage = async () => {
  try {
    const sig = await upWallet.signMessage(message);
  } catch (err) {
    console.log("auth err", err);
  }
};
```

## Verify message

```ts
const verifySig = async () => {
  const message = "hello world";
  const sig: string;
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
