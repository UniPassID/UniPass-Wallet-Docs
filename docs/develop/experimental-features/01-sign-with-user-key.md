---
sidebar_position: 1
---

# Sign with the User Key and Derive New Keys

:::tip Notice 
- This function is experimental and currently only available on the testnet network 
- This function is only for the Popup SDK 
:::

## Background

In L2 transaction modes such as StarkEx and zkLink, users need to bind an L2 key (named StarkKey or pubKeyHash) by signing message with an L1 account. 

However, considering that the [master key](../../wallet/03-master-key.md) used by UniPass users on the L1 layer is an MPC key, directly using the signature of the MPC key to derive the L2 key would allow the UniPass server to obtain the signature, which would affect the security of the L2 key.

> The two secret shares of the MPC key are:
>
> `User key`: It will exist in the form of "password + keystore". Users save the password themselves, and the keystore can be saved on cloud servers (such as iCloud, Google Drive, etc.) or hosted in a trusted third-party storage.
>
> `Server key`: Currently, it will be securely managed by the UniPass official. Users will obtain key operation permissions by verifying their identity through 2FA. 2FA verification will include: email/mobile verification code, Google Authenticator, OAuth verification, WebAuthn, etc.

Therefore, we provide a feature that allows signing message using only the `user key`.

## Signing with User Key

This feature is only available for Popup SDK. For more information about Popup SDK, please refer to: [SDK initialization](../popup-sdk/02-initialization.md), [Connect UniPass Wallet](../popup-sdk/03-connect-wallet.md).

### Install a Specified Version of the SDK

```
npm install unipasswallet/popup-sdk@1.1.5-alpha.2
```

Added parameter description of `starkKeyMessage`:

- `starkKeyMessage`: The message needed to generate the starkKey or pubKeyHash. The `user key` secret share will sign this message.

### Code Sample

```tsx
try {
  const account = await upWallet.login({
    email: true,
    eventListener: (event: UPEvent) => {
      console.log("event", event);
      const { type, body } = event;
      if (type === UPEventType.REGISTER) {
        console.log("account", body);
        ElMessage.success("a user register");
      }
    },
    connectType: "both",
    starkKeyMessage: "Hello StarKKey",
  });
  const { address, email } = account;
  console.log("account", address, email);
} catch (err) {
  console.log("connect err", err);
}
```

Return: After successfully connecting to UniPass, the result will be data of type `UPAccount`. If the user denies connection to UniPass Wallet, an exception will be thrown. The application should catch this exception and handle it.

```tsx
export interface UPAccount {
  address: string; // Ethereum address of user
  email?: string | undefined; // Email
  newborn?: boolean | undefined; // Newly registered or not
  message?: string; // sign with ethereum message when authorize is true
  signature?: string; // sign with ethereum signature when authorize is true
  starkKeyInfo?: string; // starkKeyInfo if pass starKeyMessage when login，it is a json string that contains publicKey and signature
}
```

## Generate `starkKey` from `starkKeyInfo`

```jsx
// usage of starkKeyInfo
const starkwareCrypto = require("@starkware-industries/starkware-crypto-utils");

function main(starkKeyInfo) {
  try {
    const { publicKey, signature } = JSON.parse(starkKeyInfo || "{}");
    const privateKey =
      starkwareCrypto.keyDerivation.getPrivateKeyFromEthSignature(signature);
    const startKey =
      starkwareCrypto.keyDerivation.privateToStarkKey(privateKey);
    console.log("publicKey:", publicKey);
    console.log("privateKey:", privateKey);
    console.log("startKey:", startKey);
  } catch (error) {
    console.log(error);
  }
}

main(
  '{"publicKey":"0x042286654d5268a267215de30a66bb998febb6516e96831eabec4d2781ffbe20db783a7992374aeb8568929e73b3dc9f13c3ea92a890bb0639a120f478590e882c","signature":"0x29a7efe2a5265eda0ed705f9fca9805db06d9c2605289de1084c06c6e2be39487e4cb041b34e1ffedb62ac99433c34fbcc98352029a627c335cea02cef52bf551c"}'
);
```

## The Demo branch of Stark key:

[GitHub - UniPassID/unipass-popup-sdk at feat-starkey](https://github.com/UniPassID/unipass-popup-sdk/tree/feat-starkey)