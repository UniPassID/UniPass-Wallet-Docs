---
sidebar_position: 2
---

# 快速开始

## Basic Settings

将下面这一行依赖加入到你的 **build.gradle** 的 repositories 中:

```
dependencyResolutionManagement {
    ...
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```

## 安装 SDK

添加依赖项。

```bash
dependencies {
	...
	implementation 'com.github.UniPassID:custom-auth-android-sdk:v0.1.1'
}
```

## 相关资料
* [Android Demo 源码](https://github.com/UniPassID/Custom-Auth-Android-SDK-Demo)