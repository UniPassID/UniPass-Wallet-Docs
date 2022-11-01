---
sidebar_position: 4
---

# 发送交易

相关类型定义：

```csharp
/// 交易类型定义
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

## 发送原生代币

```csharp
var tx = new TransactionMessage(from: wallet.getAddress(), to: native_to, value: Web3.Convert.ToWei(BigDecimal.Parse(native_value), 18).ToString(), data: "0x");
var hash = await wallet.SendTransaction(tx);
Debug.Log(hash);
```

## 发送 ERC20 代币

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

## 调用合约

与合约交互的方式跟 `发送 ERC20 代币` 的方式类似，构建出调用 data 后，直接使用 `sendTransaction` 完成交易的发送。