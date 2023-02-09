---
sidebar_position: 4
---

# 发送交易

## 类型定义:

```swift
public class UniPassTransaction: NSObject {
    public var from: String = ""
    public var to: String = ""
    public var value: String = "0x"
    public var data: String = "0x"
}
```

## 代码示例

```swift
// Ensure that the user is authorized to log in
 if let userInfo = unipassSdk?.getUserInfo() {
    let tx = UniPassTransaction()
    tx.from = userInfo.address
    tx.to = "0x635b8f68aa1407712a3158782A7E21833bB392CC"
    tx.value = "0x38d7ea4c68000"

    unipassSdk?.sendTransaction(tx, SuccessBlock: { transactionHash in
            print("unipassSdk: send transaction success ✅", transactionHash)
            self.transactionHashLabel?.text = transactionHash
        }, ErrorBlock: { error in
            print("unipassSdk: send transaction failed ❎", error)
    })
} else {
    print("unipassSdk: user not login ❎")
}
```
