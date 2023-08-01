---
sidebar_position: 1
---

# Init Master Key from EOA 

Master key the main signer for signing messages and transactions. It has to inherit the `Signer` in `ethers.js`.

## Init Master Key from Private Key

This is just an example, you can generate privateKey in any other way.

```kotlin
import com.unipass.smartAccount.*

val ecKeyPair: ECKeyPair = Keys.createEcKeyPair()
val privateKeyInDec: BigInteger = ecKeyPair.getPrivateKey()
val sPrivatekeyInHex = privateKeyInDec.toString(16)

//Instantiate EOASigner with privateKey
val signer = EOASigner(sPrivatekeyInHex)
```