---
title: debian常规操作
---
## BBR
```
#debian
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
 #保存生效
sysctl -p
```
### 关闭BBR
```
#debian
sed -i '/net\.core\.default_qdisc=fq/d' /etc/sysctl.conf
sed -i '/net\.ipv4\.tcp_congestion_control=bbr/d' /etc/sysctl.conf
sysctl -p
```