---
sidebar_position: 1
---

# 将 EOA 作为 Master Key

Master key 是签名消息和交易的 signer，需要从 `ethers.js` 继承 `Signer`。

## 从私钥初始化 signer

这里提供一个例子，您可以通过任何其他方式生成私钥。

```kotlin
import com.unipass.smartAccount.*

val ecKeyPair: ECKeyPair = Keys.createEcKeyPair()
val privateKeyInDec: BigInteger = ecKeyPair.getPrivateKey()
val sPrivatekeyInHex = privateKeyInDec.toString(16)

//Instantiate EOASigner with privateKey
val signer = EOASigner(sPrivatekeyInHex)
```