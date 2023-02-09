---
sidebar_position: 5
---

# 签名消息与验签

## 签名消息

### 签名函数定义

```typescript
  /**
   * @param message - message to be signed.
   * @param options.isEIP191Prefix - if true, sign with EIP191 prefix. Default is false.
   * @param options.onAuthChain - if true, sign on auth chain(polygon). Default is true.
   * @returns The '0x'-prefixed hex encoded signature.
   */
  public async signMessage(message: BytesLike, options?: { isEIP191Prefix?: boolean; onAuthChain?: boolean }): Promise<string>
```

### 代码示例

```ts
const signMessage = async () => {
  try {
    const options = { isEIP191Prefix: false, onAuthChain: true };
    const sig = await upWallet.signMessage(message, options);
  } catch (err) {
    console.log("auth err", err);
  }
};
```

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)。