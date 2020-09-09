---
title: docker-compose指令
sidebarDepth: 2
---
模板文件是使用 Compose 的核心，涉及到的指令关键字也比较多。但大家不用担心，这里面大部分指令跟 docker run 相关参数的含义都是类似的。

默认的模板文件名称为 docker-compose.yml，格式为 YAML 格式。
```
version: "3"

services:
  webapp:
    image: examples/web
    ports:
      - "80:80"
    volumes:
      - "/data"
```
注意每个服务都必须通过 image 指令指定镜像或 build 指令（需要 Dockerfile）等来自动构建生成镜像。
如果使用 build 指令，在 Dockerfile 中设置的选项(例如：CMD, EXPOSE, VOLUME, ENV 等) 将会自动被获取，无需在 docker-compose.yml 中再次设置。

下面分别介绍各个指令的用法。

## build
指定 Dockerfile 所在文件夹的路径（可以是绝对路径，或者相对 docker-compose.yml 文件的路径）。 Compose 将会利用它自动构建这个镜像，然后使用这个镜像。
```
version: '3'
services:

  webapp:
    build: ./dir
```
你也可以使用 context 指令指定 Dockerfile 所在文件夹的路径。
使用 dockerfile 指令指定 Dockerfile 文件名。
使用 arg 指令指定构建镜像时的变量。
```
version: '3'
services:

  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
```
使用 cache_from 指定构建镜像的缓存
```
build:
  context: .
  cache_from:
    - alpine:latest
    - corp/web_app:3.14
```  
  

## cap_add, cap_drop
指定容器的内核能力（capacity）分配。

例如，让容器拥有所有能力可以指定为：
```
cap_add:
  - ALL
```
去掉 NET_ADMIN 能力可以指定为：
```
cap_drop:
  - NET_ADMIN
```


## command
覆盖容器启动后默认执行的命令。
```
command: echo "hello world"
```


## configs
仅用于 Swarm mode


## cgroup_parent
指定父 cgroup 组，意味着将继承该组的资源限制。

例如，创建了一个 cgroup 组名称为 cgroups_1。
```
cgroup_parent: cgroups_1
```


## container_name
指定容器名称。默认将会使用 项目名称_服务名称_序号 这样的格式。
```
container_name: docker-web-container
```
注意: 指定容器名称后，该服务将无法进行扩展（scale），因为 Docker 不允许多个容器具有相同的名称。


## deploy
仅用于 Swarm mode


## devices
指定设备映射关系。
```
devices:
  - "/dev/ttyUSB1:/dev/ttyUSB0"
```


## depends_on
解决容器的依赖、启动先后的问题。以下例子中会先启动 redis db 再启动 web
```
version: '3'

services:
  web:
    build: .
    depends_on:
      - db
      - redis

  redis:
    image: redis

  db:
    image: postgres
```
注意：web 服务不会等待 redis db 「完全启动」之后才启动。


## dns
自定义 DNS 服务器。可以是一个值，也可以是一个列表。
```
dns: 8.8.8.8

dns:
  - 8.8.8.8
  - 114.114.114.114
```


## dns_search
配置 DNS 搜索域。可以是一个值，也可以是一个列表。
```
dns_search: example.com

dns_search:
  - domain1.example.com
  - domain2.example.com
```


## tmpfs
挂载一个 tmpfs 文件系统到容器。
```
tmpfs: /run
tmpfs:
  - /run
  - /tmp
```


## env_file
从文件中获取环境变量，可以为单独的文件路径或列表。

如果通过 docker-compose -f FILE 方式来指定 Compose 模板文件，则 env_file 中变量的路径会基于模板文件路径。

如果有变量名称与 environment 指令冲突，则按照惯例，以后者为准。
```
env_file: .env

env_file:
  - ./common.env
  - ./apps/web.env
  - /opt/secrets.env
```
环境变量文件中每一行必须符合格式，支持 # 开头的注释行。

```
# common.env: Set development environment
PROG_ENV=development
```


## environment
设置环境变量。你可以使用数组或字典两种格式。

只给定名称的变量会自动获取运行 Compose 主机上对应变量的值，可以用来防止泄露不必要的数据。
```
environment:
  RACK_ENV: development
  SESSION_SECRET:

environment:
  - RACK_ENV=development
  - SESSION_SECRET
```
如果变量名称或者值中用到 true|false，yes|no 等表达 布尔 含义的词汇，最好放到引号里，避免 YAML 自动解析某些内容为对应的布尔语义。这些特定词汇，包括
```
y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF
```


## expose
暴露端口，但不映射到宿主机，只被连接的服务访问。
仅可以指定内部端口为参数
```
expose:
 - "3000"
 - "8000"
```


## external_links
~~注意：不建议使用该指令。~~
链接到 docker-compose.yml 外部的容器，甚至并非 Compose 管理的外部容器。
```
external_links:
 - redis_1
 - project_db_1:mysql
 - project_db_1:postgresql
 ```  

## extra_hosts
类似 Docker 中的 --add-host 参数，指定额外的 host 名称映射信息。
```
extra_hosts:
 - "googledns:8.8.8.8"
 - "dockerhub:52.1.157.61"
```
会在启动后的服务容器中 /etc/hosts 文件中添加如下两条条目。
```
8.8.8.8 googledns
52.1.157.61 dockerhub
```


## healthcheck
通过命令检查容器是否健康运行。
```
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost"]
  interval: 1m30s
  timeout: 10s
  retries: 3
```


## image
指定为镜像名称或镜像 ID。如果镜像在本地不存在，Compose 将会尝试拉取这个镜像。
```
image: ubuntu
image: orchardup/postgresql
image: a4bc65fd
```


## labels
为容器添加 Docker 元数据（metadata）信息。例如可以为容器添加辅助说明信息。
```
labels:
  com.startupteam.description: "webapp for a startup team"
  com.startupteam.department: "devops department"
  com.startupteam.release: "rc3 for v1.0"
```


## links
~~注意：不推荐使用该指令。~~


## logging
配置日志选项。
```
logging:
  driver: syslog
  options:
    syslog-address: "tcp://192.168.0.42:123"
```
目前支持三种日志驱动类型。
```
driver: "json-file"
driver: "syslog"
driver: "none"
```
options 配置日志驱动的相关参数。
```
options:
  max-size: "200k"
  max-file: "10"
  ```


## network_mode
设置网络模式。使用和 docker run 的 --network 参数一样的值。
```
network_mode: "bridge"
network_mode: "host"
network_mode: "none"
network_mode: "service:[service name]"
network_mode: "container:[container name/id]"
```


## networks
配置容器连接的网络。
```
version: "3"
services:

  some-service:
    networks:
     - some-network
     - other-network

networks:
  some-network:
  other-network:
  ```


## pid
跟主机系统共享进程命名空间。打开该选项的容器之间，以及容器和宿主机系统之间可以通过进程 ID 来相互访问和操作。
```
pid: "host"
```


## ports
暴露端口信息。
使用宿主端口：容器端口 (HOST:CONTAINER) 格式，或者仅仅指定容器的端口（宿主将会随机选择端口）都可以。
```
ports:
 - "3000"
 - "8000:8000"
 - "49100:22"
 - "127.0.0.1:8001:8001"
```
注意：当使用 HOST:CONTAINER 格式来映射端口时，如果你使用的容器端口小于 60 并且没放到引号里，可能会得到错误结果，因为 YAML 会自动解析 xx:yy 这种数字格式为 60 进制。为避免出现这种问题，建议数字串都采用引号包括起来的字符串格式。


## secrets
存储敏感数据，例如 mysql 服务密码。
 ```           
version: "3.1"
services:

mysql:
  image: mysql
  environment:
    MYSQL_ROOT_PASSWORD_FILE: /run/secrets/db_root_password
  secrets:
    - db_root_password
    - my_other_secret

secrets:
  my_secret:
    file: ./my_secret.txt
  my_other_secret:
    external: true
```


## security_opt
指定容器模板标签（label）机制的默认属性（用户、角色、类型、级别等）。例如配置标签的用户名和角色名。
```
security_opt:
    - label:user:USER
    - label:role:ROLE
```


## stop_signal
设置另一个信号来停止容器。在默认情况下使用的是 SIGTERM 停止容器。
```
stop_signal: SIGUSR1
```


## sysctls
配置容器内核参数。
```
sysctls:
  net.core.somaxconn: 1024
  net.ipv4.tcp_syncookies: 0

sysctls:
  - net.core.somaxconn=1024
  - net.ipv4.tcp_syncookies=0
  ```


## ulimits
指定容器的 ulimits 限制值。

例如，指定最大进程数为 65535，指定文件句柄数为 20000（软限制，应用可以随时修改，不能超过硬限制） 和 40000（系统硬限制，只能 root 用户提高）。
```
  ulimits:
    nproc: 65535
    nofile:
      soft: 20000
      hard: 40000
```


## volumes
数据卷所挂载路径设置。可以设置宿主机路径 （HOST:CONTAINER） 或加上访问模式 （HOST:CONTAINER:ro）。
该指令中路径支持相对路径。
```
volumes:
 - /var/lib/mysql
 - cache/:/tmp/cache
 - ~/configs:/etc/configs/:ro
```


## 其它指令
此外，还有包括 domainname, entrypoint, hostname, ipc, mac_address, privileged, read_only, shm_size, restart, stdin_open, tty, user, working_dir 等指令，基本跟 docker run 中对应参数的功能一致。

指定服务容器启动后执行的入口文件。
```
entrypoint: /code/entrypoint.sh
```
指定容器中运行应用的用户名。
```
user: nginx
```
指定容器中工作目录。
```
working_dir: /code
```
指定容器中搜索域名、主机名、mac 地址等。
```
domainname: your_website.com
hostname: test
mac_address: 08-00-27-00-0C-0A
```
允许容器中运行一些特权命令。
```
privileged: true
```
指定容器退出后的重启策略为始终重启。该命令对保持服务始终运行十分有效，在生产环境中推荐配置为 always 或者 unless-stopped。
```
restart: always
```
以只读模式挂载容器的 root 文件系统，意味着不能对容器内容进行修改。
```
read_only: true
```
打开标准输入，可以接受外部输入。
```
stdin_open: true
```
模拟一个伪终端。
```
tty: true
```


## 读取变量
Compose 模板文件支持动态读取主机的系统环境变量和当前目录下的 .env 文件中的变量。

例如，下面的 Compose 文件将从运行它的环境中读取变量 ${MONGO_VERSION} 的值，并写入执行的指令中。
```
version: "3"
services:

db:
  image: "mongo:${MONGO_VERSION}"
```
如果执行 MONGO_VERSION=3.2 docker-compose up 则会启动一个 mongo:3.2 镜像的容器；如果执行 MONGO_VERSION=2.8 docker-compose up 则会启动一个 mongo:2.8 镜像的容器。

若当前目录存在 .env 文件，执行 docker-compose 命令时将从该文件中读取变量。

在当前目录新建 .env 文件并写入以下内容。
```
# 支持 # 号注释
MONGO_VERSION=3.6
```
执行 docker-compose up 则会启动一个 mongo:3.6 镜像的容器。

## 常用软件docker-compose文件
### Tomcat
```
version: '3.1'
services:
  tomcat:
    restart: always
    image: tomcat
    container_name: tomcat
    ports:
      - 8080:8080
    volumes:
      - /usr/local/docker/tomcat/webapps/test:/usr/local/tomcat/webapps/test
    environment:
      TZ: Asia/Shanghai
```

### Mysql5
```
version: '3.1'
services:
  mysql:
    restart: always
    image: mysql:5.7.22
    container_name: mysql
    ports:
      - 3306:3306
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
      --max_allowed_packet=128M
      --sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO"
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```


### Mysql8
```
version: '3.1'
services:
  db:
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    ports:
      - 3306:3306
    volumes:
      - ./data:/var/lib/mysql

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

### Redis集群
```
version: '3.1'
services:
  master:
    image: redis
    container_name: redis-master
    ports:
      - 6379:6379

  slave1:
    image: redis
    container_name: redis-slave-1
    ports:
      - 6380:6379
    command: redis-server --slaveof redis-master 6379

  slave2:
    image: redis
    container_name: redis-slave-2
    ports:
      - 6381:6379
    command: redis-server --slaveof redis-master 6379
```

### Sentinel集群
```
version: '3.1'
services:
  sentinel1:
    image: redis
    container_name: redis-sentinel-1
    ports:
      - 26379:26379
    command: redis-sentinel /usr/local/etc/redis/sentinel.conf
    volumes:
      - ./sentinel1.conf:/usr/local/etc/redis/sentinel.conf

  sentinel2:
    image: redis
    container_name: redis-sentinel-2
    ports:
      - 26380:26379
    command: redis-sentinel /usr/local/etc/redis/sentinel.conf
    volumes:
      - ./sentinel2.conf:/usr/local/etc/redis/sentinel.conf

  sentinel3:
    image: redis
    container_name: redis-sentinel-3
    ports:
      - 26381:26379
    command: redis-sentinel /usr/local/etc/redis/sentinel.conf
    volumes:
      - ./sentinel3.conf:/usr/local/etc/redis/sentinel.conf
```  
修改 Sentinel 配置文件
```
port 26379
dir /tmp
# 自定义集群名，其中 127.0.0.1 为 redis-master 的 ip，6379 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
sentinel deny-scripts-reconfig yes
```  
### Jenkins
```
version: '3.1'
services:
  jenkins:
    restart: always
    image: jenkinsci/jenkins
    container_name: jenkins
    ports:
      # 发布端口
      - 8080:8080
      # 基于 JNLP 的 Jenkins 代理通过 TCP 端口 50000 与 Jenkins master 进行通信
      - 50000:50000
    environment:
      TZ: Asia/Shanghai
    volumes:
      - ./data:/var/jenkins_home
```
安装过程中会出现 Docker 数据卷 权限问题，用以下命令解决：
```
chown -R 1000 /usr/local/docker/jenkins/data
```