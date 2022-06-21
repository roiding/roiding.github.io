---
title: Centos 常规操作
head:
  - - meta
    - name: keywords
      content: Centos常规操作
---
## 修改SSH默认端口
### 1 修改端口
```
 vi /etc/ssh/sshd_config
 #找到Port XX 修改为自己想要的端口
```

 <br/>  

 ### 2 防火墙放行
 ```
 #修改XXX为上面修改后端口
 firewall-cmd --zone=public --add-port=XXX/tcp --permanent
 # 刷新防火墙规则
 firewall-cmd --reload
 #查看是否生效
 firewall-cmd --zone=public --query-port=XXX/tcp
 ```
 <br/>  

 ### 3 SELinux放行
```
#检查semanage是否安装
rpm -qa |grep policycoreutils-python
   #安装
   yum install policycoreutils-python
#查看当前SSH允许端口
semanage port -l |grep ssh
#添加新端口
semanage port -a -t ssh_port_t -p tcp XXX
#检查是否添加成功
semanage port -l |grep ssh
```
<br/>  

### 4 重启SSH服务
```
systemctl restart sshd.service
```
<br/>
<br/>
<br/>
<br/> 

## BBR
### 开启BBR  
```
#centos
curl -O https://raw.githubusercontent.com/teddysun/across/master/bbr.sh && sh bbr.sh
```

## 修改IP
- 方式一
nmtui 调出修改窗口

- 方式二
cd /etc/sysconfig/network-scripts/
修改相关网卡文件
 ```
       IPADDR=192.168.0.230 #静态IP
       GATEWAY=192.168.0.1 #默认网关
       NETMASK=255.255.255.0 #子网掩码
       DNS1=192.168.0.1 #DNS 配置
       DNS2=8.8.8.8 #谷歌地址
 ```
重启网卡：service network restart       

## 修改主机名
在CentOS7中，有三种定义的主机名:

静态的（Static hostname）
“静态”主机名也称为内核主机名，是系统在启动时从/etc/hostname自动初始化的主机名。

瞬态的（Tansient hostname）
“瞬态”主机名是在系统运行时临时分配的主机名，例如，通过DHCP或mDNS服务器分配。

灵活的（Pretty hostname）
“灵活”主机名也有人叫做“别名”主机名。
“灵活”主机名则允许使用自由形式（包括特殊/空白字符）的主机名，以展示给终端用户（如xh01@f5）。
“静态”主机名和“瞬态”主机名都遵从作为互联网域名同样的字符限制规则。

在CentOS 7中，有个叫hostnamectl的命令行工具，它允许你查看或修改与主机名相关的配置。

<span style="color:red">一旦修改了静态主机名，/etc/hostname 将被自动更新。然而，/etc/hosts 不会更新以保存所做的修改，所以你每次在修改主机名后一定要手动更新/etc/hosts，之后再重启CentOS 7。否则系统再启动时会很慢。</span>

```
//永久性的修改主机名称，重启后能保持修改后的。
hostnamectl set-hostname xxx    

//删除hostname
hostnamectl set-hostname ""
hostnamectl set-hostname "" --static
hostnamectl set-hostname "" --pretty
```
## 更改yum源与更新系统

  备份
```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
 下载yum源配置文件，放入/etc/yum.repos.d/
 ```
 wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo
 ```
 运行yum makecache生成缓存
 ```
 yum makecache
 ```
 更新系统
 ```
 yum -y update
 ```
## dockerDNS
> docker 无法访问DNS服务
### 宿主机防火墙开启伪装IP功能
```
firewall-cmd --zone=public --add-masquerade --permanent
firewall-cmd --reload
systemctl restart firewalld
systemctl restart docker
```
### trusted zone
```
firewall-cmd --permanent --zone=trusted --add-interface=docker0
firewall-cmd --reload
```

