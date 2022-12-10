---
sidebar_position: 4
---

# Send Transaction

Type definitions:

```csharp
/// Type definitions of transaction
public class TransactionMessage
{
    public string from;
    public string to;
    public string value;
    public string data;

    public TransactionMessage(string from, string to, string value, string data)
    {
        this.from = from;
        this.to = to;
        this.value = value;
        this.data = data;
    }
}
```

## Transfer native token

```csharp
var tx = new TransactionMessage(from: wallet.getAddress(), to: native_to, value: Web3.Convert.ToWei(BigDecimal.Parse(native_value), 18).ToString(), data: "0x");
var hash = await wallet.SendTransaction(tx);
Debug.Log(hash);
```

## Transfer ERC20 token

```csharp
// https://docs.nethereum.com/en/latest/nethereum-smartcontrats-gettingstarted/
var transferFunction = new TransferFunction()
{
    To = erc20_to,
    Amount = Web3.Convert.ToWei(BigDecimal.Parse(erc20_value), unit),
};

var signatureEncoder = new SignatureEncoder();
var parameters = new Parameter[] { new Parameter("address", 1), new Parameter("uint256", 2) };
var sha3Signature = signatureEncoder.GenerateSha3Signature("transfer", parameters, 4);
var functionCallEncoder = new FunctionCallEncoder();
var erc20Data = functionCallEncoder.EncodeRequest(transferFunction, sha3Signature);

var tx = new TransactionMessage(from: wallet.getAddress(), to: usdcAddress, value: "0x", data: erc20Data);
var hash = await wallet.SendTransaction(tx);
Debug.Log(hash);
```

## Call contract

Similar with transferring ERC20 token. First construct the call data, and then invoke `sendTransaction`.
