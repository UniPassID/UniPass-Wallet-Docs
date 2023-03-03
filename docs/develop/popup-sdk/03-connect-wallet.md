---
sidebar_position: 3
---

# Connect UniPass Wallet

After the initialization is complete, invoke the `login` method to get information about the UniPass Account `UniPassUserInfo`.

UniPass currently supports customizing login options for `login` method, including:

- `connectType`: indicate the provider used to login UniPass, including `google`, `email` and `both` options. The default value is `both`, indicating use any supported way to login UniPass.
- `authorize`: if set to `true`, UniPass will return a auto generated `Sign-in With Ethereum` message, and a signature for the message. The default value is `false`.
- `returnEmail`: if set to `true`, UniPass account `email` will be returned. The default value is `false`.

```ts
export declare type ConnectType = "both" | "google" | "email";
export declare type UPEventListener = (event: UPEvent) => void;
export declare type UPConnectOptions = {
  email?: boolean; // request email or not
  connectType?: ConnectType; // Type of login UniPass
  authorize?: boolean; // sign with ethereum if true when connect
  eventListener?: UPEventListener; // event listener during connection
};
```

Return an `UPAccount` object if succeed. Otherwise an exception will be thrown if user denied the connection request.

```ts
export interface UPAccount {
  address: string; // Ethereum address of user
  email?: string | undefined; // Email
  newborn?: boolean | undefined; // Newly registered or not
  message?: string; // sign with ethereum message when authorize is true
  signature?: string; // sign with ethereum signature when authorize is true
  starKeyInfo?: string; // starKeyInfo if pass starKeyMessage when login
  sessionKeyPermit?: string // sessionKeyPermit if pass sessionKeyAddress when login
}
```

`newborn` can be used to track new registration count.

## Code sample

```ts
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
    starKeyMessage: "Hello StarKey",
    sessionKeyAddress: "your session key address",
  });
  const { address, email } = account;
  console.log("account", address, email);
} catch (err) {
  console.log("connect err", err);
}
```

## Verification for Sign-in With Ethereum

If you set `authorize` to `true`, you may need to verify the signature of Sign-in With Ethereum, please refer to [**Sign-in With Ethereum**](../verifying-messages/02-sign-in-with-ethereum.md).