---
title: linux基本命令操作
head:
  - - meta
    - name: keywords
      content: linux基本命令操作
---

## 命令替换

* 在bash中，`$()`与`` ` ` `` （反引号）都是用来作命令替换的。

  <span style="color:red">`$()`比较直观，但是`$()`不一定所有的linux系统都支持。</span>

## ${ }变量替换

* 一般情况下，$var与${var}是没有区别的，但是用${ }会比较精确的界定变量名称的范围



````bash
先赋值一个变量为一个路径，如下：
file=/dir1/dir2/dir3/my.file.txt
````

### **取路径、文件名、后缀**

|    命令     |              解释               |            结果            |
| :---------: | :-----------------------------: | :------------------------: |
| ${file#*/}  |  拿掉第一条 / 及其左边的字符串  | dir1/dir2/dir3/my.file.txt |
| ${file##*/} | 拿掉最后一条 / 及其左边的字符串 |        my.file.txt         |
| ${file#*.}  |  拿掉第一个 . 及其左边的字符串  |          file.txt          |
| ${file##*.} | 拿掉最后一个 . 及其左边的字符串 |            txt             |
| ${file%/*}  | 拿掉最后一条 / 及其右边的字符串 |      /dir1/dir2/dir3       |
| ${file%%/*} |  拿掉第一条 / 及其右边的字符串  |           (空值)           |
| ${file%.*}  | 拿掉最后一个 . 及其右边的字符串 |  /dir1/dir2/dir3/my.file   |
| ${file%%.*} |  拿掉第一个 . 及其右边的字符串  |    /dir1/dir2/dir3/my￼     |

------

<span style="color:red">**记忆方法**</span>

```
# 是去掉左边(在键盘上 # 在 $ 之左边)
% 是去掉右边(在键盘上 % 在 $ 之右边)
单一符号是最小匹配;两个符号是最大匹配
*是用来匹配不要的字符，也就是想要去掉的那部分
还有指定字符分隔号，与*配合，决定取哪部分
```

### **取子串及替换**      

|       命令        |                解释                |              结果              |
| :---------------: | :--------------------------------: | :----------------------------: |
|    ${file:0:5}    |       提取最左边的 5 个字节        |             /dir1              |
|    ${file:5:5}    | 提取第 5 个字节右边的连续 5 个字节 |             /dir2              |
| ${file/dir/path}  |      将第一个 dir 提换为 path      |  /path1/dir2/dir3/my.file.txt  |
| ${file//dir/path} |       将全部 dir 提换为 path       | /path1/path2/path3/my.file.txt |
|     ${#file}      |            获取变量长度            |               27               |

### **根据状态为变量赋值**

|       **命令**       |                       **解释**                        |       **备注**       |
| :------------------: | :---------------------------------------------------: | :------------------: |
| ${file-my.file.txt}  |      若 $file 没设定,则使用 my.file.txt 作传回值      | 空值及非空值不作处理 |
| ${file:-my.file.txt} | 若 $file 没有设定或为空值,则使用 my.file.txt 作传回值 |   非空值时不作处理   |
| ${file+my.file.txt}  |  若$file 设为空值或非空值,均使用my.file.txt作传回值   |   没设定时不作处理   |
| ${file:+my.file.txt} |     若 $file 为非空值,则使用 my.file.txt 作传回值     | 没设定及空值不作处理 |
|     ${file=txt}      |   若 $file 没设定,则回传 txt ,并将 $file 赋值为 txt   | 空值及非空值不作处理 |
|     ${file:=txt}     | 若 $file 没设定或空值,则回传 txt ,将 $file 赋值为txt  |   非空值时不作处理   |
| ${file?my.file.txt}  |    若 $file 没设定,则将 my.file.txt 输出至 STDERR     | 空值及非空值不作处理 |
| ${file:?my.file.txt} |   若 $file没设定或空值,则将my.file.txt输出至STDERR    |   非空值时不作处理   |

### 数组

````bash
A="a b c def"   # 定义字符串
A=(a b c def)   # 定义字符数组
````

| **命令** |             **解释**              | **结果**  |
| :------: | :-------------------------------: | :-------: |
| ${A[@]}  |         返回数组全部元素          | a b c def |
| ${A[*]}  |               同上                | a b c def |
| ${A[0]}  |        返回数组第一个元素         |     a     |
| ${#A[@]} |        返回数组元素总个数         |     4     |
| ${#A[*]} |               同上                |     4     |
| ${#A[3]} | 返回第四个元素的长度，即def的长度 |     3     |
| A[3]=xzy |  则是将第四个组数重新定义为 xyz   |           |

### $(( ))与整数运算

|   符号   |         **功能**          |
| :------: | :-----------------------: |
| \+ - * / |   分别为加、减、乘、除    |
|    %     |         余数运算          |
| & \|^ !  | 分别为“AND、OR、XOR、NOT” |

````bash
在 $(( )) 中的变量名称,可于其前面加 $ 符号来替换,也可以不用。
[root@localhost ~]# echo $((2*3))
6
[root@localhost ~]# a=5;b=7;c=2
[root@localhost ~]# echo $((a+b*c))
19
[root@localhost ~]# echo $(($a+$b*$c))
19
````

### **进制转换**

**$(( ))可以将其他进制转成十进制数显示出来。用法如下：
`echo $((N#xx))`
其中，N为进制，xx为该进制下某个数值，命令执行后可以得到该进制数转成十进制后的值。**

````bash
[root@localhost ~]# echo $((2#110))
6
[root@localhost ~]# echo $((16#2a))
42
[root@localhost ~]# echo $((8#11))
9
````

### (())重定义变量值

````bash
[root@localhost ~]# a=5;b=7
[root@localhost ~]# ((a++))
[root@localhost ~]# echo $a
6
[root@localhost ~]# ((a--));echo $a
5
[root@localhost ~]# ((a<b));echo $?
0
[root@localhost ~]# ((a>b));echo $?
1
````

## shell脚本中自动获取 GitHub 最新版本号

利用 `GitHub API` 获取最新 `Releases` 的版本号，以 `iina` 为例：

````bash
wget -qO- -t1 -T2 "https://api.github.com/repos/lhc70000/iina/releases/latest" | grep "tag_name" | head -n 1 | awk -F ":" '{print $2}' | sed 's/\"//g;s/,//g;s/ //g'
````

或者借助第三方工具 `jq` ：

````
wget -qO- -t1 -T2 "https://api.github.com/repos/lhc70000/iina/releases/latest" | jq -r '.tag_name'
````

### 代码解释

#### 主字段

`https://api.github.com/repos/lhc70000/iina/releases/latest` 这里用的是 GitHub 的官方 API，格式为 `https://api.github.com/repos/{项目名}/releases/latest` 打开上述链接后，可见包含下述字段的内容：

````
"html_url": "https://github.com/lhc70000/iina/releases/tag/v0.0.15.1",
"id": 10774475,
"node_id": "MDc6UmVsZWFzZTEwNzc0NDc1",
"tag_name": "v0.0.15.1",
"target_commitish": "0.0.15.1",
"name": "v0.0.15.1",
````

那么这里的 `tag_name` 后面的值就是我们所需要的东西。

#### wget参数

```
wget -qO- -t1 -T2` ，在这里我们使用了 4 个参数，分别是 `q` , `O-` , `t1` , `T2
```

- `-q` : `q` 就是 `quiet` 的意思了，没有该参数将会显示从请求到输出全过程的所有内容，这肯定不是我们想要的。
- `-O-`: `-O` 是指把文档写入文件中，而 `-O-` 是将内容写入标准输出，而不保存为文件。（注：这里是大写英文字母 `O` (Out)，不是数字 `0` ）
- `-t1` : 设定最大尝试链接次数为 `1` 次，防止失败后反复获取，导致后续脚本无法执行。
- `-T2` : 设定响应超时的秒数为 `2` 秒，防止失败后反复获取，导致后续脚本无法执行。

#### 筛选参数

- `jq -r '.tag_name'` ：该命令需要先安装 `jq` ，`.tag_name` 取得该键值，`-r` 参数删除键值中的 `"`
- `grep "tag_name"` : `grep` 是 Linux 一个强大的文本搜索工具，在本代码中输出 `tag_name` 所在行，即输出 `"tag_name": "v0.0.15.1",`
- `head -n 1` : `head -n` 用于显示输出的行数，考虑到某些项目可能存在多个不同版本的 `tag_name` ，这里我们只要第一个。
- `awk -F ":" '{print $2}'` : `awk` 主要用于文本分析，在这里指定 `:` 为分隔符，将该行切分成多列，并输出第二列。于是我们得到了 `(空格)"v0.0.15.1",`
- `sed 's/\"//g;s/,//g;s/ //g'` : 在这里 `sed` 用于数据查找替换，如 `sed 's/要被取代的字串/新的字串/g'` ，因此本段命令可分为 3 个，以 `;` 分隔。`s/\"//g` 即将 `"` 删除（反斜杠是为了防止引号被转义），以此类推，最终留下我们需要的内容：`v0.0.15.1` 。

## 日志分析

#### 找到第一次出现某个错误的地方

```bash
grep -B 50 "Connection reset by peer" catalina.out |head -n 101
```

#### ps 日期格式化
```bash
date -d "`ps -eo lstart,pid,cmd |grep 27921|grep -v grep|awk '{print $1,$2,$3,$4,$5}'`" "+%Y-%m-%d:%H:%M:%S"
```
