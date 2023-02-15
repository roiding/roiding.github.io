import{_ as e,o as i,c as n,a as s}from"./app.7c042103.js";const d={},a=s(`<p>\u6A21\u677F\u6587\u4EF6\u662F\u4F7F\u7528 Compose \u7684\u6838\u5FC3\uFF0C\u6D89\u53CA\u5230\u7684\u6307\u4EE4\u5173\u952E\u5B57\u4E5F\u6BD4\u8F83\u591A\u3002\u4F46\u5927\u5BB6\u4E0D\u7528\u62C5\u5FC3\uFF0C\u8FD9\u91CC\u9762\u5927\u90E8\u5206\u6307\u4EE4\u8DDF docker run \u76F8\u5173\u53C2\u6570\u7684\u542B\u4E49\u90FD\u662F\u7C7B\u4F3C\u7684\u3002</p><p>\u9ED8\u8BA4\u7684\u6A21\u677F\u6587\u4EF6\u540D\u79F0\u4E3A docker-compose.yml\uFF0C\u683C\u5F0F\u4E3A YAML \u683C\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3&quot;

services:
  webapp:
    image: examples/web
    ports:
      - &quot;80:80&quot;
    volumes:
      - &quot;/data&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u6BCF\u4E2A\u670D\u52A1\u90FD\u5FC5\u987B\u901A\u8FC7 image \u6307\u4EE4\u6307\u5B9A\u955C\u50CF\u6216 build \u6307\u4EE4\uFF08\u9700\u8981 Dockerfile\uFF09\u7B49\u6765\u81EA\u52A8\u6784\u5EFA\u751F\u6210\u955C\u50CF\u3002 \u5982\u679C\u4F7F\u7528 build \u6307\u4EE4\uFF0C\u5728 Dockerfile \u4E2D\u8BBE\u7F6E\u7684\u9009\u9879(\u4F8B\u5982\uFF1ACMD, EXPOSE, VOLUME, ENV \u7B49) \u5C06\u4F1A\u81EA\u52A8\u88AB\u83B7\u53D6\uFF0C\u65E0\u9700\u5728 docker-compose.yml \u4E2D\u518D\u6B21\u8BBE\u7F6E\u3002</p><p>\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u5404\u4E2A\u6307\u4EE4\u7684\u7528\u6CD5\u3002</p><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2><p>\u6307\u5B9A Dockerfile \u6240\u5728\u6587\u4EF6\u5939\u7684\u8DEF\u5F84\uFF08\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u6216\u8005\u76F8\u5BF9 docker-compose.yml \u6587\u4EF6\u7684\u8DEF\u5F84\uFF09\u3002 Compose \u5C06\u4F1A\u5229\u7528\u5B83\u81EA\u52A8\u6784\u5EFA\u8FD9\u4E2A\u955C\u50CF\uFF0C\u7136\u540E\u4F7F\u7528\u8FD9\u4E2A\u955C\u50CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3&#39;
services:

  webapp:
    build: ./dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 context \u6307\u4EE4\u6307\u5B9A Dockerfile \u6240\u5728\u6587\u4EF6\u5939\u7684\u8DEF\u5F84\u3002 \u4F7F\u7528 dockerfile \u6307\u4EE4\u6307\u5B9A Dockerfile \u6587\u4EF6\u540D\u3002 \u4F7F\u7528 arg \u6307\u4EE4\u6307\u5B9A\u6784\u5EFA\u955C\u50CF\u65F6\u7684\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3&#39;
services:

  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 cache_from \u6307\u5B9A\u6784\u5EFA\u955C\u50CF\u7684\u7F13\u5B58</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>build:
  context: .
  cache_from:
    - alpine:latest
    - corp/web_app:3.14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p>\u5F88\u5173\u952E\uFF0C\u7528\u4E8E\u8F6C\u53D1\u4FE1\u53F7\u91CF</p><h2 id="cap-add-cap-drop" tabindex="-1"><a class="header-anchor" href="#cap-add-cap-drop" aria-hidden="true">#</a> cap_add, cap_drop</h2><p>\u6307\u5B9A\u5BB9\u5668\u7684\u5185\u6838\u80FD\u529B\uFF08capacity\uFF09\u5206\u914D\u3002</p><p>\u4F8B\u5982\uFF0C\u8BA9\u5BB9\u5668\u62E5\u6709\u6240\u6709\u80FD\u529B\u53EF\u4EE5\u6307\u5B9A\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cap_add:
  - ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53BB\u6389 NET_ADMIN \u80FD\u529B\u53EF\u4EE5\u6307\u5B9A\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cap_drop:
  - NET_ADMIN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h2><p>\u8986\u76D6\u5BB9\u5668\u542F\u52A8\u540E\u9ED8\u8BA4\u6267\u884C\u7684\u547D\u4EE4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>command: echo &quot;hello world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configs" tabindex="-1"><a class="header-anchor" href="#configs" aria-hidden="true">#</a> configs</h2><p>\u4EC5\u7528\u4E8E Swarm mode</p><h2 id="cgroup-parent" tabindex="-1"><a class="header-anchor" href="#cgroup-parent" aria-hidden="true">#</a> cgroup_parent</h2><p>\u6307\u5B9A\u7236 cgroup \u7EC4\uFF0C\u610F\u5473\u7740\u5C06\u7EE7\u627F\u8BE5\u7EC4\u7684\u8D44\u6E90\u9650\u5236\u3002</p><p>\u4F8B\u5982\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A cgroup \u7EC4\u540D\u79F0\u4E3A cgroups_1\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cgroup_parent: cgroups_1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="container-name" tabindex="-1"><a class="header-anchor" href="#container-name" aria-hidden="true">#</a> container_name</h2><p>\u6307\u5B9A\u5BB9\u5668\u540D\u79F0\u3002\u9ED8\u8BA4\u5C06\u4F1A\u4F7F\u7528 \u9879\u76EE\u540D\u79F0_\u670D\u52A1\u540D\u79F0_\u5E8F\u53F7 \u8FD9\u6837\u7684\u683C\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>container_name: docker-web-container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F: \u6307\u5B9A\u5BB9\u5668\u540D\u79F0\u540E\uFF0C\u8BE5\u670D\u52A1\u5C06\u65E0\u6CD5\u8FDB\u884C\u6269\u5C55\uFF08scale\uFF09\uFF0C\u56E0\u4E3A Docker \u4E0D\u5141\u8BB8\u591A\u4E2A\u5BB9\u5668\u5177\u6709\u76F8\u540C\u7684\u540D\u79F0\u3002</p><h2 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> deploy</h2><p>\u4EC5\u7528\u4E8E Swarm mode</p><h2 id="devices" tabindex="-1"><a class="header-anchor" href="#devices" aria-hidden="true">#</a> devices</h2><p>\u6307\u5B9A\u8BBE\u5907\u6620\u5C04\u5173\u7CFB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>devices:
  - &quot;/dev/ttyUSB1:/dev/ttyUSB0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="depends-on" tabindex="-1"><a class="header-anchor" href="#depends-on" aria-hidden="true">#</a> depends_on</h2><p>\u89E3\u51B3\u5BB9\u5668\u7684\u4F9D\u8D56\u3001\u542F\u52A8\u5148\u540E\u7684\u95EE\u9898\u3002\u4EE5\u4E0B\u4F8B\u5B50\u4E2D\u4F1A\u5148\u542F\u52A8 redis db \u518D\u542F\u52A8 web</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3&#39;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1Aweb \u670D\u52A1\u4E0D\u4F1A\u7B49\u5F85 redis db \u300C\u5B8C\u5168\u542F\u52A8\u300D\u4E4B\u540E\u624D\u542F\u52A8\u3002</p><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> dns</h2><p>\u81EA\u5B9A\u4E49 DNS \u670D\u52A1\u5668\u3002\u53EF\u4EE5\u662F\u4E00\u4E2A\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5217\u8868\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dns: 8.8.8.8

dns:
  - 8.8.8.8
  - 114.114.114.114
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns-search" tabindex="-1"><a class="header-anchor" href="#dns-search" aria-hidden="true">#</a> dns_search</h2><p>\u914D\u7F6E DNS \u641C\u7D22\u57DF\u3002\u53EF\u4EE5\u662F\u4E00\u4E2A\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5217\u8868\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dns_search: example.com

dns_search:
  - domain1.example.com
  - domain2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tmpfs" tabindex="-1"><a class="header-anchor" href="#tmpfs" aria-hidden="true">#</a> tmpfs</h2><p>\u6302\u8F7D\u4E00\u4E2A tmpfs \u6587\u4EF6\u7CFB\u7EDF\u5230\u5BB9\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tmpfs: /run
tmpfs:
  - /run
  - /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="env-file" tabindex="-1"><a class="header-anchor" href="#env-file" aria-hidden="true">#</a> env_file</h2><p>\u4ECE\u6587\u4EF6\u4E2D\u83B7\u53D6\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4E3A\u5355\u72EC\u7684\u6587\u4EF6\u8DEF\u5F84\u6216\u5217\u8868\u3002</p><p>\u5982\u679C\u901A\u8FC7 docker-compose -f FILE \u65B9\u5F0F\u6765\u6307\u5B9A Compose \u6A21\u677F\u6587\u4EF6\uFF0C\u5219 env_file \u4E2D\u53D8\u91CF\u7684\u8DEF\u5F84\u4F1A\u57FA\u4E8E\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84\u3002</p><p>\u5982\u679C\u6709\u53D8\u91CF\u540D\u79F0\u4E0E environment \u6307\u4EE4\u51B2\u7A81\uFF0C\u5219\u6309\u7167\u60EF\u4F8B\uFF0C\u4EE5\u540E\u8005\u4E3A\u51C6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>env_file: .env

env_file:
  - ./common.env
  - ./apps/web.env
  - /opt/secrets.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u4E2D\u6BCF\u4E00\u884C\u5FC5\u987B\u7B26\u5408\u683C\u5F0F\uFF0C\u652F\u6301 # \u5F00\u5934\u7684\u6CE8\u91CA\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># common.env: Set development environment
PROG_ENV=development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> environment</h2><p>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6216\u5B57\u5178\u4E24\u79CD\u683C\u5F0F\u3002</p><p>\u53EA\u7ED9\u5B9A\u540D\u79F0\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u83B7\u53D6\u8FD0\u884C Compose \u4E3B\u673A\u4E0A\u5BF9\u5E94\u53D8\u91CF\u7684\u503C\uFF0C\u53EF\u4EE5\u7528\u6765\u9632\u6B62\u6CC4\u9732\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>environment:
  RACK_ENV: development
  SESSION_SECRET:

environment:
  - RACK_ENV=development
  - SESSION_SECRET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u53D8\u91CF\u540D\u79F0\u6216\u8005\u503C\u4E2D\u7528\u5230 true|false\uFF0Cyes|no \u7B49\u8868\u8FBE \u5E03\u5C14 \u542B\u4E49\u7684\u8BCD\u6C47\uFF0C\u6700\u597D\u653E\u5230\u5F15\u53F7\u91CC\uFF0C\u907F\u514D YAML \u81EA\u52A8\u89E3\u6790\u67D0\u4E9B\u5185\u5BB9\u4E3A\u5BF9\u5E94\u7684\u5E03\u5C14\u8BED\u4E49\u3002\u8FD9\u4E9B\u7279\u5B9A\u8BCD\u6C47\uFF0C\u5305\u62EC</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> expose</h2><p>\u66B4\u9732\u7AEF\u53E3\uFF0C\u4F46\u4E0D\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\uFF0C\u53EA\u88AB\u8FDE\u63A5\u7684\u670D\u52A1\u8BBF\u95EE\u3002 \u4EC5\u53EF\u4EE5\u6307\u5B9A\u5185\u90E8\u7AEF\u53E3\u4E3A\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>expose:
 - &quot;3000&quot;
 - &quot;8000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="external-links" tabindex="-1"><a class="header-anchor" href="#external-links" aria-hidden="true">#</a> external_links</h2><p><s>\u6CE8\u610F\uFF1A\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8BE5\u6307\u4EE4\u3002</s> \u94FE\u63A5\u5230 docker-compose.yml \u5916\u90E8\u7684\u5BB9\u5668\uFF0C\u751A\u81F3\u5E76\u975E Compose \u7BA1\u7406\u7684\u5916\u90E8\u5BB9\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>external_links:
 - redis_1
 - project_db_1:mysql
 - project_db_1:postgresql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extra-hosts" tabindex="-1"><a class="header-anchor" href="#extra-hosts" aria-hidden="true">#</a> extra_hosts</h2><p>\u7C7B\u4F3C Docker \u4E2D\u7684 --add-host \u53C2\u6570\uFF0C\u6307\u5B9A\u989D\u5916\u7684 host \u540D\u79F0\u6620\u5C04\u4FE1\u606F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>extra_hosts:
 - &quot;googledns:8.8.8.8&quot;
 - &quot;dockerhub:52.1.157.61&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u5728\u542F\u52A8\u540E\u7684\u670D\u52A1\u5BB9\u5668\u4E2D /etc/hosts \u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4E24\u6761\u6761\u76EE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>8.8.8.8 googledns
52.1.157.61 dockerhub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="healthcheck" tabindex="-1"><a class="header-anchor" href="#healthcheck" aria-hidden="true">#</a> healthcheck</h2><p>\u901A\u8FC7\u547D\u4EE4\u68C0\u67E5\u5BB9\u5668\u662F\u5426\u5065\u5EB7\u8FD0\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>healthcheck:
  test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]
  interval: 1m30s
  timeout: 10s
  retries: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2><p>\u6307\u5B9A\u4E3A\u955C\u50CF\u540D\u79F0\u6216\u955C\u50CF ID\u3002\u5982\u679C\u955C\u50CF\u5728\u672C\u5730\u4E0D\u5B58\u5728\uFF0CCompose \u5C06\u4F1A\u5C1D\u8BD5\u62C9\u53D6\u8FD9\u4E2A\u955C\u50CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>image: ubuntu
image: orchardup/postgresql
image: a4bc65fd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="labels" tabindex="-1"><a class="header-anchor" href="#labels" aria-hidden="true">#</a> labels</h2><p>\u4E3A\u5BB9\u5668\u6DFB\u52A0 Docker \u5143\u6570\u636E\uFF08metadata\uFF09\u4FE1\u606F\u3002\u4F8B\u5982\u53EF\u4EE5\u4E3A\u5BB9\u5668\u6DFB\u52A0\u8F85\u52A9\u8BF4\u660E\u4FE1\u606F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>labels:
  com.startupteam.description: &quot;webapp for a startup team&quot;
  com.startupteam.department: &quot;devops department&quot;
  com.startupteam.release: &quot;rc3 for v1.0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> links</h2><p><s>\u6CE8\u610F\uFF1A\u4E0D\u63A8\u8350\u4F7F\u7528\u8BE5\u6307\u4EE4\u3002</s></p><h2 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> logging</h2><p>\u914D\u7F6E\u65E5\u5FD7\u9009\u9879\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>logging:
  driver: syslog
  options:
    syslog-address: &quot;tcp://192.168.0.42:123&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u524D\u652F\u6301\u4E09\u79CD\u65E5\u5FD7\u9A71\u52A8\u7C7B\u578B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver: &quot;json-file&quot;
driver: &quot;syslog&quot;
driver: &quot;none&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>options \u914D\u7F6E\u65E5\u5FD7\u9A71\u52A8\u7684\u76F8\u5173\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>options:
  max-size: &quot;200k&quot;
  max-file: &quot;10&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="network-mode" tabindex="-1"><a class="header-anchor" href="#network-mode" aria-hidden="true">#</a> network_mode</h2><p>\u8BBE\u7F6E\u7F51\u7EDC\u6A21\u5F0F\u3002\u4F7F\u7528\u548C docker run \u7684 --network \u53C2\u6570\u4E00\u6837\u7684\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>network_mode: &quot;bridge&quot;
network_mode: &quot;host&quot;
network_mode: &quot;none&quot;
network_mode: &quot;service:[service name]&quot;
network_mode: &quot;container:[container name/id]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="networks" tabindex="-1"><a class="header-anchor" href="#networks" aria-hidden="true">#</a> networks</h2><p>\u914D\u7F6E\u5BB9\u5668\u8FDE\u63A5\u7684\u7F51\u7EDC\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3&quot;
services:

  some-service:
    networks:
     - some-network
     - other-network

networks:
  some-network:
  other-network:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pid" tabindex="-1"><a class="header-anchor" href="#pid" aria-hidden="true">#</a> pid</h2><p>\u8DDF\u4E3B\u673A\u7CFB\u7EDF\u5171\u4EAB\u8FDB\u7A0B\u547D\u540D\u7A7A\u95F4\u3002\u6253\u5F00\u8BE5\u9009\u9879\u7684\u5BB9\u5668\u4E4B\u95F4\uFF0C\u4EE5\u53CA\u5BB9\u5668\u548C\u5BBF\u4E3B\u673A\u7CFB\u7EDF\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7\u8FDB\u7A0B ID \u6765\u76F8\u4E92\u8BBF\u95EE\u548C\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pid: &quot;host&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ports" tabindex="-1"><a class="header-anchor" href="#ports" aria-hidden="true">#</a> ports</h2><p>\u66B4\u9732\u7AEF\u53E3\u4FE1\u606F\u3002 \u4F7F\u7528\u5BBF\u4E3B\u7AEF\u53E3\uFF1A\u5BB9\u5668\u7AEF\u53E3 (HOST:CONTAINER) \u683C\u5F0F\uFF0C\u6216\u8005\u4EC5\u4EC5\u6307\u5B9A\u5BB9\u5668\u7684\u7AEF\u53E3\uFF08\u5BBF\u4E3B\u5C06\u4F1A\u968F\u673A\u9009\u62E9\u7AEF\u53E3\uFF09\u90FD\u53EF\u4EE5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ports:
 - &quot;3000&quot;
 - &quot;8000:8000&quot;
 - &quot;49100:22&quot;
 - &quot;127.0.0.1:8001:8001&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u5F53\u4F7F\u7528 HOST:CONTAINER \u683C\u5F0F\u6765\u6620\u5C04\u7AEF\u53E3\u65F6\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u7684\u5BB9\u5668\u7AEF\u53E3\u5C0F\u4E8E 60 \u5E76\u4E14\u6CA1\u653E\u5230\u5F15\u53F7\u91CC\uFF0C\u53EF\u80FD\u4F1A\u5F97\u5230\u9519\u8BEF\u7ED3\u679C\uFF0C\u56E0\u4E3A YAML \u4F1A\u81EA\u52A8\u89E3\u6790 xx:yy \u8FD9\u79CD\u6570\u5B57\u683C\u5F0F\u4E3A 60 \u8FDB\u5236\u3002\u4E3A\u907F\u514D\u51FA\u73B0\u8FD9\u79CD\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6570\u5B57\u4E32\u90FD\u91C7\u7528\u5F15\u53F7\u5305\u62EC\u8D77\u6765\u7684\u5B57\u7B26\u4E32\u683C\u5F0F\u3002</p><h2 id="secrets" tabindex="-1"><a class="header-anchor" href="#secrets" aria-hidden="true">#</a> secrets</h2><p>\u5B58\u50A8\u654F\u611F\u6570\u636E\uFF0C\u4F8B\u5982 mysql \u670D\u52A1\u5BC6\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.1&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="security-opt" tabindex="-1"><a class="header-anchor" href="#security-opt" aria-hidden="true">#</a> security_opt</h2><p>\u6307\u5B9A\u5BB9\u5668\u6A21\u677F\u6807\u7B7E\uFF08label\uFF09\u673A\u5236\u7684\u9ED8\u8BA4\u5C5E\u6027\uFF08\u7528\u6237\u3001\u89D2\u8272\u3001\u7C7B\u578B\u3001\u7EA7\u522B\u7B49\uFF09\u3002\u4F8B\u5982\u914D\u7F6E\u6807\u7B7E\u7684\u7528\u6237\u540D\u548C\u89D2\u8272\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>security_opt:
    - label:user:USER
    - label:role:ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stop-signal" tabindex="-1"><a class="header-anchor" href="#stop-signal" aria-hidden="true">#</a> stop_signal</h2><p>\u8BBE\u7F6E\u53E6\u4E00\u4E2A\u4FE1\u53F7\u6765\u505C\u6B62\u5BB9\u5668\u3002\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528\u7684\u662F SIGTERM \u505C\u6B62\u5BB9\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stop_signal: SIGUSR1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sysctls" tabindex="-1"><a class="header-anchor" href="#sysctls" aria-hidden="true">#</a> sysctls</h2><p>\u914D\u7F6E\u5BB9\u5668\u5185\u6838\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sysctls:
  net.core.somaxconn: 1024
  net.ipv4.tcp_syncookies: 0

sysctls:
  - net.core.somaxconn=1024
  - net.ipv4.tcp_syncookies=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ulimits" tabindex="-1"><a class="header-anchor" href="#ulimits" aria-hidden="true">#</a> ulimits</h2><p>\u6307\u5B9A\u5BB9\u5668\u7684 ulimits \u9650\u5236\u503C\u3002</p><p>\u4F8B\u5982\uFF0C\u6307\u5B9A\u6700\u5927\u8FDB\u7A0B\u6570\u4E3A 65535\uFF0C\u6307\u5B9A\u6587\u4EF6\u53E5\u67C4\u6570\u4E3A 20000\uFF08\u8F6F\u9650\u5236\uFF0C\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u4FEE\u6539\uFF0C\u4E0D\u80FD\u8D85\u8FC7\u786C\u9650\u5236\uFF09 \u548C 40000\uFF08\u7CFB\u7EDF\u786C\u9650\u5236\uFF0C\u53EA\u80FD root \u7528\u6237\u63D0\u9AD8\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  ulimits:
    nproc: 65535
    nofile:
      soft: 20000
      hard: 40000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes</h2><p>\u6570\u636E\u5377\u6240\u6302\u8F7D\u8DEF\u5F84\u8BBE\u7F6E\u3002\u53EF\u4EE5\u8BBE\u7F6E\u5BBF\u4E3B\u673A\u8DEF\u5F84 \uFF08HOST:CONTAINER\uFF09 \u6216\u52A0\u4E0A\u8BBF\u95EE\u6A21\u5F0F \uFF08HOST:CONTAINER:ro\uFF09\u3002 \u8BE5\u6307\u4EE4\u4E2D\u8DEF\u5F84\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>volumes:
 - /var/lib/mysql
 - cache/:/tmp/cache
 - ~/configs:/etc/configs/:ro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u6307\u4EE4" aria-hidden="true">#</a> \u5176\u5B83\u6307\u4EE4</h2><p>\u6B64\u5916\uFF0C\u8FD8\u6709\u5305\u62EC domainname, entrypoint, hostname, ipc, mac_address, privileged, read_only, shm_size, restart, stdin_open, tty, user, working_dir \u7B49\u6307\u4EE4\uFF0C\u57FA\u672C\u8DDF docker run \u4E2D\u5BF9\u5E94\u53C2\u6570\u7684\u529F\u80FD\u4E00\u81F4\u3002</p><p>\u6307\u5B9A\u670D\u52A1\u5BB9\u5668\u542F\u52A8\u540E\u6267\u884C\u7684\u5165\u53E3\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entrypoint: /code/entrypoint.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9A\u5BB9\u5668\u4E2D\u8FD0\u884C\u5E94\u7528\u7684\u7528\u6237\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user: nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9A\u5BB9\u5668\u4E2D\u5DE5\u4F5C\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>working_dir: /code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9A\u5BB9\u5668\u4E2D\u641C\u7D22\u57DF\u540D\u3001\u4E3B\u673A\u540D\u3001mac \u5730\u5740\u7B49\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>domainname: your_website.com
hostname: test
mac_address: 08-00-27-00-0C-0A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5141\u8BB8\u5BB9\u5668\u4E2D\u8FD0\u884C\u4E00\u4E9B\u7279\u6743\u547D\u4EE4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>privileged: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9A\u5BB9\u5668\u9000\u51FA\u540E\u7684\u91CD\u542F\u7B56\u7565\u4E3A\u59CB\u7EC8\u91CD\u542F\u3002\u8BE5\u547D\u4EE4\u5BF9\u4FDD\u6301\u670D\u52A1\u59CB\u7EC8\u8FD0\u884C\u5341\u5206\u6709\u6548\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u63A8\u8350\u914D\u7F6E\u4E3A always \u6216\u8005 unless-stopped\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>restart: always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE5\u53EA\u8BFB\u6A21\u5F0F\u6302\u8F7D\u5BB9\u5668\u7684 root \u6587\u4EF6\u7CFB\u7EDF\uFF0C\u610F\u5473\u7740\u4E0D\u80FD\u5BF9\u5BB9\u5668\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>read_only: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6253\u5F00\u6807\u51C6\u8F93\u5165\uFF0C\u53EF\u4EE5\u63A5\u53D7\u5916\u90E8\u8F93\u5165\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stdin_open: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6A21\u62DF\u4E00\u4E2A\u4F2A\u7EC8\u7AEF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tty: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BFB\u53D6\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u53D8\u91CF" aria-hidden="true">#</a> \u8BFB\u53D6\u53D8\u91CF</h2><p>Compose \u6A21\u677F\u6587\u4EF6\u652F\u6301\u52A8\u6001\u8BFB\u53D6\u4E3B\u673A\u7684\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u548C\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 .env \u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684 Compose \u6587\u4EF6\u5C06\u4ECE\u8FD0\u884C\u5B83\u7684\u73AF\u5883\u4E2D\u8BFB\u53D6\u53D8\u91CF \${MONGO_VERSION} \u7684\u503C\uFF0C\u5E76\u5199\u5165\u6267\u884C\u7684\u6307\u4EE4\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3&quot;
services:

db:
  image: &quot;mongo:\${MONGO_VERSION}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6267\u884C MONGO_VERSION=3.2 docker-compose up \u5219\u4F1A\u542F\u52A8\u4E00\u4E2A mongo:3.2 \u955C\u50CF\u7684\u5BB9\u5668\uFF1B\u5982\u679C\u6267\u884C MONGO_VERSION=2.8 docker-compose up \u5219\u4F1A\u542F\u52A8\u4E00\u4E2A mongo:2.8 \u955C\u50CF\u7684\u5BB9\u5668\u3002</p><p>\u82E5\u5F53\u524D\u76EE\u5F55\u5B58\u5728 .env \u6587\u4EF6\uFF0C\u6267\u884C docker-compose \u547D\u4EE4\u65F6\u5C06\u4ECE\u8BE5\u6587\u4EF6\u4E2D\u8BFB\u53D6\u53D8\u91CF\u3002</p><p>\u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA .env \u6587\u4EF6\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u652F\u6301 # \u53F7\u6CE8\u91CA
MONGO_VERSION=3.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C docker-compose up \u5219\u4F1A\u542F\u52A8\u4E00\u4E2A mongo:3.6 \u955C\u50CF\u7684\u5BB9\u5668\u3002</p><h2 id="\u5E38\u7528\u8F6F\u4EF6docker-compose\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8F6F\u4EF6docker-compose\u6587\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u8F6F\u4EF6docker-compose\u6587\u4EF6</h2><h3 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql5" tabindex="-1"><a class="header-anchor" href="#mysql5" aria-hidden="true">#</a> Mysql5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
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
      --sql-mode=&quot;STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO&quot;
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql8" tabindex="-1"><a class="header-anchor" href="#mysql8" aria-hidden="true">#</a> Mysql8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#redis\u96C6\u7FA4" aria-hidden="true">#</a> Redis\u96C6\u7FA4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sentinel\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#sentinel\u96C6\u7FA4" aria-hidden="true">#</a> Sentinel\u96C6\u7FA4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539 Sentinel \u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>port 26379
dir /tmp
# \u81EA\u5B9A\u4E49\u96C6\u7FA4\u540D\uFF0C\u5176\u4E2D 127.0.0.1 \u4E3A redis-master \u7684 ip\uFF0C6379 \u4E3A redis-master \u7684\u7AEF\u53E3\uFF0C2 \u4E3A\u6700\u5C0F\u6295\u7968\u6570\uFF08\u56E0\u4E3A\u6709 3 \u53F0 Sentinel \u6240\u4EE5\u53EF\u4EE5\u8BBE\u7F6E\u6210 2\uFF09
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
sentinel deny-scripts-reconfig yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> Jenkins</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
  jenkins:
    restart: always
    image: jenkinsci/jenkins
    container_name: jenkins
    ports:
      # \u53D1\u5E03\u7AEF\u53E3
      - 8080:8080
      # \u57FA\u4E8E JNLP \u7684 Jenkins \u4EE3\u7406\u901A\u8FC7 TCP \u7AEF\u53E3 50000 \u4E0E Jenkins master \u8FDB\u884C\u901A\u4FE1
      - 50000:50000
    environment:
      TZ: Asia/Shanghai
    volumes:
      - ./data:/var/jenkins_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u4F1A\u51FA\u73B0 Docker \u6570\u636E\u5377 \u6743\u9650\u95EE\u9898\uFF0C\u7528\u4EE5\u4E0B\u547D\u4EE4\u89E3\u51B3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chown -R 1000 /usr/local/docker/jenkins/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,171),l=[a];function r(t,v){return i(),n("div",null,l)}var u=e(d,[["render",r],["__file","docker-compose-command.html.vue"]]);export{u as default};
