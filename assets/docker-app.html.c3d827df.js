import{_ as n,o as e,c as s,a as i}from"./app.7c042103.js";var a="/assets/gitlab-runner.21bdc29b.png",l="/assets/jenkins-unlock.4c35460d.png",r="/assets/jenkins-pass.0d0ef5f1.png",d="/assets/jenkins-install-success.224103cb.png",c="/assets/jenkins-upload.318b2a77.png",t="/assets/jenkins-refuse.be8c7279.png";const o={},u=i(`<h2 id="\u57FA\u4E8E-docker-\u5B89\u88C5-gitlab-runner" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-docker-\u5B89\u88C5-gitlab-runner" aria-hidden="true">#</a> \u57FA\u4E8E Docker \u5B89\u88C5 GitLab Runner</h2><h3 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h3><ul><li>\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55 /usr/local/docker/runner</li><li>\u521B\u5EFA\u6784\u5EFA\u76EE\u5F55 /usr/local/docker/runner/environment</li><li>\u4E0B\u8F7D jdk-8u152-linux-x64.tar.gz \u5E76\u590D\u5236\u5230 /usr/local/docker/runner/environment</li><li>\u4E0B\u8F7D apache-maven-3.5.3-bin.tar.gz \u5E76\u590D\u5236\u5230 /usr/local/docker/runner/environment</li></ul><h3 id="daemon-json" tabindex="-1"><a class="header-anchor" href="#daemon-json" aria-hidden="true">#</a> daemon.json</h3><p>\u5728 /usr/local/docker/runner/environment \u76EE\u5F55\u4E0B\u521B\u5EFA daemon.json\uFF0C\u7528\u4E8E\u914D\u7F6E\u52A0\u901F\u5668\u548C\u4ED3\u5E93\u5730\u5740</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://registry.docker-cn.com&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;insecure-registries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;192.168.10.133:5000&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><p>\u5728 /usr/local/docker/runner/environment \u76EE\u5F55\u4E0B\u521B\u5EFA Dockerfile</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> gitlab/gitlab-runner</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> maodou38 &lt;maodoulove19950815@vip.qq.com&gt;</span>
<span class="token comment"># \u4FEE\u6539\u8F6F\u4EF6\u6E90</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse&#39;</span> &gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse&#39;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse&#39;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    echo <span class="token string">&#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse&#39;</span> &gt;&gt; /etc/apt/sources.list &amp;&amp; <span class="token operator">\\</span>
    apt-get update -y &amp;&amp; <span class="token operator">\\</span>
    apt-get clean</span>

<span class="token comment"># \u5B89\u88C5 Docker</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get -y install apt-transport-https ca-certificates curl software-properties-common &amp;&amp; <span class="token operator">\\</span>
    curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | apt-key add - &amp;&amp; <span class="token operator">\\</span>
    add-apt-repository <span class="token string">&quot;deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;</span> &amp;&amp; <span class="token operator">\\</span>
    apt-get update -y &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y docker-ce</span>
<span class="token instruction"><span class="token keyword">COPY</span> daemon.json /etc/docker/daemon.json</span>

<span class="token comment"># \u5B89\u88C5 Docker Compose</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/local/bin</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://raw.githubusercontent.com/topsale/resources/master/docker/docker-compose</span>
<span class="token instruction"><span class="token keyword">RUN</span> chmod +x docker-compose</span>

<span class="token comment"># \u5B89\u88C5 Java</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /usr/local/java</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/local/java</span>
<span class="token instruction"><span class="token keyword">COPY</span> jdk-8u152-linux-x64.tar.gz /usr/local/java</span>
<span class="token instruction"><span class="token keyword">RUN</span> tar -zxvf jdk-8u152-linux-x64.tar.gz &amp;&amp; <span class="token operator">\\</span>
    rm -fr jdk-8u152-linux-x64.tar.gz</span>

<span class="token comment"># \u5B89\u88C5 Maven</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /usr/local/maven</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/local/maven</span>
<span class="token comment"># RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz</span>
<span class="token instruction"><span class="token keyword">COPY</span> apache-maven-3.5.3-bin.tar.gz /usr/local/maven</span>
<span class="token instruction"><span class="token keyword">RUN</span> tar -zxvf apache-maven-3.5.3-bin.tar.gz &amp;&amp; <span class="token operator">\\</span>
    rm -fr apache-maven-3.5.3-bin.tar.gz</span>
<span class="token comment"># COPY settings.xml /usr/local/maven/apache-maven-3.5.3/conf/settings.xml</span>

<span class="token comment"># \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME /usr/local/java/jdk1.8.0_152</span>
<span class="token instruction"><span class="token keyword">ENV</span> MAVEN_HOME /usr/local/maven/apache-maven-3.5.3</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">$PATH</span>:<span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$MAVEN_HOME</span>/bin</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h3><p>\u5728 /usr/local/docker/runner \u76EE\u5F55\u4E0B\u521B\u5EFA docker-compose.yml</p><div class="language-docker-compse ext-docker-compse line-numbers-mode"><pre class="language-docker-compse"><code>version: &#39;3.1&#39;
services:
  gitlab-runner:
    build: environment
    restart: always
    container_name: gitlab-runner
    privileged: true
    volumes:
      - ./config:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u518C-runner" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C-runner" aria-hidden="true">#</a> \u6CE8\u518C Runner</h3><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>docker exec -it gitlab-runner gitlab-runner register

<span class="token comment"># \u8F93\u5165 GitLab \u5730\u5740</span>
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
http://192.168.10.132/

<span class="token comment"># \u8F93\u5165 GitLab Token</span>
Please enter the gitlab-ci token for this runner:
1Lxq_f1NRfCfeNbE5WRh

<span class="token comment"># \u8F93\u5165 Runner \u7684\u8BF4\u660E</span>
Please enter the gitlab-ci description for this runner:
\u53EF\u4EE5\u4E3A\u7A7A

<span class="token comment"># \u8BBE\u7F6E Tag\uFF0C\u53EF\u4EE5\u7528\u4E8E\u6307\u5B9A\u5728\u6784\u5EFA\u89C4\u5B9A\u7684 tag \u65F6\u89E6\u53D1 ci</span>
Please enter the gitlab-ci tags for this runner (comma separated):
deploy

<span class="token comment"># \u8FD9\u91CC\u9009\u62E9 true \uFF0C\u53EF\u4EE5\u7528\u4E8E\u4EE3\u7801\u4E0A\u4F20\u540E\u76F4\u63A5\u6267\u884C</span>
Whether to run untagged builds [true/false]:
true

<span class="token comment"># \u8FD9\u91CC\u9009\u62E9 false\uFF0C\u53EF\u4EE5\u76F4\u63A5\u56DE\u8F66\uFF0C\u9ED8\u8BA4\u4E3A false</span>
Whether to lock Runner to current project [true/false]:
false

<span class="token comment"># \u9009\u62E9 runner \u6267\u884C\u5668\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u7684\u662F shell</span>
Please enter the executor: virtualbox, docker+machine, parallels, shell, ssh, docker-ssh+machine, kubernetes, docker, docker-ssh:
<span class="token instruction"><span class="token keyword">shell</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-runner" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-runner" aria-hidden="true">#</a> \u4F7F\u7528 Runner</h3><ul><li><p>GitLab CI \u5730\u5740\u4E0E\u4EE4\u724C\u53C2\u6570 \u9879\u76EE \u2013&gt; \u8BBE\u7F6E \u2013&gt; CI/CD \u2013&gt; Runner \u8BBE\u7F6E <img src="`+a+`" alt=""></p></li><li><p>.gitlab-ci.yml<br> \u5728\u9879\u76EE\u5DE5\u7A0B\u4E0B\u7F16\u5199 .gitlab-ci.yml \u914D\u7F6E\u6587\u4EF6\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stages:
  - install_deps
  - test
  - build
  - deploy_test
  - deploy_production

cache:
  key: \${CI_BUILD_REF_NAME}
  paths:
    - node_modules/
    - dist/

# \u5B89\u88C5\u4F9D\u8D56
install_deps:
  stage: install_deps
  only:
    - develop
    - master
  script:
    - npm install

# \u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B
test:
  stage: test
  only:
    - develop
    - master
  script:
    - npm run test

# \u7F16\u8BD1
build:
  stage: build
  only:
    - develop
    - master
  script:
    - npm run clean
    - npm run build:client
    - npm run build:server

# \u90E8\u7F72\u6D4B\u8BD5\u670D\u52A1\u5668
deploy_test:
  stage: deploy_test
  only:
    - develop
  script:
    - pm2 delete app || true
    - pm2 start app.js --name app

# \u90E8\u7F72\u751F\u4EA7\u670D\u52A1\u5668
deploy_production:
  stage: deploy_production
  only:
    - master
  script:
    - bash scripts/deploy/deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u914D\u7F6E\u628A\u4E00\u6B21 Pipeline \u5206\u6210\u4E94\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u5B89\u88C5\u4F9D\u8D56(install_deps)</li><li>\u8FD0\u884C\u6D4B\u8BD5(test)</li><li>\u7F16\u8BD1(build)</li><li>\u90E8\u7F72\u6D4B\u8BD5\u670D\u52A1\u5668(deploy_test)</li><li>\u90E8\u7F72\u751F\u4EA7\u670D\u52A1\u5668(deploy_production)</li></ul><p>\u6CE8\u610F\uFF1A \u8BBE\u7F6E Job.only \u540E\uFF0C\u53EA\u6709\u5F53 develop \u5206\u652F\u548C master \u5206\u652F\u6709\u63D0\u4EA4\u7684\u65F6\u5019\u624D\u4F1A\u89E6\u53D1\u76F8\u5173\u7684 Jobs\u3002 \u8282\u70B9\u8BF4\u660E\uFF1A</p><ul><li>stages\uFF1A\u5B9A\u4E49\u6784\u5EFA\u9636\u6BB5\uFF0C\u8FD9\u91CC\u53EA\u6709\u4E00\u4E2A\u9636\u6BB5 deploy</li><li>deploy\uFF1A\u6784\u5EFA\u9636\u6BB5 deploy \u7684\u8BE6\u7EC6\u914D\u7F6E\u4E5F\u5C31\u662F\u4EFB\u52A1\u914D\u7F6E</li><li>script\uFF1A\u9700\u8981\u6267\u884C\u7684 shell \u811A\u672C</li><li>only\uFF1A\u8FD9\u91CC\u7684 master \u6307\u5728\u63D0\u4EA4\u5230 master \u65F6\u6267\u884C</li><li>tags\uFF1A\u4E0E\u6CE8\u518C runner \u65F6\u7684 tag \u5339\u914D</li></ul><h3 id="\u5176\u5B83\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u547D\u4EE4" aria-hidden="true">#</a> \u5176\u5B83\u547D\u4EE4</h3><ul><li>\u5220\u9664\u6CE8\u518C\u4FE1\u606F <code>gitlab-ci-multi-runner unregister --name &quot;\u540D\u79F0&quot;</code></li><li>\u67E5\u770B\u6CE8\u518C\u5217\u8868 <code>gitlab-ci-multi-runner list</code></li></ul><h3 id="dockerfile\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#dockerfile\u793A\u4F8B" aria-hidden="true">#</a> Dockerfile\u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    FROM openjdk:8-jre

MAINTAINER maodou38 &lt;maodoulove19950815@vip.qq.com&gt;

ENV APP_VERSION 1.0.0-SNAPSHOT
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\
    &amp;&amp; tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\
    &amp;&amp; rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir /app

COPY myshop-service-user-provider-$APP_VERSION.jar /app/app.jar
ENTRYPOINT [&quot;dockerize&quot;, &quot;-timeout&quot;, &quot;5m&quot;, &quot;-wait&quot;, &quot;tcp://192.168.10.131:3306&quot;, &quot;java&quot;, &quot;-Djava.security.egd=file:/dev/./urandom&quot;, &quot;-jar&quot;, &quot;/app/app.jar&quot;]

EXPOSE 8501
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:#F00;"> DOCKERIZE\u662F\u4E00\u4E2A\u76D1\u542C\u63D2\u4EF6\uFF0C\u76D1\u542C\u4F9D\u8D56\u670D\u52A1\u662F\u5426\u542F\u52A8</span></p><h2 id="\u57FA\u4E8E-docker-\u5B89\u88C5-jenkins" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-docker-\u5B89\u88C5-jenkins" aria-hidden="true">#</a> \u57FA\u4E8E Docker \u5B89\u88C5 Jenkins</h2><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h3><p>Jenkins \u662F\u4E00\u4E2A\u7B80\u5355\u6613\u7528\u7684\u6301\u7EED\u96C6\u6210\u8F6F\u4EF6\u5E73\u53F0\uFF0C\u6211\u4EEC\u4F9D\u7136\u91C7\u7528 Docker \u7684\u65B9\u5F0F\u90E8\u7F72\uFF0Cdocker-compose.yml \u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u89E3\u9501-jenkins" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9501-jenkins" aria-hidden="true">#</a> \u89E3\u9501 Jenkins</h3><p>Jenkins \u7B2C\u4E00\u6B21\u542F\u52A8\u65F6\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u521D\u59CB\u5BC6\u7801\u7528\u4EE5\u89E3\u9501\u5B89\u88C5\u6D41\u7A0B\uFF0C\u4F7F\u7528 docker logs jenkins \u5373\u53EF\u65B9\u4FBF\u7684\u67E5\u770B\u5230\u521D\u59CB\u5BC6\u7801 <img src="`+l+'" alt=""><img src="'+r+'" alt=""> \u6CE8\u610F\uFF1A \u5B89\u88C5\u65F6\u53EF\u80FD\u4F1A\u56E0\u4E3A\u7F51\u901F\u7B49\u539F\u56E0\u5BFC\u81F4\u5B89\u88C5\u65F6\u95F4\u6BD4\u8F83\u957F\uFF0C\u8BF7\u5927\u5BB6\u8010\u5FC3\u7B49\u5F85\u3002\u5982\u679C\u957F\u65F6\u95F4\u505C\u7559\u5728\u5B89\u88C5\u9875\u6CA1\u53CD\u5E94\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 F5 \u5237\u65B0\u4E00\u4E0B\u3002</p><h3 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\u65B9\u5F0F\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\u65B9\u5F0F\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\u65B9\u5F0F\u5B89\u88C5</h3><p>\u63D2\u4EF6\u662F Jenkins \u7684\u6838\u5FC3\uFF0C\u5176\u4E30\u5BCC\u7684\u63D2\u4EF6\uFF08\u622A\u6B62\u5230 2018.10.29 \u5171\u6709 77350 \u4E2A\u63D2\u4EF6\uFF09\u53EF\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u4EBA\u7FA4\u7684\u4E0D\u540C\u9700\u6C42</p><p>\u63D2\u4EF6\u5730\u5740\uFF1Ahttps://plugins.jenkins.io/</p><p>\u6CE8\u610F\uFF1A \u9664\u4E86\u9ED8\u8BA4\u52FE\u9009\u7684\u63D2\u4EF6\u5916\uFF0C\u4E00\u5B9A\u8981\u52FE\u9009 Publish over SSH \u63D2\u4EF6\uFF0C\u8FD9\u662F\u6211\u4EEC\u5B9E\u73B0\u6301\u7EED\u4EA4\u4ED8\u7684\u91CD\u70B9\u63D2\u4EF6\u3002</p><p><strong>\u5F00\u59CB\u5B89\u88C5\u4E86\uFF0C\u6839\u636E\u7F51\u7EDC\u60C5\u51B5\uFF0C\u5B89\u88C5\u65F6\u95F4\u53EF\u80FD\u4F1A\u6BD4\u8F83\u957F\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85</strong></p><p><strong>\u5F88\u591A\u63D2\u4EF6\u88C5\u4E0D\u4E0A\u600E\u4E48\u529E\uFF1F\u4E0D\u8981\u614C\uFF0C\u8BB0\u4F4F\u8FD9\u4E9B\u63D2\u4EF6\u7684\u540D\u5B57\uFF0C\u54B1\u4EEC\u7A0D\u540E\u53EF\u4EE5\u624B\u52A8\u5B89\u88C5</strong></p><h3 id="\u5B89\u88C5\u6210\u529F\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6210\u529F\u6548\u679C\u56FE" aria-hidden="true">#</a> \u5B89\u88C5\u6210\u529F\u6548\u679C\u56FE</h3><p>\u521B\u5EFA\u7BA1\u7406\u5458 <img src="'+d+'" alt=""></p><p>\u5B89\u88C5\u5B8C\u6210\uFF0C\u8FDB\u5165\u9996\u9875</p><h3 id="\u9644-jenkins-\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9644-jenkins-\u624B\u52A8\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u9644\uFF1AJenkins \u624B\u52A8\u5B89\u88C5\u63D2\u4EF6</h3><ul><li>\u4F7F\u7528\u63D2\u4EF6\u7BA1\u7406\u5668\u5B89\u88C5 Manage Jenkins -&gt; Manage Plugins -&gt; Avaliable</li></ul><p>\u8FC7\u6EE4\u51FA\u60F3\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\uFF0C\u7136\u540E\u70B9\u51FB Download now and install after restart</p><ul><li>\u624B\u52A8\u4E0A\u4F20 .hpi \u6587\u4EF6 \u70B9\u51FB\u8FDB\u5165\u63D2\u4EF6\u4E2D\u5FC3</li></ul><p>\u70B9\u51FB Archives</p><p>\u4E0B\u8F7D\u9700\u8981\u7684\u7248\u672C</p><p>\u5728\u63D2\u4EF6\u7BA1\u7406\u5668\u4E2D\u9009\u62E9 Advanced</p><p>\u9009\u62E9\u4E0A\u4F20\u5373\u53EF <img src="'+c+`" alt=""></p><h3 id="\u91CD\u542F-jenkins" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F-jenkins" aria-hidden="true">#</a> \u91CD\u542F Jenkins</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose down
docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A \u8BF7\u7559\u610F\u9700\u8981\u4E0B\u8F7D\u63D2\u4EF6\u7684\u8B66\u544A\u4FE1\u606F\uFF0C\u5982\u679C\u4E0D\u6EE1\u8DB3\u5B89\u88C5\u6761\u4EF6\uFF0CJenkins \u662F\u4F1A\u62D2\u7EDD\u5B89\u88C5\u7684\u3002\u5982\u4E0B\u56FE\uFF1A <img src="`+t+'" alt=""></p>',54),v=[u];function p(m,b){return e(),s("div",null,v)}var h=n(o,[["render",p],["__file","docker-app.html.vue"]]);export{h as default};
