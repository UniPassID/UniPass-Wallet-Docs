---
sidebar_position: 2
---

# Quick Start

## Basic Settings

Add it in your root build.gradle at the end of repositories:

```
dependencyResolutionManagement {
    ...
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```

## Install SDK

Add the dependency.

```bash
dependencies {
	...
	implementation 'com.github.UniPassID:custom-auth-android-sdk:v0.1.1'
}
```

## Source Code
* [Android Demo code](https://github.com/UniPassID/Custom-Auth-Android-SDK-Demo)