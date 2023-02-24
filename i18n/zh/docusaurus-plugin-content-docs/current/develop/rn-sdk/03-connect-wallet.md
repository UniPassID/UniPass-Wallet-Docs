---
sidebar_position: 3
---

# 连接至 UniPass Wallet

调用`login`方法获取UniPass Account `UniPassUserInfo`信息。

UniPass 目前支持自定义登录选项设置, 包括下列选项:
- `connectType`: 指定 UniPass 通过特定方式登录，目前提供的选项有 `google`, `email` 和 `both`. 默认值为 `both`, 表示允许支持的任意方式进行登录.
- `authorize`: 如果设置为 `true`, UniPass 将会返回一个自动生成的 `Sign-in With Ethereum` 消息和对应的签名. 默认值为 `false`.
- `returnEmail`: 如果设置为 `true`, UniPass 账户邮箱 email 将会返回. 默认值为 `false`.

## 相关类型定义

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

## 示例代码

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