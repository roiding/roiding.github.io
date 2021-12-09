---
title: Mysql
---
## 锁
### 全局锁
全局锁的典型使用场景是，做全库逻辑备份。
命令：`Flush tables with read lock`
推荐是用`mysqldump`导数时，加上`–single-transaction`，启动一个事务，来触发MVCC。
### 表级锁
表锁的语法是 `lock tables … read/write`
另一类表级的锁是`MDL（metadata lock)` <span style="color:red">当对一个表做增删改查操作的时候，加MDL读锁；当要对表做结构变更操作的时候，加MDL写锁</span>
### 行锁
在InnoDB事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放。这个就是两阶段锁协议

## MVCC具体实现

1. Inodb会对每个表增加三个隐藏字段
    * DB_TRX_ID 当前行事务ID
    * DB_ROW_ID 如果没有设置主键，会生成该隐藏主键字段
    * DB_ROLL_PTR 对应到undolog中的回滚版本
    
2. Undolog中会存每次修改记录的前记录,存放的是一个链表

3. readView 事务在进行快照读的时候产生的读视图
    * TRX_LIST 系统活跃事务id列表
    * UP_LIMIT_ID 列表中最小的事务id
    * LOW_LIMIT_ID  系统尚未分配的下一个事务id

## 重要点
* redo log 主要节省的是随机写磁盘的IO消耗（转成顺序写），而change buffer主要节省的则是随机读磁盘的IO消耗。