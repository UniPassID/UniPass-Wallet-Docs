---
sidebar_position: 3
---

# Connect UniPass Wallet

After the initialization is complete, invoke the `login` method to get information about the UniPass Account `UniPassUserInfo`.

UniPass currently supports customizing login options for `login` method, including:
- `connectType`: indicate the provider used to login UniPass, including `google`, `email` and `both` options. The default value is `both`, indicating use any supported way to login UniPass.
- `authorize`: if set to `true`, UniPass will return a auto generated `Sign-in With Ethereum` message, and a signature for the message. The default value is `false`.
- `returnEmail`: if set to `true`, UniPass account `email` will be returned. The default value is `false`.

## Type definitions

```typescript
class UniPassWallet {
  login(callBack: UniPassCallBack<LoginResult>, loginOption?: LoginOption): void;
}

interface UniPassCallBack<LoginResult> {
  success: (result: T) => void;
  failure: (result: Response) => void;
}

interface Response {
  type: Action;
  errorCode?: number;
  errorMsg?: string;
}

type LoginResult = {
  userInfo: UserInfo;
} & Response;

type UserInfo = {
  email?: string;
  address: string;
  newborn: boolean;
  message?: string;
  signature?: string;
};

interface LoginOption {
  connectType?: ConnectType;
  authorize?: boolean;
  returnEmail?: boolean;
}

enum ConnectType {
  GOOGLE = 'google',
  EMAIL = 'email',
  BOTH = 'both',
}
```

## Code sample

```typescript
uniPassWallet.login({
  success(res) {
    console.log('login success: ', res);
  },
  failure(e) {
    console.log('login fail: ', e);
  }}, {
    returnEmail: true,
    authorize: true,
  });
```

`newborn` can be used to track new registration count.

## Verification for Sign-in With Ethereum

If you set `authorize` to `true`, you may need to verify the signature of Sign-in With Ethereum, please refer to [**Sign-in With Ethereum**](../verifying-messages/02-sign-in-with-ethereum.md).