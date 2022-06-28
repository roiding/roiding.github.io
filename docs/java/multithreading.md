---
title: 多线程
sidebarDepth: 5
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

## CompletableFuture >JDK1.8
### 创建方式
#### 默认线程池
```java
CompletableFuture<String> future = new CompletableFuture<>();
```
默认使用 ForkJoinPool.commonPool()，commonPool是一个会被很多任务 共享 的线程池，比如同一 JVM 上的所有 CompletableFuture、并行 Stream 都将共享 commonPool，commonPool 设计时的目标场景是运行 非阻塞的 CPU 密集型任务，为最大化利用 CPU，其线程数默认为 CPU 数量 - 1。
#### 自定义线程池
```java
ThreadPoolExecutor pool = new ThreadPoolExecutor(2, 4, 3,
                TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(3),
                new ThreadPoolExecutor.DiscardOldestPolicy());
CompletableFuture.runAsync(() -> System.out.println("Hello World!"), pool);
```
### API详解
#### 构建异步任务
##### runAsync
进行数据处理，接收前一步骤传递的数据，无返回值。
```java
public static void runAsync() {
    //使用默认线程池
    CompletableFuture cf = CompletableFuture.runAsync(() -> System.out.println("Hello World!"));
    assertFalse(cf.isDone());    
    //使用自定义线程池
    CompletableFuture.runAsync(() -> System.out.println("Hello World!"),                                                 Executors.newSingleThreadExecutor());
    }
```
##### supplyAsync
进行数据处理，接收前一步骤传递的数据，处理加工后返回。返回数据类型可以和前一步骤返回的数据类型不同。
```java
public static void supplyAsync() throws ExecutionException, InterruptedException {
        CompletableFuture<String> f = CompletableFuture.supplyAsync(() -> {
            try {
                //ForkJoinPool.commonPool-worker-1线程
                System.out.println(Thread.currentThread().getName());
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "hello";
        });
        //阻塞等待3秒 
        String result = f.get();
        //main线程
        System.out.println(Thread.currentThread().getName());
        System.out.println(result);
}
```
#### 单任务结果消费
##### thenApply
在前一个阶段上应用thenApply函数，将上一阶段完成的结果作为当前阶段的入参
```java
public static void thenApply() throws ExecutionException, InterruptedException {
    CompletableFuture cf = CompletableFuture.completedFuture("message").thenApplyAsync(s -> {
        System.out.println(s);
        return s.toUpperCase();
    }).thenApply(s->{
        System.out.println(s);
        return s + ":body";
    });
    System.out.println(cf.get());
}
```
##### thenAccept
消费前一阶段的结果
```java
public static void thenAccept() throws InterruptedException {
    CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> {
        return "message";
    }).thenAccept((consumer) -> {
        System.out.println(consumer);
    });
}
```
#### thenRun
当上一阶段完成后，执行本阶段的任务
```java
public static void thenRun() throws InterruptedException {
    CompletableFuture.supplyAsync(() -> {
        //执行异步任务
        System.out.println("执行任务");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return "success";
    }).thenRun(() -> {
        // Computation Finished.
        System.out.println("上一阶段任务执行完成");
    });
    Thread.sleep(2000);
}
```
#### 合并结果消费
##### thenCombine
合并另外一个任务，两个任务都完成后，执行BiFunction，入参为两个任务结果，返回新结果
```java
public static void thenCombine() {
    CompletableFuture<String> cfA = CompletableFuture.supplyAsync(() -> {
        System.out.println("processing a...");
        return "hello";
    });
    CompletableFuture<String> cfB = CompletableFuture.supplyAsync(() -> {
        System.out.println("processing b...");
        return " world";
    });
    CompletableFuture<String> cfC = CompletableFuture.supplyAsync(() -> {
        System.out.println("processing c...");
        return ", I'm CodingTao!";
    });
    cfA.thenCombine(cfB, (resultA, resultB) -> {
        System.out.println(resultA + resultB);  // hello world
        return resultA + resultB;
    }).thenCombine(cfC, (resultAB, resultC) -> {
        System.out.println(resultAB + resultC); // hello world, I'm CodingTao!
        return resultAB + resultC;
    });
}
```
##### thenAcceptBoth
合并另外一个任务，两个任务都完成后，执行这个方法等待第一个阶段的完成(大写转换)， 它的结果传给一个指定的返回CompletableFuture函数，它的结果就是返回的CompletableFuture的结果，入参为两个任务结果，不返回新结果
```java
private static void thenAcceptBoth() {
    CompletableFuture<String> cfA = CompletableFuture.supplyAsync(() -> "resultA");
    CompletableFuture<String> cfB = CompletableFuture.supplyAsync(() -> "resultB");
    cfA.thenAcceptBoth(cfB, (resultA, resultB) -> {
        //resultA,resultB
        System.out.println(resultA+","+resultB); 
    });
}
```
##### runAfterBoth
合并另外一个任务，两个任务都完成后，执行Runnable，注意，这里的两个任务是同时执行
```java
private static void runAfterBoth() {
    CompletableFuture<String> cfA = CompletableFuture.supplyAsync(() -> {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("process a");
        return "resultA";
    });
    CompletableFuture<String> cfB = CompletableFuture.supplyAsync(() -> {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("process b");
        return "resultB";
    });
    cfB.runAfterBoth(cfA, () -> {
        //resultA,resultB
        System.out.println("任务A和任务B同时完成");
    });
    try {
        Thread.sleep(6000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```
#### 任一结果消费
##### applyToEither
其中任一任务完成后，执行Consumer，消费结果，入参为已完成的任务结果。不返回新结果，要求两个任务结果为同一类型
```java
private static void applyToEither() throws ExecutionException, InterruptedException {
    CompletableFuture<String> futureA = CompletableFuture.supplyAsync(() -> {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return "通过方式A获取商品a";
    });
    CompletableFuture<String> futureB = CompletableFuture.supplyAsync(() -> {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return "通过方式B获取商品a";
    });
    CompletableFuture<String> futureC = futureA.applyToEither(futureB, product -> "结果:" + product);
    //结果:通过方式A获取商品a
    System.out.println(futureC.get());
}
```
##### acceptEither
其中任一任务完成后，执行Runnable，消费结果，无入参。不返回新结果，不要求两个任务结果为同一类型
##### runAfterEither
#### 级联任务
##### thenCompose
当原任务完成后，以其结果为参数，返回一个新的任务（而不是新结果，类似flatMap）
```java
private static void thenCompose() {
    String original = "Message";
    CompletableFuture cf = CompletableFuture.completedFuture(original).thenApply(s -> delayedUpperCase(s))
            .thenCompose(upper -> CompletableFuture.completedFuture(original).thenApply(s -> delayedLowerCase(s))
                    .thenApply(s -> upper + s));
    // MESSAGEmessage
    System.out.println(cf.join());
}
```
#### 单任务结果或异常消费
##### handle
任务完成后执行BiFunction，结果转换，入参为结果或者异常，返回新结果
```java
private static void handle() {
    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "resultA")
            .thenApply(resultA -> resultA + " resultB")
            // 任务 C 抛出异常
            .thenApply(resultB -> {throw new RuntimeException();})
            // 处理任务 C 的返回值或异常
            .handle(new BiFunction<Object, Throwable, Object>() {
                @Override
                public Object apply(Object re, Throwable throwable) {
                    if (throwable != null) {
                        return "errorResultC";
                    }
                    return re;
                }
            })
            .thenApply(resultC -> {
                System.out.println("resultC:" + resultC);
                return resultC + " resultD";
            });
    System.out.println(future.join());
}
```
##### whenComplete
任务完成后执行BiConsumer，结果消费，入参为结果或者异常，不返回新结果
```java
private static void whenComplete() throws ExecutionException, InterruptedException {
    // 创建异步执行任务:
    CompletableFuture<Double> cf = CompletableFuture.supplyAsync(()->{
        System.out.println(Thread.currentThread()+"job1 start,time->"+System.currentTimeMillis());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
        if(true){
            throw new RuntimeException("test");
        }else{
            System.out.println(Thread.currentThread()+"job1 exit,time->"+System.currentTimeMillis());
            return 1.2;
        }
    });
    //cf执行完成后会将执行结果和执行过程中抛出的异常传入回调方法
    // 如果是正常执行，a=1.2，b则传入的异常为null
    //如果异常执行，a=null，b则传入异常信息
    CompletableFuture<Double> cf2=cf.whenComplete((a,b)->{
        System.out.println(Thread.currentThread()+"job2 start,time->"+System.currentTimeMillis());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
        }
        if(b!=null){
            System.out.println("error stack trace->");
            b.printStackTrace();
        }else{
            System.out.println("run succ,result->"+a);
        }
        System.out.println(Thread.currentThread()+"job2 exit,time->"+System.currentTimeMillis());
    });
    //等待子任务执行完成
    System.out.println("main thread start wait,time->"+System.currentTimeMillis());
    //如果cf是正常执行的，cf2.get的结果就是cf执行的结果
    //如果cf是执行异常，则cf2.get会抛出异常
    System.out.println("run result->"+cf2.get());
    System.out.println("main thread exit,time->"+System.currentTimeMillis());
}
```
##### exceptionally
任务异常，则执行Function，异常转换，入参为原任务的异常信息，若原任务无异常，则返回原任务结果，即不执行转换
#### 合并多个任务
##### allOf
合并多个complete为一个，等待全部完成
```java
 // 创建异步执行任务:
        CompletableFuture<Double> cf = CompletableFuture.supplyAsync(()->{
            System.out.println(Thread.currentThread()+" start job1,time->"+System.currentTimeMillis());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
            }
            System.out.println(Thread.currentThread()+" exit job1,time->"+System.currentTimeMillis());
            return 1.2;
        });
        CompletableFuture<Double> cf2 = CompletableFuture.supplyAsync(()->{
            System.out.println(Thread.currentThread()+" start job2,time->"+System.currentTimeMillis());
            try {
                Thread.sleep(1500);
            } catch (InterruptedException e) {
            }
            System.out.println(Thread.currentThread()+" exit job2,time->"+System.currentTimeMillis());
            return 3.2;
        });
        CompletableFuture<Double> cf3 = CompletableFuture.supplyAsync(()->{
            System.out.println(Thread.currentThread()+" start job3,time->"+System.currentTimeMillis());
            try {
                Thread.sleep(1300);
            } catch (InterruptedException e) {
            }
//            throw new RuntimeException("test");
            System.out.println(Thread.currentThread()+" exit job3,time->"+System.currentTimeMillis());
            return 2.2;
        });
        //allof等待所有任务执行完成才执行cf4，如果有一个任务异常终止，则cf4.get时会抛出异常，都是正常执行，cf4.get返回null
        //anyOf是只有一个任务执行完成，无论是正常执行或者执行异常，都会执行cf4，cf4.get的结果就是已执行完成的任务的执行结果
        CompletableFuture cf4=CompletableFuture.allOf(cf,cf2,cf3).whenComplete((a,b)->{
            if(b!=null){
                System.out.println("error stack trace->");
                b.printStackTrace();
            }else{
                System.out.println("run succ,result->"+a);
            }
        });
        System.out.println("main thread start cf4.get(),time->"+System.currentTimeMillis());
        //等待子任务执行完成
        System.out.println("cf4 run result->"+cf4.get());
        System.out.println("main thread exit,time->"+System.currentTimeMillis());
```
获取返回值方法
```java
public <T> CompletableFuture<List<T>> allOf(List<CompletableFuture<T>> futuresList) {
    CompletableFuture<Void> allFuturesResult =
            CompletableFuture.allOf(futuresList.toArray(new CompletableFuture[futuresList.size()]));
    return allFuturesResult.thenApply(v ->
            futuresList.stream().
                    map(future -> future.join()).
                    collect(Collectors.<T>toList())
    );
}
```
##### anyOf
合并多个complete为一个，等待其中之一完成
```java
private static void anyOf() throws ExecutionException, InterruptedException {
        CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                throw new IllegalStateException(e);
            }
            return "Result of Future 1";
        });

        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                throw new IllegalStateException(e);
            }
            return "Result of Future 2";
        });

        CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(3);
            } catch (InterruptedException e) {
                throw new IllegalStateException(e);
            }
            return "Result of Future 3";
        });
        CompletableFuture<Object> anyOfFuture = CompletableFuture.anyOf(future1, future2, future3);
        System.out.println(anyOfFuture.get()); // Result of Future 2
    }
```
### 其他相关api
#### Future接口
1. isDone()
    
    判断任务是否完成。三种完成情况：normally（正常执行完毕）、exceptionally（执行异常）、via cancellation（取消）

2. get()
    
    阻塞获取结果或抛出受检测异常，需要显示进行try...catch处理。

3. get(long timeout,TimeUnit unit)
    
    超时阻塞获取结果

4. cancel(boolean mayInterruptIfRunning)
    
    取消任务，若一个任务未完成，则以CancellationException异常。其相关未完成的子任务也会以CompletionException结束

5. isCancelled()
    
    是否已取消，在任务正常执行完成前取消，才为true。否则为false。
#### CompletableFuture接口
1. join

    阻塞获取结果或抛出非受检异常。

2. getNow(T valueIfAbsent)

    若当前任务无结果，则返回valueIfAbsent，否则返回已完成任务的结果。

3. complete(T value)

    设置任务结果，任务正常结束，之后的任务状态为已完成。

4. completeExceptionally(Throwable ex)

    设置任务异常结果，任务异常结束，之后的任务状态为已完成。

5. isCompletedExceptionally()
​ 判断任务是否异常结束。异常可能的原因有：取消、显示设置任务异常结果、任务动作执行异常等。

6. getNumberOfDependents()
​ 返回依赖当前任务的任务数量，主要用于监控。

7. orTimeout(long timeout,TimeUnit unit) **jdk9**

    设置任务完成超时时间，若在指定时间内未正常完成，则任务会以异常(TimeoutException)结束。

8. completeOnTimeout(T value,long timeout,TimeUnit unit) **jdk9**

    设置任务完成超时时间，若在指定时间内未正常完成，则以给定的value为任务结果

### 应用
1. API网关做接口的聚合
异步调用用户信息获取和订单信息获取，然后聚合返回
```java
//这两个参数从外部获得
Long userId = 10006L;
String orderId = "XXXXXXXXXXXXXXXXXXXXXX";
//从用户服务获取用户信息
UserInfo userInfo = userService.getUserInfo(userId);
//从用订单务获取订单信息
OrderInfo orderInfo = orderService.getOrderInfo(orderId);
//返回两者的聚合DTO
return new OrderDetailDTO(userInfo,orderInfo);
```
```java
@Service
public class OrderDetailService {
    /**
     * 建立一个线程池专门交给CompletableFuture使用
     */
    private final ThreadPoolExecutor executor = new ThreadPoolExecutor(10, 20, 0, TimeUnit.SECONDS,
            new ArrayBlockingQueue<>(100));
    @Autowired
    private UserService userService;
    @Autowired
    private OrderService orderService;
    public OrderDetailDTO getOrderDetail(Long userId, String orderId) throws Exception {
        CompletableFuture<UserInfo> userInfoCompletableFuture = CompletableFuture.supplyAsync(() -> userService.getUserInfo(userId), executor);
        CompletableFuture<OrderInfo> orderInfoCompletableFuture = CompletableFuture.supplyAsync(() -> orderService.getOrderInfo(orderId), executor);
        CompletableFuture<OrderDetailDTO> result
                = userInfoCompletableFuture.thenCombineAsync(orderInfoCompletableFuture, OrderDetailDTO::new, executor);
        return result.get();
    }
}
```
### 区别
1. henComplete和handle区别

    whenComplete 与 handle 方法就类似于 try..catch..finanlly 中 finally 代码块。无论是否发生异常，都将会执行的。这两个方法区别在于 handle 支持返回结果。

2. thenApply与thenCompose的异同

    对于thenApply，fn函数是一个对一个已完成的stage或者说CompletableFuture的的返回值进行计算、操作；
    
    对于thenCompose，fn函数是对另一个CompletableFuture进行计算、操作。
3. 有无Async的区别

    没有Async的在CompleteableFuture调用它的线程定义的线程上运行，因此通常不知道在哪里执行该线程。如果结果已经可用，它可能会立即执行。
    
    有Async的无论环境如何，都在环境定义的执行程序上运行。为此CompletableFuture通常ForkJoinPool.commonPool()。