---
sidebar_position: 3
---

# Connect UniPass Wallet

```ts
export declare type UPEventListener = (event: UPEvent) => void;
export declare type UPConnectOptions = {
    email?: boolean;                 // request email or not
		eventListener?: UPEventListener; // event listener during connection
};
```

Return an `UPAccount` object if succeed. Otherwise an exception will be thrown if user denied the connection request.

```ts
export declare class UPAccount {
    address: string;                       // Ethereum address of user
    email?: string | undefined;
    newborn?: boolean | undefined;         // Newly registered or not
    constructor(username: string, email?: string | undefined, newborn?: boolean | undefined);
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
  });
	const { address, email } = account;
  console.log("account", address, email);
  
} catch (err) {
  console.log("connect err", err);
}
```