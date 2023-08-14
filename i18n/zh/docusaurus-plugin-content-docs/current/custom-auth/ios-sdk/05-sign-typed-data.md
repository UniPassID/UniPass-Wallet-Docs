---
sidebar_position: 6
---

# signTypedData(EIP-712) 与验签

## signTypedData([EIP-712](https://eips.ethereum.org/EIPS/eip-712))

```swift
import Sahred
import CustomAuthSdk

let domain = Eip712Domain(name: "uniPass", version: "0.1.2", chainId: 8001, verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC", salt: nil)
let types = ["EIP712Domain":[Eip712DomainType(name: "name", type: "string"),Eip712DomainType(name: "version", type:"string"),Eip712DomainType(name: "chainId", type: "uint256"),Eip712DomainType(name: "verifyingContract", type: "address")],"Mail":[Eip712DomainType(name: "from", type:"address"),Eip712DomainType(name: "to", type: "address"),Eip712DomainType(name: "contents", type: "string")]]
                        
let typedData = Shared.TypedData(domain: domain, types:types, primaryType: "Mail", message: ["from":Shared.Value.stringValue(inner: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"),"to":Shared.Value.stringValue(inner: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"),"contents":Shared.Value.stringValue(inner: "Hello, Bob!")])
let sig = try! await self.smartAccount!.signTypedData(typedData: typedData)
```

## 验签

请参考 Web SDK 中的[**验签**](../web-sdk/05-sign-typed-data.md)。