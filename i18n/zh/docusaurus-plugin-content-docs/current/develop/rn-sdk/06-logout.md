---
sidebar_position: 6
---

# 登出账户

## 相关类型定义

```typescript
class UniPassWallet {
    // 当 deep 设置为 false 时，网站状态不会被清除，默认为 true
    logout(callback: UniPassCallBack<null>, deep?: boolean): void;
}

type SignResult = {
  signature: string;
} & Response;

interface SignOption {
  from: string;
  type: SignType;
  msg: string;
}
```

## Code sample

```typescript
uniPassWallet.logout({
	success() {
    console.log('logout success');
	},
	failure(e) {
    console.log('login fail: ', e);
	},
});
```
