import{_ as e,o as i,c as d,a as n}from"./app.7c042103.js";const a={},l=n(`<h2 id="\u5F00\u542Fdocker-buildx" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542Fdocker-buildx" aria-hidden="true">#</a> \u5F00\u542Fdocker buildx</h2><p>\u5728/root/.docker\u76EE\u5F55\u4E0B\u6709\u4E00\u4E2Aconfig.json\u6587\u4EF6\uFF0C\u52A0\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;experimental&quot; : &quot;enabled&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542Fdocker</p><h3 id="\u9A8C\u8BC1\u662F\u5426\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u662F\u5426\u5F00\u542F" aria-hidden="true">#</a> \u9A8C\u8BC1\u662F\u5426\u5F00\u542F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx version
github.com/docker/buildx v0.3.1-tp-docker 6db68d029599c6710a32aa7adcba8e5a344795a7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5728\u67D0\u4E9B\u7CFB\u7EDF\u4E0A\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF DOCKER_CLI_EXPERIMENTAL \u4E0D\u751F\u6548\uFF08\u6BD4\u5982 Arch Linux\uFF09,\u4F60\u53EF\u4EE5\u9009\u62E9\u4ECE\u6E90\u4EE3\u7801\u7F16\u8BD1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 export DOCKER_BUILDKIT=1
\u{1F433} \u2192 docker build --platform=local -o . git://github.com/docker/buildx
\u{1F433} \u2192 mkdir -p ~/.docker/cli-plugins &amp;&amp; mv buildx ~/.docker/cli-plugins/docker-buildx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u7528-binfmt-misc" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528-binfmt-misc" aria-hidden="true">#</a> \u542F\u7528 binfmt_misc</h2><blockquote><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Docker \u684C\u9762\u7248\uFF08MacOS \u548C Windows\uFF09\uFF0C\u9ED8\u8BA4\u5DF2\u7ECF\u542F\u7528\u4E86 binfmt_misc\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E00\u6B65\u3002 \u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Linux\uFF0C\u9700\u8981\u624B\u52A8\u542F\u7528 binfmt_misc\u3002\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u90FD\u5F88\u5BB9\u6613\u542F\u7528\uFF0C\u4E0D\u8FC7\u8FD8\u6709\u4E00\u4E2A\u66F4\u5BB9\u6613\u7684\u529E\u6CD5\uFF0C\u76F4\u63A5\u8FD0\u884C\u4E00\u4E2A\u7279\u6743\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u5199\u597D\u4E86\u8BBE\u7F6E\u811A\u672C\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5EFA\u8BAE\u5C06 Linux \u5185\u6838\u7248\u672C\u5347\u7EA7\u5230 4.x \u4EE5\u4E0A\uFF0C\u7279\u522B\u662F CentOS \u7528\u6237\uFF0C\u4F60\u53EF\u80FD\u4F1A\u9047\u5230\u9519\u8BEF\u3002 \u9A8C\u8BC1\u662F binfmt_misc \u5426\u5F00\u542F\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 ls -al /proc/sys/fs/binfmt_misc/
\u603B\u7528\u91CF 0
\u603B\u7528\u91CF 0
-rw-r--r-- 1 root root 0 11\u6708 18 00:12 qemu-aarch64
-rw-r--r-- 1 root root 0 11\u6708 18 00:12 qemu-arm
-rw-r--r-- 1 root root 0 11\u6708 18 00:12 qemu-ppc64le
-rw-r--r-- 1 root root 0 11\u6708 18 00:12 qemu-s390x
--w------- 1 root root 0 11\u6708 18 00:09 register
-rw-r--r-- 1 root root 0 11\u6708 18 00:12 status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1\u662F\u5426\u542F\u7528\u4E86\u76F8\u5E94\u7684\u5904\u7406\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 cat /proc/sys/fs/binfmt_misc/qemu-aarch64
enabled
interpreter /usr/bin/qemu-aarch64
flags: OCF
offset 0
magic 7f454c460201010000000000000000000200b7
mask ffffffffffffff00fffffffffffffffffeffff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ECE\u9ED8\u8BA4\u7684\u6784\u5EFA\u5668\u5207\u6362\u5230\u591A\u5E73\u53F0\u6784\u5EFA\u5668" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u9ED8\u8BA4\u7684\u6784\u5EFA\u5668\u5207\u6362\u5230\u591A\u5E73\u53F0\u6784\u5EFA\u5668" aria-hidden="true">#</a> \u4ECE\u9ED8\u8BA4\u7684\u6784\u5EFA\u5668\u5207\u6362\u5230\u591A\u5E73\u53F0\u6784\u5EFA\u5668</h2><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6784\u5EFA\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx create --use --name mybuilder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u6784\u5EFA\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx inspect mybuilder --bootstrap

[+] Building 5.0s (1/1) FINISHED
 =&gt; [internal] booting buildkit                                                                                                                          5.0s
 =&gt; =&gt; pulling image moby/buildkit:buildx-stable-1                                                                                                       4.4s
 =&gt; =&gt; creating container buildx_buildkit_mybuilder0                                                                                                     0.6s
Name:   mybuilder
Driver: docker-container

Nodes:
Name:      mybuilder0
Endpoint:  unix:///var/run/docker.sock
Status:    running
Platforms: linux/amd64, linux/arm64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6784\u5EFA\u5668\u53CA\u6784\u5EFA\u5668\u652F\u6301\u7684 CPU \u67B6\u6784\uFF0C\u53EF\u4EE5\u770B\u5230\u652F\u6301\u5F88\u591A CPU \u67B6\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx ls

NAME/NODE    DRIVER/ENDPOINT             STATUS  PLATFORMS
mybuilder *  docker-container
  mybuilder0 unix:///var/run/docker.sock running linux/amd64, linux/arm64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
default      docker
  default    default                     running linux/amd64, linux/386
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u5EFA\u591A\u5E73\u53F0\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u591A\u5E73\u53F0\u955C\u50CF" aria-hidden="true">#</a> \u6784\u5EFA\u591A\u5E73\u53F0\u955C\u50CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx build -t maodou38/downloader --platform=linux/arm,linux/arm64,linux/amd64 . --push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u9700\u8981\u63D0\u524D\u901A\u8FC7 docker login \u547D\u4EE4\u767B\u5F55\u8BA4\u8BC1 Docker Hub\u3002 \u5982\u679C\u60F3\u5C06\u6784\u5EFA\u597D\u7684\u955C\u50CF\u4FDD\u5B58\u5728\u672C\u5730\uFF0C\u53EF\u4EE5\u5C06 type \u6307\u5B9A\u4E3A docker\uFF0C\u4F46\u5FC5\u987B\u5206\u522B\u4E3A\u4E0D\u540C\u7684 CPU \u67B6\u6784\u6784\u5EFA\u4E0D\u540C\u7684\u955C\u50CF\uFF0C\u4E0D\u80FD\u5408\u5E76\u6210\u4E00\u4E2A\u955C\u50CF\uFF0C\u5373\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx build -t maodou38/downloader --platform=linux/arm -o type=docker .
\u{1F433} \u2192 docker buildx build -t maodou38/downloader --platform=linux/arm64 -o type=docker .
\u{1F433} \u2192 docker buildx build -t maodou38/downloader --platform=linux/amd64 -o type=docker .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u591A\u5E73\u53F0\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u591A\u5E73\u53F0\u955C\u50CF" aria-hidden="true">#</a> \u6D4B\u8BD5\u591A\u5E73\u53F0\u955C\u50CF</h2><p>\u9996\u5148\u5217\u51FA\u6BCF\u4E2A\u955C\u50CF\u7684 digests\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker buildx imagetools inspect maodou38/downloader

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u6BCF\u4E00\u4E2A\u955C\u50CF\u5E76\u89C2\u5BDF\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F433} \u2192 docker run --rm docker.io/maodou38/downloader:latest@sha256:38e083870044cfde7f23a2eec91e307ec645282e76fd0356a29b32122b11c639
Hello, arm!

\u{1F433} \u2192 docker run --rm docker.io/maodou38/downloader:latest@sha256:de273a2a3ce92a5dc1e6f2d796bb85a81fe1a61f82c4caaf08efed9cf05af66d
Hello, arm64!

\u{1F433} \u2192 docker run --rm docker.io/maodou38/downloader:latest@sha256:8b735708d7d30e9cd6eb993449b1047b7229e53fbcebe940217cb36194e9e3a2
Hello, amd64!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),r=[l];function s(c,u){return i(),d("div",null,r)}var t=e(a,[["render",s],["__file","docker-buildx.html.vue"]]);export{t as default};
