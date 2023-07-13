---
sidebar_position: 2
---

# Initialize Smart Account

## Initialize `SmartAccount`

```tsx
import { SmartAccount } from "@unipasswallet/smart-account";

/**
 * export type SmartAccountOptions = {
 *  appId: string;                             // appId registered From Backend
 *  masterKeySigner: Signer;                   // Got Master Key Signer
 *  chainOptions: {                            // Chain Options
 *    chainId: number;
 *    rpcUrl: string;                          // The Rpc Url matched the chainId
 *    relayerUrl?: string;                     // relayer url, default official relayer
 *  }[];
 *  fetch?: typeof fetch;
 *  unipassServerUrl?: string;
 * };
 */

const smartAccount = new SmartAccount({
  masterKeySigner: signer,
  appId,
  chainOptions:[{
		chainId,
		rpcUrl,
	}],
});

await smartAccount.init({ chainId }); // init with active chain id. Notice that the chainId must be included in the `chainOptions`.
```

:::tip
To initialize the smart account, you need to init the active chainId by default.
:::

## Methods of `SmartAccount`

The instance of `SmartAccount` returns the following functions:

- Get Smart Account Info
    - `getAddress()` : returns the address of your smart account.
    - `isDeployed()` : returns the result whether your smart account is deployed in current chain.
    - `getProvider()`: returns current provider that your smart account is using.
    - `getChainId()`: returns current chain id of your smart account.
    - `destroy()`: clear current logged in account.
- `switchChain()`: switch active chain and returns smart account with new chain.
- `sendTransaction()`: returns the response of transaction
- `signMessage()`: returns the signature using personal sign
- `signTypedData()`: returns the signature using sign typed data

## Get Info of `SmartAccount`

### `getAddress()`

This returns the address of your smart account.

```tsx
const address = await smartAccount.getAddress();
```

### `isDeployed()` 

This returns the result whether your smart account is deployed in current chain.

```tsx
const isDeployed = await smartAccount.isDeployed();
```

### `getProvider()`

This returns current provider that your smart account is using.

```tsx
const provider = smartAccount.getProvider();
```

### `getChainId()`

This returns current chain of your smart account.

```tsx
const chainId = smartAccount.getChainId();
```

### `switchChain()`

Switch active chain and returns smart account with new chain.

```tsx
smartAccount = await smartAccount.switchChain(chainId); // Notice that chainId must be included in the `chainOptions`
```

### `destroy()`

Clear current logged in account.

```tsx
await smartAccount.destroy();
```