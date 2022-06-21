---
title: 开发注意点
head:
  - - meta
    - name: keywords
      content: 开发注意点
---

## 浏览器侧允许https访问http
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

## OpenJDK不自带字体
使用EasyExcel时，如果docker-image使用openjdk，需要自己安装一下fontconfig 和字体库 不然会报错

## Docker启动

启动时最好带上 --init 参数，让pid为1的进程用于转发信号量，不然启动的java程序无法获取到信号量，无法使用jstack等jvm工具
