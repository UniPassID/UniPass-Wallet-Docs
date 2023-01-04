---
sidebar_position: 7
---

# Verifying Messages

## Verify message -- Typescript

```typescript
export const EIP1271_SELECTOR = '0x1626ba7e';
export const unipassMessagePrefix = '\x18UniPass Signed Message:\n';

export function unipassHashMessage(message: Bytes | string): string {
  if (typeof message === 'string') {
    message = toUtf8Bytes(message);
  }
  return keccak256(
    concat([
      toUtf8Bytes(unipassMessagePrefix),
      toUtf8Bytes(String(message.length)),
      message,
    ])
  );
}

export const encodeTypedDataHash = (typedData: TypedData): string => {
  const types = { ...typedData.types };

  // remove EIP712Domain key from types as ethers will auto-gen it in
  // the hash encoder below
  delete types['EIP712Domain'];

  return ethers.utils._TypedDataEncoder.hash(
    typedData.domain,
    types,
    typedData.message
  );
};

export const encodeTypedDataDigest = (typedData: TypedData): Uint8Array => {
  return ethers.utils.arrayify(encodeTypedDataHash(typedData));
};

/**
 * @param msg the message to be signed
 * @param sig the signature response returned by UniPass
 * @param account the account who signed the message
 * @returns boolean true: pass verification, false: failed verification
 */
public async isValidSignature(
  _msg: string,
  _sig: string,
  _account?: string
): Promise<boolean> {
  if (!_account) {
    this.checkInitialized();
    _account = this._account!.address;
  }
  const contract = new Contract(
    _account!,
    [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '_hash',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: '_signature',
            type: 'bytes',
          },
        ],
        name: 'isValidSignature',
        outputs: [
          {
            internalType: 'bytes4',
            name: 'magicValue',
            type: 'bytes4',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    this._auth_provider
  );

  const code = await contract.isValidSignature(
    unipassHashMessage(_msg),
    _sig
  );

  return code === EIP1271_SELECTOR;
}

/**
 * Valid the address of the account that created the given EIP-712
 * signature. The version provided must match the version used to
 * create the signature.
 *
 * @param options._data - The typed data that was signed.
 * @param options._sig - The '0x-prefixed hex encoded message signature.
 * @param options._account - The address of user.
 * @returns boolean true: pass verification, false: failed verification.
 */
public async isValidTypedSignature<T extends MessageTypes>(
  _data: TypedMessage<T>,
  _account: string,
  _sig: string
) {
  if (_data == null) {
    throw new Error('Missing data parameter');
  }
  if (!_account) {
    this.checkInitialized();
    _account = this._account!.address;
  }
  const contract = new Contract(
    _account!,
    [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '_hash',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: '_signature',
            type: 'bytes',
          },
        ],
        name: 'isValidSignature',
        outputs: [
          {
            internalType: 'bytes4',
            name: 'magicValue',
            type: 'bytes4',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    this._auth_provider
  );
  const messageHash = encodeTypedDataDigest(_data as TypedData);
  const code = await contract.isValidSignature(messageHash, _sig);

  return code === EIP1271_SELECTOR;
}
```

## Verify message -- Go

```go
package main

import (
    "bytes"
    "context"
    "strconv"
    "strings"

    "github.com/ethereum/go-ethereum"
    "github.com/ethereum/go-ethereum/accounts/abi"
    "github.com/ethereum/go-ethereum/common"
    "github.com/ethereum/go-ethereum/ethclient"
    "github.com/ethereum/go-ethereum/signer/core/apitypes"
    "golang.org/x/crypto/sha3"
)

// 0x1626ba7e
var EIP1271_SELECTOR = [32]byte{22, 38, 186, 126}

const UnipassMessagePrefix = "\x18UniPass Signed Message:\n"

const IsValidSignatureABI = "[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_hash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"_signature\",\"type\":\"bytes\"}],\"name\":\"isValidSignature\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"magicValue\",\"type\":\"bytes4\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"

func UnipassHashMessage(message []byte) []byte {
    hasher := sha3.NewLegacyKeccak256()
    hasher.Write([]byte(UnipassMessagePrefix))
    hasher.Write([]byte(strconv.Itoa(len(message))))
    hasher.Write(message)
    return hasher.Sum(nil)
}

func IsValidSignature(
    ctx context.Context,
    client *ethclient.Client,
    account common.Address,
    msg, sig []byte,
) (bool, error) {
    accountABI, err := abi.JSON(strings.NewReader(IsValidSignatureABI))
    if err != nil {
        return false, err
    }
    messageHash := UnipassHashMessage(msg)
    msghash := [32]byte{}
    copy(msghash[:], messageHash)
    callData, err := accountABI.Pack("isValidSignature", msghash, sig)
    if err != nil {
        return false, err
    }
    result, err := client.CallContract(ctx, ethereum.CallMsg{
        To:   &account,
        Data: callData,
    }, nil)
    if err != nil {
        return false, err
    }

    return bytes.Equal(result, EIP1271_SELECTOR[:]), nil
}

func IsValidTypedSignature(
    ctx context.Context,
    client *ethclient.Client,
    account common.Address,
    data apitypes.TypedData,
    sig []byte,
) (bool, error) {
    accountABI, err := abi.JSON(strings.NewReader(IsValidSignatureABI))
    if err != nil {
        return false, err
    }

    messageHash, _, err := apitypes.TypedDataAndHash(data)
    if err != nil {
        return false, err
    }
    msghash := [32]byte{}
    copy(msghash[:], messageHash)
    callData, err := accountABI.Pack("isValidSignature", msghash, sig)
    if err != nil {
        return false, err
    }
    result, err := client.CallContract(ctx, ethereum.CallMsg{
        To:   &account,
        Data: callData,
    }, nil)
    if err != nil {
        return false, err
    }

    return bytes.Equal(result, EIP1271_SELECTOR[:]), nil
}
```

### `IsValidSignature`

Code sample:

```golang
client, err := ethclient.Dial("")
if err != nil {
    panic(err)
}
ctx := context.Background()
account := common.HexToAddress("0x0000000000000000000000000000000000000000")

sig := common.FromHex("0x")
msg := []byte("Welcome to UniPass!")
ok, err := IsValidSignature(ctx, client, account, msg, sig)
```

### `IsValidTypedSignature`

Code sample:

```go
client, err := ethclient.Dial("")
if err != nil {
    panic(err)
}
ctx := context.Background()
account := common.HexToAddress("0x0000000000000000000000000000000000000000")

chainId := math.HexOrDecimal256(*common.Big1)
data := apitypes.TypedData{
    Types: apitypes.Types{
        "EIP712Domain": []apitypes.Type{
            {Name: "name", Type: "string"},
            {Name: "version", Type: "string"},
            {Name: "chainId", Type: "uint256"},
            {Name: "verifyingContract", Type: "address"},
        },
        "Person": []apitypes.Type{
            {Name: "name", Type: "string"},
            {Name: "wallet", Type: "address"},
        },
        "Mail": []apitypes.Type{
            {Name: "from", Type: "Person"},
            {Name: "to", Type: "Person"},
            {Name: "contents", Type: "string"},
        }},
    Domain: apitypes.TypedDataDomain{
        Name:              "Ether Mail",
        Version:           "1",
        ChainId:           &chainId,
        VerifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    },
    PrimaryType: "Mail",
    Message: apitypes.TypedDataMessage{
        "from":     apitypes.TypedDataMessage{"name": "Cow", "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"},
        "to":       apitypes.TypedDataMessage{"name": "Bob", "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"},
        "contents": "Hello, Bob!",
    },
}
sig := common.FromHex("0x")
ok, err := IsValidTypedSignature(ctx, client, account, data, sig)
```
