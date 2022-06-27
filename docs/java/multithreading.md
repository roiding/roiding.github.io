---
title: 多线程
head:
  - - meta
    - name: keywords
      content: Java多线程整理
---
## 常用的多线程类
### CountDownLatch
需要等待多个线程都执行完，再执行方法 **（只能一次性使用）**
### Semaphore
控制并发数量`acquire`和`release` 类似加锁上锁
### CyclicBarrier
当await的数到了指定数量才执行下面的方法 **（和CountDownLatch相反，这个是加，那个是减，这个可以多次使用）**
### Guava中的并发控制类-RateLimiter
和`Semaphore`类似,用于限流
Semaphore只能控制总数，RateLimiter可以控制流速