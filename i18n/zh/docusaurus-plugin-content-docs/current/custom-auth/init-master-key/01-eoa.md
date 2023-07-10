---
sidebar_position: 1
---

# EOA 作为 Master Key

Master Key Signer 是签名消息和交易的 singer，需要从 `ethers.js` 继承 `Signer`。

## 从 MetaMask 初始化 singer

```tsx
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Prompt user for account connections
await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();
```