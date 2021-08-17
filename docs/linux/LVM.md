---
title: 逻辑卷管理LVM
---
## 概述
逻辑卷之前我们已经用标准分区在硬盘上创建了文件系统，但是你只能在同一个物理硬盘的可用范围内调整分区大小，如果硬盘没有地方了，你就必须要弄一块更大的硬盘，然后手动将数据移动到新的硬盘上。但是，这时候可以通过将另外一个硬盘上的分区加入已有的文件系统，动态的添加存储空间，LVM（逻辑卷管理器）就是用来做这个的，它可以让你无需重建整个文件系统的情况下，轻松的管理磁盘空间。
## 逻辑卷管理布局
* **物理卷**：在逻辑卷管理的世界里，硬盘分区称作物理卷（PV）每个物理卷都是硬盘上物理分区的映射

* **卷组**：把多个物理卷集中在一起就形成一个卷组（VG），逻辑卷管理系统将卷组视为一个物理硬盘，事实上是分布在多个物理硬盘上的多个物理分区组成的

* **逻辑卷**：整个结构最后一层就是逻辑卷（LV）它为linux提供了创建文件系统的分区环境，类似于物理硬盘分区，linux也将逻辑卷视为物理分区

* PE（physical extents）：PV物理卷中可以分配的最小存储单元，PE的大小是可以指定的，默认为4MB

* LE（logical extent）： LV逻辑卷中可以分配的最小存储单元，在同一个卷组中，LE的大小和PE是相同的，并且一一对应

* 可以使用任意一种标准的linux文件系统格式化逻辑卷，再将它挂载到系统中使用

## LVM1和LVM2
linux的LVM有两个可用的版本：

* LVM1：最初的LVM包于1998年发布，只能用于linux内核2.4版本，它仅提供了基本的逻辑卷管理功能
* <span style="color:blue">LVM2：LVM的更新版本，可用于linux内核2.6版本，现在的CentOS都默认安装的是LVM2版本，它在标准的LVM1功能外提供了额外的功能：<br/>
  1、快照 2、条带化 3、镜像</span>

## 使用LVM管理逻辑卷

实验环境：虚拟机共添加5块硬盘，做如下分配

| 硬盘     | 总大小 | 卷组 |
| -------- | ------ | ---- |
| /dev/sdb | 100G   | vg01 |
| /dev/sdc | 100G   | vg01 |
| /dev/sdd | 20G    | vg01 |
| /dev/sde | 1G     | vg02 |
| /dev/sdf | 1G     | vg02 |

### 物理卷

#### 创建物理卷

<span style="color:magenta;font-size:20px">pvcreate：创建物理卷</span>
<span style="color:magenta;font-size:20px">pvscan：扫描物理卷信息</span>（包含哪些物理硬盘和大小还有总览）

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702140518199.png)

<span style="color:magenta;font-size:20px">pvdisplay：显示物理卷详情</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702141054857.png)

#### 删除物理卷

<span style="color:magenta;font-size:20px">pvremove：删除物理卷</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\2020070214062930.png)

### 卷组
#### 创建卷组

<span style="color:magenta;font-size:20px">vgcreate：创建卷组（后跟卷组名称）</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702140858146.png)

<span style="color:magenta;font-size:20px">vgdisplay：显示卷组详情</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702140954804.png)

#### 扩展卷组

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702142823706.png)

<span style="color:magenta;font-size:20px">vgextend：扩展卷组</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702143601153.png)

#### 删除卷组

<span style="color:magenta;font-size:20px">vgremove：删除卷组</span>

删除卷组是删除整个卷组，跟把物理卷从卷组中移除的概念是不一样的

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702150027152.png)

#### 减小卷组

减小卷组之前如果卷组划分了逻辑卷并且已经储存了数据，必须先迁移数据才能做减小的操作，现在给虚拟机新添加两块1G大小的硬盘sde和sdf，给sde划分逻辑卷，大小500M，格式化挂载到系统使用，并且在里面写入一些数据

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702183305236.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702183400211.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702183457884.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702183745420.png)

将sdf这块硬盘也加入sde所在的卷组vg02，这样，我们可以把sde的数据迁移到sdf上

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702184638732.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702183838569.png)

<span style="color:magenta;font-size:20px">pvmove：迁移卷组数据</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702183931387.png)

<span style="color:magenta;font-size:20px">vgreduce：减小卷组</span>

sde没有数据了之后就可以把它从卷组vg02中移除了，卷组就减小了，实际上现在的数据已经被转移到/dev/sdf上了，不影响逻辑卷的使用，这也是它灵活的地方

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702184039727.png)

### 逻辑卷

#### 创建逻辑卷

<span style="color:magenta;font-size:20px">lvcreate：创建逻辑卷（卷组名写在最后）</span>

- -L 50G 指定大小为50G
- -n 指定名称

<span style="color:magenta;font-size:20px">lvdisplay：显示逻辑卷详情</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702141318606.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702230653820.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702230901734.png)

#### 删除逻辑卷

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702200147473.png)

<span style="color:magenta;font-size:20px">lvremove：删除逻辑卷</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702145714815.png)

#### 扩展逻辑卷

<span style="color:magenta;font-size:20px">lvextend：扩展逻辑卷大小</span>

- -L +50G 指定大小增加50G
- -L 50G 指定大小为50G

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702142050703.png)

<span style="color:red;font-size:20px">逻辑卷没有减小操作，不建议减小，会出问题</span>

#### 格式化逻辑卷

跟物理磁盘一样，划分好逻辑卷之后也是需要先格式化文件系统然后挂载到系统中才可以像一块物理硬盘一样使用的。这里分别用xfs和ext4两种文件系统来格式化不同的逻辑卷，发现他们的不同了吗？

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702144141838.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702144634970.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702144859587.png)

#### 扩容文件系统

在实际的应用中，光扩展逻辑卷是没有任何意义的，因为只扩展了逻辑卷之后，扩展后的那部分也是不能够被系统使用的，所以还需要扩展文件系统，其实就是使扩容生效，否则df -Th是看不到的

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702194336239.png)

扩展逻辑卷之前需要确定所属卷组剩余空间大小，扩展的大小应该要小于剩余卷组空间的大小

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702193420948.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702193459370.png)

<span style="color:red;font-size:20px">xfs_growfs：xfs文件系统使用该命令使扩容生效</span>
<span style="color:red;font-size:20px">resize2fs：ext文件系统使用该命令使扩容生效</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702193745945.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\2020070219381958.png)

#### 逻辑卷快照

LVM2的逻辑卷具有快照功能，就是将逻辑卷的某一时刻的状态保存下来也做成一种特殊的逻辑卷叫做快照卷，挂载到系统中，但是逻辑卷之后做的操作快照卷不会同步，常用于数据库备份还原的场景

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702235943335.png)

<span style="color:red;font-size:20px">快照卷跟创建普通的逻辑卷方式几乎一样，只是最后需要指定是哪一个逻辑卷的快照卷，用-s参数</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702232155660.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\2020070223240888.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200702232631459.png)

<span style="color:red;font-size:20px">注意：如果是xfs的逻辑卷做快照卷挂载时，需要mount -o nouuid，因为xfs的快照不支持uuid</span>

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200703000045247.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200703000149907.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200703000239811.png)

## 命令关键字总结

|        | **扫描** |   创建   |   查看    |   删除   |   扩展   |      缩减      |
| ------ | :------: | :------: | :-------: | :------: | :------: | :------------: |
| 物理卷 |  pvscan  | pvcreate | pvdisplay | pvremove |    无    |       无       |
| 卷组   |  vgscan  | vgcreate | vgdisplay | vgremove | vgextend |    vgreduce    |
| 逻辑卷 |  lvscan  | lvcreate | lvdisplay | lvremove | lvextend | 有命令但不推荐 |



## 两种方式的扫描命令

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200703004856161.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200703004924562.png)

![](D:\丁然\自己的\roiding.github.io\docs\.vuepress\public\linux\LVM\20200703004951231.png)

