---
sidebar_position: 3
---

# 连接至 UniPass Wallet

请求参数：连接 UniPass 时可以通过传入参数来指定是否获取用户的 Email，可以传入的自定义参数如下：

调用`login`方法获取UniPass Account `UniPassUserInfo`信息。

UniPass 目前支持自定义登录选项设置, 包括下列选项:
- connectType: 指定 UniPass 通过特定方式登录，目前提供的选项有 `google`, `email` 和 `both`. 默认值为 `both`, 表示允许支持的任意方式进行登录.
- authorize: 如果设置为 `true`, UniPass 将会返回一个自动生成的 `Sign-in With Ethereum` 消息和对应的签名. 默认值为 `false`.
- email: 如果设置为 `true`, UniPass 账户邮箱 email 将会返回. 默认值为 `false`.

```ts
export declare type ConnectType = "both" | "google" | "email";
export declare type UPEventListener = (event: UPEvent) => void;
export declare type UPConnectOptions = {
  email?: boolean; // 是否请求用户email地址
  connectType?: ConnectType; // 打开 UniPass 登录页类型
  authorize?: boolean; // sign with ethereum if true when connect
  eventListener?: UPEventListener; // 连接过程中的事件监听
};
```

返回结果：连接 UniPass 成功后返回结果为 `UPAccount` 类型数据，如果用户拒绝 UniPass Wallet 连接会抛出异常，应用需要捕获该异常并处理。

```ts
export interface UPAccount {
  address: string; // Ethereum address of user
  email?: string | undefined; // Email
  newborn?: boolean | undefined; // Newly registered or not
  message?: string; // sign with ethereum message when authorize is true
  signature?: string; // sign with ethereum signature when authorize is true
}
```

`newborn` 字段能够被用来统计新注册用户。

## 代码示例

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
  });
  const { address, email } = account;
  console.log("account", address, email);
} catch (err) {
  console.log("connect err", err);
}
```
