(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(a,e,t){"use strict";t.r(e);var s=t(42),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),t("p",[a._v("功能为指定基础镜像，并且必须是第一条指令。\n如果不以任何镜像为基础，那么写法为：FROM scratch。\n同时意味着接下来所写的指令将作为镜像的第一层开始\n语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM <image>\nFROM <image>:<tag>\nFROM <image>:<digest> \n")])])]),t("p",[a._v("三种写法，其中"),t("code",[a._v("<tag>")]),a._v("和"),t("code",[a._v("<digest>")]),a._v(" 是可选项，如果没有选择，那么默认值为latest")]),a._v(" "),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),t("p",[a._v("功能为运行指定的命令\nRUN命令有两种格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('1. RUN <command>\n2. RUN ["executable", "param1", "param2"]\n')])])]),t("p",[a._v("第一种后边直接跟shell命令\n在linux操作系统上默认 /bin/sh -c\n在windows操作系统上默认 cmd /S /C\n第二种是类似于函数调用。\n可将executable理解成为可执行文件，后面就是两个参数。")]),a._v(" "),t("p",[a._v("两种写法比对：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('RUN /bin/bash -c \'source $HOME/.bashrc; echo $HOME\nRUN ["/bin/bash", "-c", "echo hello"]\n')])])]),t("p",[a._v("注意：多行命令不要写多个RUN，原因是Dockerfile中每一个指令都会建立一层.\n多少个RUN就构建了多少层镜像，会造成镜像的臃肿、多层，不仅仅增加了构件部署的时间，还容易出错。\nRUN书写时的换行符是\\")]),a._v(" "),t("h2",{attrs:{id:"cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),t("p",[a._v("功能为容器启动时要运行的命令\n语法有三种写法")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('1. CMD ["executable","param1","param2"]\n2. CMD ["param1","param2"]\n3. CMD command param1 param2\n')])])]),t("p",[a._v("第三种比较好理解了，就时shell这种执行方式和写法\n第一种和第二种其实都是可执行文件加上参数的形式")]),a._v(" "),t("p",[a._v("举例说明两种写法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('CMD [ "sh", "-c", "echo $HOME" ]\nCMD [ "echo", "$HOME" ]\n')])])]),t("p",[a._v('补充细节：这里边包括参数的一定要用双引号，就是",不能是单引号。千万不能写成单引号。\n原因是参数传递后，docker解析的是一个JSON array')]),a._v(" "),t("p",[t("em",[t("strong",[a._v("RUN & CMD")])])]),a._v(" "),t("p",[a._v("不要把RUN和CMD搞混了。\nRUN是构件容器时就运行的命令以及提交运行结果\nCMD是容器启动时执行的命令，在构件时并不运行，构件时紧紧指定了这个命令到底是个什么样子")]),a._v(" "),t("h2",{attrs:{id:"label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[a._v("#")]),a._v(" LABEL")]),a._v(" "),t("p",[a._v("功能是为镜像指定标签\n语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("LABEL <key>=<value> <key>=<value> <key>=<value> ...\n")])])]),t("p",[a._v('一个Dockerfile种可以有多个LABEL，如下：\nLABEL "com.example.vendor"="ACME Incorporated"\nLABEL com.example.label-with-value="foo"\nLABEL version="1.0"\nLABEL description="This text illustrates '),t("br"),a._v('\nthat label-values can span multiple lines."\n但是并不建议这样写，最好就写成一行，如太长需要换行的话则使用\\符号\n如下：')]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('LABEL multi.label1="value1" \\\nmulti.label2="value2" \\\nother="value3"\n')])])]),t("p",[a._v("说明：LABEL会继承基础镜像种的LABEL，如遇到key相同，则值覆盖")]),a._v(" "),t("h2",{attrs:{id:"maintainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintainer"}},[a._v("#")]),a._v(" MAINTAINER")]),a._v(" "),t("p",[a._v("指定作者\n语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MAINTAINER <name>\n")])])]),t("h2",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),t("p",[a._v("暴漏容器运行时的监听端口给外部\nEXPOSE并不会使容器访问主机的端口\n如果想使得容器与主机的端口有映射关系，必须在容器启动的时候加上 -P参数")]),a._v(" "),t("h2",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),t("p",[a._v("功能为设置环境变量\n语法有两种")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1. ENV <key> <value>\n2. ENV <key>=<value> ...\n")])])]),t("p",[a._v("两者的区别就是第一种是一次设置一个，第二种是一次设置多个")]),a._v(" "),t("h2",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" ADD")]),a._v(" "),t("p",[a._v("复制命令\ntar包会自动解压\n如果把虚拟机与容器想象成两台linux服务器的话，那么这个命令就类似于scp，只是scp需要加用户名和密码的权限验证，而ADD不用。\n语法如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('1. ADD <src>... <dest>\n2. ADD ["<src>",... "<dest>"]\n')])])]),t("p",[t("code",[a._v("<dest>")]),a._v("路径的填写可以是容器内的绝对路径，也可以是相对于工作目录的相对路径\n"),t("code",[a._v("<src>")]),a._v("可以是一个本地文件或者是一个本地压缩文件，还可以是一个url\n如果把"),t("code",[a._v("<src>")]),a._v("写成一个url，那么ADD就类似于wget命令\n如以下写法都是可以的：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ADD test relativeDir/ \nADD test /relativeDir\nADD http://example.com/foobar /\n")])])]),t("p",[a._v("尽量不要把"),t("code",[a._v("<scr>")]),a._v("写成一个文件夹，如果"),t("code",[a._v("<src>")]),a._v("是一个文件夹了，复制整个目录的内容,包括文件系统元数据")]),a._v(" "),t("h2",{attrs:{id:"copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[a._v("#")]),a._v(" COPY")]),a._v(" "),t("p",[a._v("复制命令")]),a._v(" "),t("p",[a._v("语法如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('1. COPY <src>... <dest>\n2. COPY ["<src>",... "<dest>"]\n')])])]),t("p",[t("em",[t("strong",[a._v("COPY与ADD的区别")])]),a._v("\nCOPY的"),t("code",[a._v("<src>")]),a._v("只能是本地文件，其他用法一致")]),a._v(" "),t("h2",{attrs:{id:"entrypoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[a._v("#")]),a._v(" ENTRYPOINT")]),a._v(" "),t("p",[a._v("启动时的默认命令\n语法如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('1. ENTRYPOINT ["executable", "param1", "param2"]\n2. ENTRYPOINT command param1 param2\n')])])]),t("p",[a._v("如果从上到下看到这里的话，那么你应该对这两种语法很熟悉啦。\n第二种就是写shell\n第一种就是可执行文件加参数")]),a._v(" "),t("p",[t("em",[t("strong",[a._v("与CMD比较说明（这俩命令太像了，而且还可以配合使用）：")])]),a._v(" "),t("strong",[a._v("1. 相同点：")]),a._v("\n只能写一条，如果写了多条，那么只有最后一条生效\n容器启动时才运行，运行时机相同\n"),t("strong",[a._v("2. 不同点：")]),a._v("\nENTRYPOINT不会被运行的command覆盖，而CMD则会被覆盖\n如果我们在Dockerfile种同时写了ENTRYPOINT和CMD，并且CMD指令不是一个完整的可执行命令，那么CMD指定的内容将会作为ENTRYPOINT的参数\n如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('FROM ubuntu\nENTRYPOINT ["top", "-b"]\nCMD ["-c"]\n')])])]),t("p",[a._v("如果我们在Dockerfile种同时写了ENTRYPOINT和CMD，并且CMD是一个完整的指令，那么它们两个会互相覆盖，谁在最后谁生效\n![](file://F:/OneDrive - st.sdju.edu.cn/博客源码/post-images/1584786006340.jpg)")]),a._v(" "),t("h2",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),t("p",[a._v("可实现挂载功能，可以将内地文件夹或者其他容器种得文件夹挂在到这个容器种\n语法为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('VOLUME ["/data"]\n')])])]),t("p",[a._v('说明：\n["/data"]可以是一个JsonArray ，也可以是多个值。所以如下几种写法都是正确的')]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('VOLUME [\\"/var/log/\\"]\nVOLUME /var/log\nVOLUME /var/log /var/db\n')])])]),t("p",[a._v("一般的使用场景为需要持久化存储数据时\n容器使用的是AUFS，这种文件系统不能持久化数据，当容器关闭后，所有的更改都会丢失。\n所以当数据需要持久化时用这个命令。")]),a._v(" "),t("h2",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[a._v("#")]),a._v(" USER")]),a._v(" "),t("p",[a._v("设置启动容器的用户，可以是用户名或UID，所以，只有下面的两种写法是正确的")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("USER daemo\nUSER UID\n")])])]),t("p",[a._v("注意：如果设置了容器以daemon用户去运行，那么RUN, CMD 和 ENTRYPOINT 都会以这个用户去运行")]),a._v(" "),t("h2",{attrs:{id:"workdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[a._v("#")]),a._v(" WORKDIR")]),a._v(" "),t("p",[a._v("设置工作目录\n语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("WORKDIR /path/to/workdir\n")])])]),t("p",[a._v("设置工作目录，对RUN,CMD,ENTRYPOINT,COPY,ADD生效。如果不存在则会创建，也可以设置多次。\n如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN pwd\n")])])]),t("p",[a._v("pwd执行的结果是/a/b/c\nWORKDIR也可以解析环境变量\n如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ENV DIRPATH /path\nWORKDIR $DIRPATH/$DIRNAME\nRUN pwd\n")])])]),t("p",[a._v("pwd的执行结果是/path/$DIRNAME")]),a._v(" "),t("h2",{attrs:{id:"arg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[a._v("#")]),a._v(" ARG")]),a._v(" "),t("p",[a._v("设置变量\n语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ARG <name>[=<default value>]\n")])])]),t("p",[a._v("设置变量命令，ARG命令定义了一个变量，在docker build创建镜像的时候，使用 --build-arg "),t("code",[a._v("<varname>=<value>")]),a._v("来指定参数\n如果用户在build镜像时指定了一个参数没有定义在Dockerfile种，那么将有一个Warning\n提示如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[Warning] One or more build-args [foo] were not consumed.\n")])])]),t("p",[a._v("我们可以定义一个或多个参数，如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM busybox\nARG user1\nARG buildno\n...\n")])])]),t("p",[a._v("也可以给参数一个默认值：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM busybox\nARG user1=someuser\nARG buildno=1\n...\n")])])]),t("p",[a._v("如果我们给了ARG定义的参数默认值，那么当build镜像时没有指定参数值，将会使用这个默认值")]),a._v(" "),t("h2",{attrs:{id:"onbuild"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[a._v("#")]),a._v(" ONBUILD")]),a._v(" "),t("p",[a._v("语法：\n"),t("code",[a._v("ONBUILD [INSTRUCTION]")]),a._v("\n这个命令只对当前镜像的子镜像生效。\n比如当前镜像为A，在Dockerfile种添加：\n"),t("code",[a._v("ONBUILD RUN ls -al")]),a._v("\n这个 ls -al 命令不会在A镜像构建或启动的时候执行")]),a._v(" "),t("p",[a._v("此时有一个镜像B是基于A镜像构建的，那么这个ls -al 命令会在B镜像构建的时候被执行。")]),a._v(" "),t("h2",{attrs:{id:"stopsignal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stopsignal"}},[a._v("#")]),a._v(" STOPSIGNAL")]),a._v(" "),t("p",[a._v("STOPSIGNAL命令是的作用是当容器推出时给系统发送什么样的指令\n语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("STOPSIGNAL signal\n")])])]),t("h2",{attrs:{id:"healthcheck"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck"}},[a._v("#")]),a._v(" HEALTHCHECK")]),a._v(" "),t("p",[a._v("容器健康状况检查命令\n语法有两种：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1. HEALTHCHECK [OPTIONS] CMD command\n2. HEALTHCHECK NONE\n")])])]),t("p",[a._v("第一个的功能是在容器内部运行一个命令来检查容器的健康状况\n第二个的功能是在基础镜像中取消健康检查命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[OPTIONS]的选项支持以下三中选项：\n\n    --interval=DURATION 两次检查默认的时间间隔为30秒\n\n    --timeout=DURATION 健康检查命令运行超时时长，默认30秒\n\n    --retries=N 当连续失败指定次数后，则容器被认为是不健康的，状态为unhealthy，默认次数是3\n注意：\nHEALTHCHECK命令只能出现一次，如果出现了多次，只有最后一个生效。\nCMD后边的命令的返回值决定了本次健康检查是否成功，具体的返回值如下：\n\n0: success - 表示容器是健康的\n\n1: unhealthy - 表示容器已经不能工作了\n\n2: reserved - 保留值\n")])])]),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("HEALTHCHECK --interval=5m --timeout=3s \\\nCMD curl -f http://localhost/ || exit 1\n")])])]),t("p",[a._v("健康检查命令是："),t("code",[a._v("curl -f http://localhost/ || exit 1")])]),a._v(" "),t("p",[a._v("两次检查的间隔时间是5秒")]),a._v(" "),t("p",[a._v("命令超时时间为3秒")])])}),[],!1,null,null,null);e.default=r.exports}}]);