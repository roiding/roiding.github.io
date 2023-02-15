---
title: 多java环境共存
head:
  - - meta
    - name: keywords
      content: 多java环境共存
---
# macos
1. 先分别安装jdk8和jdk17的pkg
2. 通过`/usr/libexec/java_home -V`查看安装的java版本路径
3. 在当前用户下新建`.bash_profile`文件，内容如下
```bash
# JDK 配置
export JAVA_17_HOME=/Library/Java/JavaVirtualMachines/jdk-17.0.4.jdk/Contents/Home
export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home

# 默认JDK版本
export JAVA_HOME=$JAVA_17_HOME

# 多版本切换（设置别名，终端输入jdk8/jdk17 自动切换）
alias jdk17="export JAVA_HOME=$JAVA_17_HOME"
alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
```
4. 通过`jdk8`和`jdk17`切换java环境