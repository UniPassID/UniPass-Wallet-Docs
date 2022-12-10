---
sidebar_position: 2
---

# Initialization

1. Create a Widget Blueprint

![build a Widget Blueprint](./img/unreal-build-widget.png)

2. Initialize UnipassSDK
    create a `Init` function in the Widget Blueprint, and then complete its parameters.

   - `Default Browser Widget`: it can be set to `W_ExecuteWebBrowser` of UniPass SDK. If you want to use your customized WebBrowser Blueprint, it must follow the structure of `W_ExecuteWebBrowser`
   - `In Development`: UniPass SDK environment, it can be set to `testnet` or `mainnet`.
   - `In Chain Type`: Blockchain name, it can be set to `polygon`, `eth`, `bsc` or `rangers`.
   - `In App Name`: Application name，it will be shown in Unipass Wallet pages.
   - `In App Icon`: Application Logo url, In order to make it shown in UniPass Wallet pages correctly, the application logo should remove the cross domain restriction for UniPass domains.

![initialize UniPass SDK](./img/unreal-initialize-unipass.png)
