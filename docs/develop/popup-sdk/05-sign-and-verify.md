---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

### Definition of signature function

```typescript
  /**
   * @param message - message to be signed.
   * @param options.isEIP191Prefix - if true, sign with EIP191 prefix. Default is false.
   * @param options.onAuthChain - if true, sign on auth chain(polygon). Default is true.
   * @returns The '0x'-prefixed hex encoded signature.
   */
  public async signMessage(message: BytesLike, options?: { isEIP191Prefix?: boolean; onAuthChain?: boolean }): Promise<string>
```

### Code sample

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

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).