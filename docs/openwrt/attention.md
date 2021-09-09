---
title: 血与泪的焦灼
---
### docker没有网络
添加防火墙配置
iptables -t nat -A POSTROUTING -s 172.31.0.1/24 ! -o docker0 -j MASQUERADE<br/>
<span style="color:red">接口桥接不要桥接docker0</span><br/><span style="color:red">会导致docker网络中的dns、hosts失效</span>

### 80端口冲突
修改/etc/config/uhttpd的启动端口
### 配置额外的hosts
![额外hosts](../.vuepress/public/openwrt/hosts.png)

### WIFI

![wifi](../.vuepress/public/openwrt/wifi.png)