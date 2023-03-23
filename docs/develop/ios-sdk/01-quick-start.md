---
sidebar_position: 1
---

# Quick Start

## Source Code

Source code of the SDK can be found on [Github](https://github.com/UniPassID/UniPass-Swift-SDK).

You can have a look at the [examples](https://github.com/UniPassID/UniPass-Swift-SDK/tree/main/Example) made on top of this SDK and try it out yourself.


## Requirements

iOS `version 12.0` or newer

## Installation

1. UniPassSDK is available through CocoaPods. To install it, simply add the following line to your Podfile:

```
pod 'UniPassSDK'
```

2. Update your project pod dependencies by running

```
pod install
```

3. Set your app bundle identifier

4. Then you can use UniPassSDK in your project:

```swift
import UniPassSDK
```

## History Version

| Version  | Last updated   | UniPass Wallet Entry URL           | UPgrade Instruction                                                                    |
| -------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.0.5   | 2023.02.10     | https://testnet.wallet.unipass.id/ | Fix invoke SDK failed immediately after opening app through code start process, such as URL Scheme. |
| v0.0.4   | 2023.02.07     | https://testnet.wallet.unipass.id/ | Move login parameter *connectType* to *loginOption*, and add more options like returnEmail, authorize etc to *loginOption*. |
| v0.0.3   | 2023.02.03     | https://testnet.wallet.unipass.id/ | Add option *deep* for logout. Website state won't be cleared when deep is set to false |
| v0.0.1   | 2023.01.14     | https://testnet.wallet.unipass.id/ | Add Login / Send Transaction / Sign Message / Logout methods |
