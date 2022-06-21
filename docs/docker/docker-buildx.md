---
title: docker多架构构建镜像
head:
  - - meta
    - name: keywords
      content: docker多架构构建镜像
---
## 开启docker buildx
在/root/.docker目录下有一个config.json文件，加上
```
"experimental" : "enabled"
```
重启docker
### 验证是否开启
```
🐳 → docker buildx version
github.com/docker/buildx v0.3.1-tp-docker 6db68d029599c6710a32aa7adcba8e5a344795a7
```
如果在某些系统上设置环境变量 DOCKER_CLI_EXPERIMENTAL 不生效（比如 Arch Linux）,你可以选择从源代码编译：
```
🐳 → export DOCKER_BUILDKIT=1
🐳 → docker build --platform=local -o . git://github.com/docker/buildx
🐳 → mkdir -p ~/.docker/cli-plugins && mv buildx ~/.docker/cli-plugins/docker-buildx
```

## 启用 binfmt_misc
> 如果你使用的是 Docker 桌面版（MacOS 和 Windows），默认已经启用了 binfmt_misc，可以跳过这一步。
如果你使用的是 Linux，需要手动启用 binfmt_misc。大多数 Linux 发行版都很容易启用，不过还有一个更容易的办法，直接运行一个特权容器，容器里面写好了设置脚本：
```
🐳 → docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d    
```
> 建议将 Linux 内核版本升级到 4.x 以上，特别是 CentOS 用户，你可能会遇到错误。
验证是 binfmt_misc 否开启：
```
🐳 → ls -al /proc/sys/fs/binfmt_misc/
总用量 0
总用量 0
-rw-r--r-- 1 root root 0 11月 18 00:12 qemu-aarch64
-rw-r--r-- 1 root root 0 11月 18 00:12 qemu-arm
-rw-r--r-- 1 root root 0 11月 18 00:12 qemu-ppc64le
-rw-r--r-- 1 root root 0 11月 18 00:12 qemu-s390x
--w------- 1 root root 0 11月 18 00:09 register
-rw-r--r-- 1 root root 0 11月 18 00:12 status
```
验证是否启用了相应的处理器：
```
🐳 → cat /proc/sys/fs/binfmt_misc/qemu-aarch64
enabled
interpreter /usr/bin/qemu-aarch64
flags: OCF
offset 0
magic 7f454c460201010000000000000000000200b7
mask ffffffffffffff00fffffffffffffffffeffff
```
## 从默认的构建器切换到多平台构建器

创建一个新的构建器：
```
🐳 → docker buildx create --use --name mybuilder
```
启动构建器：
```
🐳 → docker buildx inspect mybuilder --bootstrap

[+] Building 5.0s (1/1) FINISHED
 => [internal] booting buildkit                                                                                                                          5.0s
 => => pulling image moby/buildkit:buildx-stable-1                                                                                                       4.4s
 => => creating container buildx_buildkit_mybuilder0                                                                                                     0.6s
Name:   mybuilder
Driver: docker-container

Nodes:
Name:      mybuilder0
Endpoint:  unix:///var/run/docker.sock
Status:    running
Platforms: linux/amd64, linux/arm64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
```
查看当前使用的构建器及构建器支持的 CPU 架构，可以看到支持很多 CPU 架构：
```
🐳 → docker buildx ls

NAME/NODE    DRIVER/ENDPOINT             STATUS  PLATFORMS
mybuilder *  docker-container
  mybuilder0 unix:///var/run/docker.sock running linux/amd64, linux/arm64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
default      docker
  default    default                     running linux/amd64, linux/386
```
## 构建多平台镜像
```
🐳 → docker buildx build -t maodou38/downloader --platform=linux/arm,linux/arm64,linux/amd64 . --push
```
> 需要提前通过 docker login 命令登录认证 Docker Hub。
如果想将构建好的镜像保存在本地，可以将 type 指定为 docker，但必须分别为不同的 CPU 架构构建不同的镜像，不能合并成一个镜像，即：
```
🐳 → docker buildx build -t maodou38/downloader --platform=linux/arm -o type=docker .
🐳 → docker buildx build -t maodou38/downloader --platform=linux/arm64 -o type=docker .
🐳 → docker buildx build -t maodou38/downloader --platform=linux/amd64 -o type=docker .
```
## 测试多平台镜像
首先列出每个镜像的 digests：
```
🐳 → docker buildx imagetools inspect maodou38/downloader

Name:      docker.io/maodou38/downloader:latest
MediaType: application/vnd.docker.distribution.manifest.list.v2+json
Digest:    sha256:ec55f5ece9a12db0c6c367acda8fd1214f50ee502902f97b72f7bff268ebc35a

Manifests:
  Name:      docker.io/maodou38/downloader:latest@sha256:38e083870044cfde7f23a2eec91e307ec645282e76fd0356a29b32122b11c639
  MediaType: application/vnd.docker.distribution.manifest.v2+json
  Platform:  linux/arm/v7

  Name:      docker.io/maodou38/downloader:latest@sha256:de273a2a3ce92a5dc1e6f2d796bb85a81fe1a61f82c4caaf08efed9cf05af66d
  MediaType: application/vnd.docker.distribution.manifest.v2+json
  Platform:  linux/arm64

  Name:      docker.io/maodou38/downloader:latest@sha256:8b735708d7d30e9cd6eb993449b1047b7229e53fbcebe940217cb36194e9e3a2
  MediaType: application/vnd.docker.distribution.manifest.v2+json
  Platform:  linux/amd64
```
运行每一个镜像并观察输出结果：
```
🐳 → docker run --rm docker.io/maodou38/downloader:latest@sha256:38e083870044cfde7f23a2eec91e307ec645282e76fd0356a29b32122b11c639
Hello, arm!

🐳 → docker run --rm docker.io/maodou38/downloader:latest@sha256:de273a2a3ce92a5dc1e6f2d796bb85a81fe1a61f82c4caaf08efed9cf05af66d
Hello, arm64!

🐳 → docker run --rm docker.io/maodou38/downloader:latest@sha256:8b735708d7d30e9cd6eb993449b1047b7229e53fbcebe940217cb36194e9e3a2
Hello, amd64!
```