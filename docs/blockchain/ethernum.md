---
title: 以太坊
head:
  - - meta
    - name: keywords
      content: blockchain ETH
---

## 以太坊私链客户端|Go-Ethereum

### 介绍

> [以太坊](https://link.jianshu.com?t=https%3A%2F%2Fwww.ethereum.org%2F)是一个全新的开放的区块链平台，它允许任何人在平台中建立和使用通过区块链技术运行的去中心化应用。

[Go-Ethereum](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fethereum%2Fgo-ethereum)是Github上Ethereum官方提供的Go语言的实现，本文只介绍Go-Ethereum的安装和编译。

### 概览

- 使用包管理器进行安装
  - macOS下使用Homebrew
  - Ubuntu下使用PPAs
  - Windows下使用Chocolatey进行安装
- 下载独立的二进制安装包
- 使用Docker容器进行安装
- 从源码中编译安装

### 安装

#### 使用包管理器进行安装

##### macOS下使用Homebrew进行安装

首先确保你已经安装Homebrew并在终端、控制台或者命令行执行以下命令进行验证：

> brew info ethereum

如果以上命令有输出，那么执行以下命令来安装go-ethereum

> brew tap ethereum/ethereum
>  brew install ethereum

你可以使用`--devel`来安装开发分支

> brew install ethereum --devel

最后输入以下命令验证是否安装成功

> geth --help

##### Ubuntu下使用PPAs进行安装

使用Ubuntu PPA（个人软件包档案）来添加软件安装源，然后执行以下命令

> sudo apt-get install software-properties-common
>  sudo add-apt-repository -y ppa:ethereum/ethereum
>  sudo apt-get update
>  sudo apt-get install ethereum

##### Windows使用Chocolatey进行安装

- 首先下载安装[Chocolatey](https://link.jianshu.com?t=https%3A%2F%2Fchocolatey.org)
- 其次通过命令行执行以下操作

> choco install git
>  choco install golang
>  choco install mingw

- 设置Go语言环境变量
- 从Github拉取代码并配置[GOPATH](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fgolang%2Fgo%2Fwiki%2FGOPATH)

#### 3.2. 下载独立的二进制安装包

可以从[官方网站](https://link.jianshu.com?t=https%3A%2F%2Fwww.ethereum.org)或者[Github](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fethereum%2Fgo-ethereum)上下载二进制(这里是指已经编译完成的)安装包

#### 使用Docker容器进行安装

> 如果你喜好使用容器化的运行方式来安装的话，那么我们可以通过以下命令来拉取不同版本的源代码

- ethereum/client-go:latest 开发版本的Geth
- ethereum/client-go:stable 稳定版本的Geth
- ethereum/client-go:{version} 指定版本的Geth
- ethereum/client-go:release-{version} 指定稳定版本的Geth

这些镜像会默认自动导出以下端口可供容器和外部进行通信

- 8545 TCP, used by the HTTP based JSON RPC API
- 8546 TCP, used by the WebSocket based JSON RPC API
- 30303 TCP and UDP, used by the P2P protocol running the network
- 30304 UDP, used by the P2P protocol's new peer discovery overlay

> 注意：如果你在Docker容器中运行Ethereum客户端的话，你需要挂载一个数据卷作为客户端的数据目录(存放在容器内的/root/.ethereum),以便容器在重启或者生命周期期间被保留下来

#### 从源码中编译

##### 不使用Go语言的相关工具进行编译

在你本地配置Git和Golang之后执行以下命令

> brew install go
>  git clone [https://github.com/ethereum/go-ethereum.git](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fethereum%2Fgo-ethereum.git)
>  cd go-ethereum
>  make geth

等待make命令执行完成后可以在`go-ethereum/build/bin`中看到编译成功后的二进制包

### 私链搭建

#### 创建配置文件genesis.json （亦可以通过puppeth生成）

```json
{
  "config": {
    "chainId": <arbitrary positive integer>,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "berlinBlock": 0,
    "londonBlock": 0
  },
  "alloc": {},
  "coinbase": "0x0000000000000000000000000000000000000000",
  "difficulty": "0x20000",
  "extraData": "",
  "gasLimit": "0x2fefd8",
  "nonce": "0x0000000000000042",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp": "0x00"
}
```

- chainId 制定了独立的区块链网络的ID，不同网络的节点无法互相连接
- alloc：用来预设置账号以及账号的 ether 数量。因为私有链挖矿比较容易，所以我们不需要预设置账号。比如，{"0x880004bb64282fb01a3a2500ddf1f4bb5ad4b64a":{"balance":"100000000000000000000000000000"}}
- nonce：一个64位随机数，用于挖矿。
- mixhash：和 nonce 配合用于挖矿，由上一个区块的一部分生成的 hash。
- difficulty：设置当前区块的难度，如果难度过大，cpu挖矿就很难，所以这边设置的很小，不要跟自己过不去嘛。
- coinbase：默认挖矿的矿工账号。
- timestamp：设置创世块的时间戳。
- parentHash：上一个区块的hash值，因为是创世块，所以值是0。
- extraData：附加信息，随便填。
- gasLimit：设置对GAS的消耗总量限制，用来限制区块能包含的交易信息总和。因为我们是私有链，所以可以写的大一些，方便开发测试。

#### 初始化区块链
```bash
geth --datadir "./ethdev" init ethdev/genesis.json
```

#### 启动以太坊客户端

```bash
geth --identity "TestNode" --http --http.addr "192.168.189.134" --http.port "8545" --http.corsdomain "*" --datadir "ethdev/" --port "30303" --nodiscover dumpconfig>./geth.toml
```

以后可以通过`geth --config ./geth.toml运行` 具体参见[go-etheum全部配置](https://www.cnblogs.com/wanghui-garcia/p/10256520.html)

#### 连接以太坊客户端

```bash
geth attach http://192.168.189.134:8545
```



## 参考

- [https://github.com/golang/go/wiki](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fgolang%2Fgo%2Fwiki)
- [https://github.com/ethereum/go-ethereum/wiki](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fethereum%2Fgo-ethereum%2Fwiki)

