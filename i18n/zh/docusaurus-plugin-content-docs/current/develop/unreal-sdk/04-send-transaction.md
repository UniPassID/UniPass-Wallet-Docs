---
sidebar_position: 4
---

# 发送交易

## 发送原生代币

1. 调用 SendTransaction 方法须传入交易信息 (SendTransactionParamsData)
   - To: 目标地址
   - Value: 转账金额，单位为 Wei
   - Data: 交易数据
   - ChainType: 使用的链类型 （polygon、eth、 bsc、 rangers）
2. 通过自定义事件获取到交易完成后的 Hash

![send transaction](./img/unreal-send-transaction.png)
