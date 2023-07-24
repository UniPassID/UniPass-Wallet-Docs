---
sidebar_position: 1
---

# Init Master Key from EOA 

Master key the main signer for signing messages and transactions. It has to inherit the `Signer` in `ethers.js`.

## Init Master Key from MetaMask

```tsx
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Prompt user for account connections
await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();
```