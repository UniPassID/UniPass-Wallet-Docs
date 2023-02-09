---
sidebar_position: 6
---

# signTypedData(EIP-712) and Verify

## signTypedData([EIP-712](https://eips.ethereum.org/EIPS/eip-712))

### Definition of signature function

```tsx
export interface MessageTypeProperty {
  name: string;
  type: string;
}
export interface MessageTypes {
  EIP712Domain: MessageTypeProperty[];
  [additionalProperties: string]: MessageTypeProperty[];
}

/**
 * This is the message format used for `signTypeData`, for all versions
 * except `V1`.
 *
 * @template T - The custom types used by this message.
 * @property types - The custom types used by this message.
 * @property primaryType - The type of the message.
 * @property domain - Signing domain metadata. The signing domain is the intended context for the
 * signature (e.g. the dapp, protocol, etc. that it's intended for). This data is used to
 * construct the domain seperator of the message.
 * @property domain.name - The name of the signing domain.
 * @property domain.version - The current major version of the signing domain.
 * @property domain.chainId - The chain ID of the signing domain.
 * @property domain.verifyingContract - The address of the contract that can verify the signature.
 * @property domain.salt - A disambiguating salt for the protocol.
 * @property message - The message to be signed.
 */
export interface TypedMessage<T extends MessageTypes> {
  types: T;
  primaryType: keyof T;
  domain: {
    name?: string;
    version?: string;
    chainId?: number;
    verifyingContract?: string;
    salt?: ArrayBuffer;
  };
  message: Record<string, unknown>;
}
```

## Sample of `signTypedData`

```tsx
const signTypedData = async () => {
  console.log("signTypedData");
  try {
    const resp = await upWallet.signTypedData(eip712DemoData);
    console.log("resp", resp);
    eip712Sig.value = resp;
  } catch (err: any) {
    ElMessage.error(err?.message || "signTypedData error");
    console.log("auth error", err?.message);
  }
};
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).