---
title: 安装Docker
---
## Docker安装（centos）
### 1.删除已安装的Docker

 ```bash
     sudo yum remove docker \
                      docker-client \
                      docker-client-latest \
                      docker-common \
                      docker-latest \
                      docker-latest-logrotate \
                      docker-logrotate \
                      docker-selinux \
                      docker-engine-selinux \
                      docker-engine
 ```

### 2.配置阿里云Docker Yum源

```bash
 sudo yum install -y yum-utils device-mapper-persistent-data lvm2
 sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 3.安装指定版本

```bash
     yum list docker-ce --showduplicates
```

- 3.1、安装较旧版本  
 ```bash
 //注意：需要指定完整的rpm包的包名，并且加上--setopt=obsoletes=0 参数：
     yum install -y --setopt=obsoletes=0 \
    docker-ce-17.03.2.ce-1.el7.centos.x86_64 \
    docker-ce-selinux-17.03.2.ce-1.el7.centos.noarch
 ```
- 3.2、安装Docker最新版本

```bash
sudo yum install docker-ce
centos8 遇到containerd.io版本问题 http://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/stable/Packages/ 手动下载安装
```
### 4.启用阿里云Docker镜像加速
https://cr.console.aliyun.com 自己申请账号，下面是我自己的
```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://a0cmmvhl.mirror.aliyuncs.com"]
}
EOF
```
### 5.启动Docker服务
```bash
systemctl enable docker
systemctl start docker
```
## docker安装(debian)
### 1.卸载旧版本
```
sudo apt-get remove docker docker-engine docker.io containerd runc
```
### 2.使用 Docker 仓库进行安装
```
#设置仓库
#更新 apt 包索引
sudo apt-get update
#安装 apt 依赖包，用于通过 HTTPS 来获取仓库
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
#添加 Docker 的官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
# 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥
sudo apt-key fingerprint 0EBFCD88
#使用以下指令设置稳定版仓库
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
  $(lsb_release -cs) \
  stable"
```
### 3.安装 Docker Engine-Community
```
#更新 apt 包索引
sudo apt-get update
#安装最新版本的 Docker Engine-Community 和 containerd ，或者转到下一步安装特定版本：
sudo apt-get install docker-ce docker-ce-cli containerd.io
#要安装特定版本的 Docker Engine-Community，请在仓库中列出可用版本，然后选择一种安装。列出您的仓库中可用的版本：
apt-cache madison docker-ce
```



## 一键脚本安装(通用)

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

或者使用`Daocloud`的

```bash
curl -sSL https://get.daocloud.io/docker | sh
```



## Docker 用户组设置

### 1.创建docker用户组（正常来说docker安装后会自动有docker用户组）
```bash
sudo groupadd docker
```

### 2.两步选一步
- 2.1将当前用户添加进组
```bash
sudo gpasswd -a ${USER} docker
```
- 2.2添加指定用户进组
```bash
sudo usermod  -aG docker ${用户名}
```
### 3.重启docker
```bash
sudo systemctl restart docker
```

## Docker-compose安装
### 源码安装 <sup><span style="color:#F00;font-size:4">*</span></sup>
```bash
#临时写tag为系统变量 （实测centos8不支持$()，仅支持``）
export tag=`wget -qO- -t1 -T2 "https://api.github.com/repos/docker/compose/releases/latest" | grep "tag_name" | head -n 1 | awk -F ":" '{print $2}' | sed 's/\"//g;s/,//g;s/ //g'`

curl -L https://github.com/docker/compose/releases/download/${tag}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

#验证
docker-compose --version
```

### pip安装
```bash
###安装python-pip
yum -y install epel-release
yum -y install python-pip   #若后续安装docker-compose失败，使用 yum -y install python3-pip
pip install --upgrade pip
```

- 安装docker-compose
```bash
#若安装的是python-pip3,则此处命令为pip3 install docker-compose
pip install docker-compose 

#验证
docker-compose version
```

