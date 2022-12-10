---
sidebar_position: 1
---

# 快速开始

| 更新版本 | 更新日期   | 默认使用 Domain                    | 更新说明                              |
| -------- | ---------- | ---------------------------------- | ------------------------------------- |
| v0.0.1   | 2022.12.09 | https://testnet.wallet.unipass.id/ | 支持连接钱包，转账代币，签名/验签功能 |

## 相关资料

- [Unreal SDK GitHub](https://github.com/UniPassID/Unipass-UE-SDK)

:::tip
Demo 工程中使用的 UniPass Wallet 域名: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

### Windows

请前往 Google Drive 下载 Windows Demo Package

- [unipass_ue_demo_0.0.1](https://drive.google.com/file/d/1lOWhpTuqQ8RXe9W5eC6XWx93vHM7vXxF/view?usp=sharing)

## 开发环境

- Unreal Engine 5 version: `5.0.3`

## 安装

有两种安装 UniPass SDK 的方式：

1. 安装到项目
    - 打开包含`[ProjectName].uproject` 文件的项目根目录
    - 创建名为 Plugins 的文件夹，如果存在 Plugins 文件夹则无需创建
    - 将 Unipass SDK 中 Plugins/UnipassSDK 文件夹拷贝至项目 Plugins 文件夹中
2. 安装到全局
    - 打开虚幻引擎默认安装目录，默认安装目录是 C:\Program Files (x86)\Epic Games\Launcher\Engine
    - 将 Unipass SDK 中 Plugins/UnipassSDK 文件夹拷贝至上述安装目录的 Plugins 文件夹下

最后，打开 UE5 编辑器，打开 Menu → Edit → Plugins，开启 UnipassSDK 插件

![set up Unipass SDK](./img/unreal-setup.png)
