---
sidebar_position: 6
---

# Customize WebBrowser

If the defaulted `W_ExecuteWebBrowser` can not meet your requirements，you can customize  Browser Blueprint by your own.

1. Create a Widget Blueprint extends from `UnipassWebBrowserWrapper`

![custom web browser](./img/unreal-webbrowser-1.png)

2. Drag `UnipassWebBrowser` to Widget Blueprint

![custom web browser](./img/unreal-webbrowser-2.png)

3. Inject global variable `unipass` to window object of WebBrowser

![custom web browser](./img/unreal-webbrowser-3.png)

4. Implement browser functions: `LoadURL`, `ExecuteJavascript` and other browser functions refer to **UnipassWebBrowser.cpp**

![custom web browser](./img/unreal-webbrowser-4.png)

5. When your customized WebBrowser created successfully. you can use your customized WebBrowser for UnipassSDK Initialization instead of `W_ExecuteWebBrowser`.

![custom web browser](./img/unreal-webbrowser-5.png)
