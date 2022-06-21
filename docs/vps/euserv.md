---
title: EUSERV
head:
  - - meta
    - name: keywords
      content: 羊毛-Euserv
---

## IPV6 WARP突破euserv限制

### 安装WARP

**仅支持Ubuntu 20.04或Debian 10**

* #### 脚本1：IPV4是WARP分配的IP，IPV6是VPS本地IP

```shell
wget -qO- https://cdn.jsdelivr.net/gh/YG-tsj/EUserv-warp/warp4.sh|bash
```

* #### 脚本2：IPV4与IPV6都是WARP分配的IP

```shell
wget -qO- https://cdn.jsdelivr.net/gh/YG-tsj/EUserv-warp/warp64.sh|bash
```

### 安装v2ray-agent

```shell
wget -P /root -N --no-check-certificate "https://raw.githubusercontent.com/mack-a/v2ray-agent/master/install.sh" && chmod 700 /root/install.sh && /root/install.sh
```

### 更新xray流量配置文件

**全局走ipv4**

```json
{ 
"outbounds": [
    {
      "tag":"IP6-out",
      "protocol": "freedom",
      "settings": {}
    },
    {
      "tag":"IP4-out",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv4" 
      }
    }
  ],
  "routing": {
    "rules": [
      {
        "type": "field",
        "outboundTag": "IP4-out",
        "domain": [""] 
      },
      {
        "type": "field",
        "outboundTag": "IP6-out",
        "network": "udp,tcp" 
      }
    ]
  }
}
```



### 相关WARP进程命令

* 手动临时关闭WARP网络接口

  ```shell
  wg-quick down wgcf
  ```

  

* 手动开启WARP网络接口

  ```shell
  wg-quick up wgcf
  ```

* 启动

  ```shell
  systemctl enable wg-quick@wgcf
  ```

* 开始

  ```shell
  systemctl start wg-quick@wgcf
  ```

* 重启

  ```shell
  systemctl restart wg-quick@wgcf
  ```

* 停止

  ```shell
  systemctl stop wg-quick@wgcf
  ```

* 关闭

  ```shell
  systemctl disable wg-quick@wgcf
  ```

  





**学习来源于甬哥的youtube**

[甬哥的github](https://github.com/YG-tsj/EUserv-warp)

[MACK-A](https://github.com/mack-a/v2ray-agent)