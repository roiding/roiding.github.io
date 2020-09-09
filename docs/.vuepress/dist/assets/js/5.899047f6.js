(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{355:function(t,n,s){"use strict";s.r(n);var a=s(42),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"基于-docker-安装-gitlab-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab-runner"}},[t._v("#")]),t._v(" 基于 Docker 安装 GitLab Runner")]),t._v(" "),s("h3",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),s("ul",[s("li",[t._v("创建工作目录 /usr/local/docker/runner")]),t._v(" "),s("li",[t._v("创建构建目录 /usr/local/docker/runner/environment")]),t._v(" "),s("li",[t._v("下载 jdk-8u152-linux-x64.tar.gz 并复制到 /usr/local/docker/runner/environment")]),t._v(" "),s("li",[t._v("下载 apache-maven-3.5.3-bin.tar.gz 并复制到 /usr/local/docker/runner/environment")])]),t._v(" "),s("h3",{attrs:{id:"daemon-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daemon-json"}},[t._v("#")]),t._v(" daemon.json")]),t._v(" "),s("p",[t._v("在 /usr/local/docker/runner/environment 目录下创建 daemon.json，用于配置加速器和仓库地址")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"insecure-registries"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.10.133:5000"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),s("p",[t._v("在 /usr/local/docker/runner/environment 目录下创建 Dockerfile")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" gitlab/gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MAINTAINER")]),t._v(" maodou38 <maodoulove19950815@vip.qq.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改软件源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y && \\\n    apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get clean\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y install apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("transport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("https ca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("certificates curl software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("properties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("common && \\\n    curl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fsSL http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mirrors.aliyun.com/docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ce/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" && \\\n    add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("repository "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"')]),t._v(" && \\\n    apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y && \\\n    apt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ce\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" daemon.json /etc/docker/daemon.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker Compose")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /usr/local/bin\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" wget https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//raw.githubusercontent.com/topsale/resources/master/docker/docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" chmod +x docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Java")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /usr/local/java\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /usr/local/java\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u152"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz /usr/local/java\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" tar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zxvf jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u152"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz && \\\n    rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fr jdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u152"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Maven")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /usr/local/maven\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /usr/local/maven\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bin.tar.gz /usr/local/maven\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" tar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zxvf apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bin.tar.gz && \\\n    rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fr apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bin.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# COPY settings.xml /usr/local/maven/apache-maven-3.5.3/conf/settings.xml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置环境变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" JAVA_HOME /usr/local/java/jdk1.8.0_152\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" MAVEN_HOME /usr/local/maven/apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PATH $PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$JAVA_HOME/bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$MAVEN_HOME/bin\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /\n")])])]),s("h3",{attrs:{id:"docker-compose-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),s("p",[t._v("在 /usr/local/docker/runner 目录下创建 docker-compose.yml")]),t._v(" "),s("div",{staticClass:"language-docker-compse extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("version: '3.1'\nservices:\n  gitlab-runner:\n    build: environment\n    restart: always\n    container_name: gitlab-runner\n    privileged: true\n    volumes:\n      - ./config:/etc/gitlab-runner\n      - /var/run/docker.sock:/var/run/docker.sock\n")])])]),s("h3",{attrs:{id:"注册-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册-runner"}},[t._v("#")]),t._v(" 注册 Runner")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker exec "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("it gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner register\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 GitLab 地址")]),t._v("\nPlease enter the gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ci coordinator URL (e.g. https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//gitlab.com/)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//192.168.10.132/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 GitLab Token")]),t._v("\nPlease enter the gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ci token for this runner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n1Lxq_f1NRfCfeNbE5WRh\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 Runner 的说明")]),t._v("\nPlease enter the gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ci description for this runner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n可以为空\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Tag，可以用于指定在构建规定的 tag 时触发 ci")]),t._v("\nPlease enter the gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ci tags for this runner (comma separated)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\ndeploy\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里选择 true ，可以用于代码上传后直接执行")]),t._v("\nWhether to run untagged builds "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("true/false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\ntrue\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里选择 false，可以直接回车，默认为 false")]),t._v("\nWhether to lock Runner to current project "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("true/false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nfalse\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择 runner 执行器，这里我们选择的是 shell")]),t._v("\nPlease enter the executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" virtualbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docker+machine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parallels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ssh+machine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ssh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("shell")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-runner"}},[t._v("#")]),t._v(" 使用 Runner")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GitLab CI 地址与令牌参数\n项目 –> 设置 –> CI/CD –> Runner 设置\n"),s("img",{attrs:{src:"/docker/docker-app/gitlab-runner.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v(".gitlab-ci.yml"),s("br"),t._v("\n在项目工程下编写 .gitlab-ci.yml 配置文件：")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("stages:\n  - install_deps\n  - test\n  - build\n  - deploy_test\n  - deploy_production\n\ncache:\n  key: ${CI_BUILD_REF_NAME}\n  paths:\n    - node_modules/\n    - dist/\n\n# 安装依赖\ninstall_deps:\n  stage: install_deps\n  only:\n    - develop\n    - master\n  script:\n    - npm install\n\n# 运行测试用例\ntest:\n  stage: test\n  only:\n    - develop\n    - master\n  script:\n    - npm run test\n\n# 编译\nbuild:\n  stage: build\n  only:\n    - develop\n    - master\n  script:\n    - npm run clean\n    - npm run build:client\n    - npm run build:server\n\n# 部署测试服务器\ndeploy_test:\n  stage: deploy_test\n  only:\n    - develop\n  script:\n    - pm2 delete app || true\n    - pm2 start app.js --name app\n\n# 部署生产服务器\ndeploy_production:\n  stage: deploy_production\n  only:\n    - master\n  script:\n    - bash scripts/deploy/deploy.sh\n")])])]),s("p",[t._v("上面的配置把一次 Pipeline 分成五个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("安装依赖(install_deps)")]),t._v(" "),s("li",[t._v("运行测试(test)")]),t._v(" "),s("li",[t._v("编译(build)")]),t._v(" "),s("li",[t._v("部署测试服务器(deploy_test)")]),t._v(" "),s("li",[t._v("部署生产服务器(deploy_production)")])]),t._v(" "),s("p",[t._v("注意： 设置 Job.only 后，只有当 develop 分支和 master 分支有提交的时候才会触发相关的 Jobs。\n节点说明：")]),t._v(" "),s("ul",[s("li",[t._v("stages：定义构建阶段，这里只有一个阶段 deploy")]),t._v(" "),s("li",[t._v("deploy：构建阶段 deploy 的详细配置也就是任务配置")]),t._v(" "),s("li",[t._v("script：需要执行的 shell 脚本")]),t._v(" "),s("li",[t._v("only：这里的 master 指在提交到 master 时执行")]),t._v(" "),s("li",[t._v("tags：与注册 runner 时的 tag 匹配")])]),t._v(" "),s("h3",{attrs:{id:"其它命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它命令"}},[t._v("#")]),t._v(" 其它命令")]),t._v(" "),s("ul",[s("li",[t._v("删除注册信息\n"),s("code",[t._v('gitlab-ci-multi-runner unregister --name "名称"')])]),t._v(" "),s("li",[t._v("查看注册列表\n"),s("code",[t._v("gitlab-ci-multi-runner list")])])]),t._v(" "),s("h3",{attrs:{id:"dockerfile示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile示例"}},[t._v("#")]),t._v(" Dockerfile示例")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('    FROM openjdk:8-jre\n\nMAINTAINER maodou38 <maodoulove19950815@vip.qq.com>\n\nENV APP_VERSION 1.0.0-SNAPSHOT\nENV DOCKERIZE_VERSION v0.6.1\nRUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\\n    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\\n    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\n\nRUN mkdir /app\n\nCOPY myshop-service-user-provider-$APP_VERSION.jar /app/app.jar\nENTRYPOINT ["dockerize", "-timeout", "5m", "-wait", "tcp://192.168.10.131:3306", "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/app.jar"]\n\nEXPOSE 8501\n')])])]),s("p",[s("font",{attrs:{color:"red"}},[t._v(" DOCKERIZE是一个监听插件，监听依赖服务是否启动")])],1),t._v(" "),s("h2",{attrs:{id:"基于-docker-安装-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-jenkins"}},[t._v("#")]),t._v(" 基于 Docker 安装 Jenkins")]),t._v(" "),s("h3",{attrs:{id:"docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" docker-compose")]),t._v(" "),s("p",[t._v("Jenkins 是一个简单易用的持续集成软件平台，我们依然采用 Docker 的方式部署，docker-compose.yml 配置文件如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("version: '3.1'\nservices:\n  jenkins:\n    restart: always\n    image: jenkinsci/jenkins\n    container_name: jenkins\n    ports:\n      # 发布端口\n      - 8080:8080\n      # 基于 JNLP 的 Jenkins 代理通过 TCP 端口 50000 与 Jenkins master 进行通信\n      - 50000:50000\n    environment:\n      TZ: Asia/Shanghai\n    volumes:\n      - ./data:/var/jenkins_home\n")])])]),s("p",[t._v("安装过程中会出现 Docker 数据卷 权限问题，用以下命令解决：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("chown -R 1000 /usr/local/docker/jenkins/data\n")])])]),s("h3",{attrs:{id:"解锁-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解锁-jenkins"}},[t._v("#")]),t._v(" 解锁 Jenkins")]),t._v(" "),s("p",[t._v("Jenkins 第一次启动时需要输入一个初始密码用以解锁安装流程，使用 docker logs jenkins 即可方便的查看到初始密码\n"),s("img",{attrs:{src:"/docker/docker-app/jenkins-unlock.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"/docker/docker-app/jenkins-pass.png",alt:""}}),t._v("\n注意： 安装时可能会因为网速等原因导致安装时间比较长，请大家耐心等待。如果长时间停留在安装页没反应，请尝试使用 F5 刷新一下。")]),t._v(" "),s("h3",{attrs:{id:"使用自定义插件的方式安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义插件的方式安装"}},[t._v("#")]),t._v(" 使用自定义插件的方式安装")]),t._v(" "),s("p",[t._v("插件是 Jenkins 的核心，其丰富的插件（截止到 2018.10.29 共有 77350 个插件）可以满足不同人群的不同需求")]),t._v(" "),s("p",[t._v("插件地址：https://plugins.jenkins.io/")]),t._v(" "),s("p",[t._v("注意： 除了默认勾选的插件外，一定要勾选 Publish over SSH 插件，这是我们实现持续交付的重点插件。")]),t._v(" "),s("p",[s("strong",[t._v("开始安装了，根据网络情况，安装时间可能会比较长，请耐心等待")])]),t._v(" "),s("p",[s("strong",[t._v("很多插件装不上怎么办？不要慌，记住这些插件的名字，咱们稍后可以手动安装")])]),t._v(" "),s("h3",{attrs:{id:"安装成功效果图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装成功效果图"}},[t._v("#")]),t._v(" 安装成功效果图")]),t._v(" "),s("p",[t._v("创建管理员\n"),s("img",{attrs:{src:"/docker/docker-app/jenkins-install-success.png",alt:""}})]),t._v(" "),s("p",[t._v("安装完成，进入首页")]),t._v(" "),s("h3",{attrs:{id:"附-jenkins-手动安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附-jenkins-手动安装插件"}},[t._v("#")]),t._v(" 附：Jenkins 手动安装插件")]),t._v(" "),s("ul",[s("li",[t._v("使用插件管理器安装\nManage Jenkins -> Manage Plugins -> Avaliable")])]),t._v(" "),s("p",[t._v("过滤出想要安装的插件，然后点击 Download now and install after restart")]),t._v(" "),s("ul",[s("li",[t._v("手动上传 .hpi 文件\n点击进入插件中心")])]),t._v(" "),s("p",[t._v("点击 Archives")]),t._v(" "),s("p",[t._v("下载需要的版本")]),t._v(" "),s("p",[t._v("在插件管理器中选择 Advanced")]),t._v(" "),s("p",[t._v("选择上传即可\n"),s("img",{attrs:{src:"/docker/docker-app/jenkins-upload.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"重启-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启-jenkins"}},[t._v("#")]),t._v(" 重启 Jenkins")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker-compose down\ndocker-compose up -d\n")])])]),s("p",[t._v("注意： 请留意需要下载插件的警告信息，如果不满足安装条件，Jenkins 是会拒绝安装的。如下图：\n"),s("img",{attrs:{src:"/docker/docker-app/jenkins-refuse.png",alt:""}})])])}),[],!1,null,null,null);n.default=e.exports}}]);