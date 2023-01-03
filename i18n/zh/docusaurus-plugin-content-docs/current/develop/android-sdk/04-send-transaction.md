---
sidebar_position: 4
---

# 发送交易

相关类型定义：

```java
data class SendTransactionInput (
  val from: String,
  val to: String,
  val value: String? = "0x",
  val data: String? = "0x",
)
```

## 发送原生代币

```java
// 请确认用户已授权登录
if (unipassInstance.isLogin()) {
    var transactionInput = SendTransactionInput(unipassInstance.getAddress(),
        "0x7b5Bd7c9E3A0D0Ef50A9b3aCF5d1AcD58C3590d1",
        "0x" + toWei("0.001", Convert.Unit.ETHER).toBigIntegerExact().toString(16)
    )

    var signTxCompletableFuture = unipassInstance.sendTransaction(transactionInput)
    signTxCompletableFuture.whenComplete{ output, error ->
        if (error == null) {
            Log.d("Unipass SendTransaction", "success")
        } else {
            Toast.makeText(this, error.message, Toast.LENGTH_SHORT).show()
            Log.d("Unipass SendTransaction", error.message ?: "Something went wrong")
        }
    }
}
```
