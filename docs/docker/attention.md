---
title: 注意事项
---
1. 遇到任何网络问题，先把宿主机防火墙关了再试！！！
   

## Apline镜像时区更改
dockerfile增加
```bash
# 设置时区为上海
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata
```
