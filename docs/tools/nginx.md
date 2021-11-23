---
title: Nginx
---
## Nginx作为CDN使用
proxy_store
## Nginx作为缓存使用
### proxy_cache_path
> `语法：proxy_cache_path path [levels=levels] [use_temp_path=on|off] keys_zone=name:size [inactive=time] [max_size=size] [manager_files=number] [manager_sleep=time] [manager_threshold=time] [loader_files=number] [loader_sleep=time] [loader_threshold=time] [purger=on|off] [purger_files=number] [purger_sleep=time] [purger_threshold=time]。`

只能用在http中。
```nginx
proxy_cache_path /root/cache levels=1:2 keys_zone=zzm_cache:10m max_size=1g inactive=60m use_temp_path=off;
```

* 缓存管理器会定时检查缓存的状态。如果缓存的内容大小达到了指令proxy_cache_path的参数max-size指定的值,则缓存管理器会根据LRU算法删除缓存的内容。 在检查的间隔时间内，总的缓存内容大小可以临时超过设定的大小阈值。
* 缓存加载器只在Nginx启动的时候执行一次，将缓存内容的原信息加载到指定的共享内存区内。一次将所有的缓存内容加载到内存中会耗费大量的资源，并且会影响Nginx启动后几分钟内的性能。为了避免这种问题可以通过在指令proxy_cache_path后添加下面的参数：
    - loader_threshold – 缓存加载器加载缓存内容的最大执行时间（单位是毫秒，默认值是200毫秒）
    - loader_files – 在缓存加载器加载缓存内容的执行时间间隔内，最多能加载多少个缓存条目，默认100。
    - loader_sleeps – 每两次执行的时间间隔, 单位是毫秒 (默认50毫秒)
    - purger=on 是否启动purge进程
```
proxy_cache_path /data/nginx/cache keys_zone=one:10m loader_threshold=300 loader_files=200;
```
* /root/cache：定义 proxy_cache 生成文件的根路径

* levels：默认所有缓存文件都放在上面指定的根路径中，从而可能影响缓存的性能。推荐指定为 2 级目录来存储缓存文件

* key_zone：这个的值是字符串，可以随意写。用于在共享内存中定义一块存储区域来存放缓存的 key 和 metadata（类似于使用次数），这样 nginx 可以快速判断一个 request 是否命中缓存。1m 可以存储 8000 个key,10m可以存在80000个key

* max_size：最大 cache 空间。如果不指定，会使用掉所有 disk space。当达到 disk 上限后，会删除最少使用的 cache

* inactive：内存中缓存的过期检查周期。示例配置中如果 1h 内都没有被访问，则不论状态是否为 expired，都会清除缓存。需要注意的是，inactive 和 expired 配置项的含义是不同的，expired 只是判断过期时间，不会删除缓存；而 inactive 是直接删除过期缓存

* use_temp_path：如果为 off，则 nginx 会将缓存文件直接写入指定的 cache 文件中，而不使用 temp_path 指定的临时存储路径
### proxy_cache

proxy_cache zone | off。默认是关闭的，可以用在http,server,location中。

```nginx
location / {
        proxy_cache zzm_cache;
        proxy_pass http://zzm;
        proxy_cache_valid 200 304 12h;
        proxy_cache_valid any 10m;
        proxy_cache_key $host$uri$is_args$args;
        add_header Nginx-Cache "$upstream_cache_status";
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
    }
```
* proxy_cache：对应 http 段的 key_zone，是你定义的 proxy_cache 所使用的共享空间的名称，我在1.1中定义的是zzm_cache，所以在这里也写的是zzm_cache。

* proxy_cache_key 控制缓存KEY的生成规则

```
proxy_cache_key "$host$request_uri$cookie_user";
```

* proxy_cache_min_uses 指定一个请求的响应被缓存前的最小访问次数

```
proxy_cache_min_uses 5;
```

* proxy_cache_methods 指定只有哪些HTTP请求类型才能被缓存

```
proxy_cache_methods GET HEAD POST;    
```

* proxy_cache_valid：对指定的 HTTP 状态进行缓存，并指定缓存时间。可以自定义写入多个配置项。这里我们对200和304的返回码缓存12小时。其余的缓存10分钟

```
proxy_cache_valid 200 302 10m;
proxy_cache_valid 404      1m;   
proxy_cache_valid any 5m;
```

* proxy_cache_bypass 指定Nginx使用缓存的条件

```
#该指令的每个参数都指定了一个条件，只有请求满足其中的任何一个条件，并且参数的值不是0，则Nginx会把请求转发到后端的服务而不会使用缓存。
proxy_cache_bypass $cookie_nocache $arg_nocache$arg_comment;   
```

* proxy_no_cache 指定哪些请求不需要Nginx来缓存

```
proxy_no_cache $http_pragma $http_authorization;
```

* is_args:如果$args设置，值为"?"，否则为""

* proxy_next_upstream 当请求服务器发生错误或超时时，会尝试到下一台服务器

### 缓存扩展
* rm 缓存目录所有文件

* 使用ngx_cache_purge

```nginx
 location ~ /purge(/.*) {
                allow all; #127.0.0.1; 只允许本机访问
                deny all;  #禁止其他所有ip
                proxy_cache_purge cache_one $host$1$is_args$args;  #清理缓存
                access_log  logs/cache.log cache; # 增加清理输出日志
        }
```

```nginx
 http {
        ...
        proxy_cache_path /data/nginx/cache levels=1:2 keys_zone=mycache:10m purger=on;
    
        map $request_method $purge_method {
            PURGE 1;
            default 0;
        }
    
        server {
            listen      80;
            server_name www.example.com;
    
                location / {
                    proxy_pass        https://localhost:8002;
                    proxy_cache       mycache;
                    proxy_cache_purge $purge_method;
                }
        }
    
        geo $purge_allowed {
           default         0;
           10.0.0.1        1;
           192.168.0.0/24  1;
        }
        map $request_method $purge_method {
               PURGE   $purge_allowed;
               default 0;
        }
    }
```

* 部分页面不缓存
  ![](../.vuepress/public/tools/nginx/1590930556225.jpg)
### 缓存命中分析
  * 通过设置response的头信息Nginx-Cache
  add_header Nging-Cache "$upstream_cache_status";
  ![](../.vuepress/public/tools/nginx/1590930608819.jpg)
* 通过设置log_format,打印日志分析
  ![](../.vuepress/public/tools/nginx/1590930635874.jpg)
### 示例

```nginx
user  www;
worker_processes  8;
events {
    worker_connections  65535;
}

http {
    include      mime.types;
    default_type  application/octet-stream;
    charset utf-8;

    log_format  main  '$http_x_forwarded_for $remote_addr $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_cookie" $host $request_time';

    sendfile      on;
    tcp_nopush    on;
    tcp_nodelay    on;
    keepalive_timeout  65;

    #要想开启nginx的缓存功能，需要添加此处的两行内容！
    #设置Web缓存区名称为cache_one,内存缓存空间大小为500M,缓存的数据超过1天没有被访问就自动清除;访问的缓存数据,硬盘缓存空间大小为30G
　proxy_cache_path /usr/local/nginx/proxy_cache_path levels=1:2 keys_zone=cache_one:500m inactive=1d max_size=30g;


    #创建缓存的时候可能生成一些临时文件存放的位置
　proxy_temp_path /usr/local/nginx/proxy_temp_path;


    fastcgi_connect_timeout 3000;
    fastcgi_send_timeout 3000;
    fastcgi_read_timeout 3000;
    fastcgi_buffer_size 256k;
    fastcgi_buffers 8 256k;
    fastcgi_busy_buffers_size 256k;
    fastcgi_temp_file_write_size 256k;
    fastcgi_intercept_errors on;

    client_header_timeout 600s;
    client_body_timeout 600s;

    client_max_body_size 100m;             
    client_body_buffer_size 256k;           

    gzip  on;
    gzip_min_length  1k;
    gzip_buffers    4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 9;
    gzip_types      text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php;
    gzip_vary on;

    include vhosts/*.conf;
}
```