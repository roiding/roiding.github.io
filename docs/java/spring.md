---
title: Spring
sidebarDepth: 2
---
## Spring 注解详解
### ControllerAdvice
> 全局异常处理
```java
@ControllerAdvice
public class MyGlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    @ResponseBody
    String handleException(Exception e){
        return "handler exception： " + e.getMessage();
    }
}
```
> 全局数据绑定
  ```java
   @ControllerAdvice
public class MyGlobalExceptionHandler {
    @ModelAttribute(name = "md")
    public Map<String,Object> mydata() {
        HashMap<String, Object> map = new HashMap<>();
        map.put("age", 99);
        map.put("gender", "男");
        return map;
    }
}
```
所有Controller中都可以获取到数据
```java
   @RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(Model model) {
        Map<String, Object> map = model.asMap();
        System.out.println(map);
        int i = 1 / 0;
        return "hello controller advice";
    }
}
```
> 全局数据预处理
考虑我有两个实体类，Book 和 Author，分别定义如下：
```java
public class Book {
    private String name;
    private Long price;
    //getter/setter
}
public class Author {
    private String name;
    private Integer age;
    //getter/setter
}
``` 
此时，如果我定义一个数据添加接口，如下：
```java
@PostMapping("/book")
public void addBook(Book book, Author author) {
    System.out.println(book);
    System.out.println(author);
}
```
这个时候，添加操作就会有问题，因为两个实体类都有一个 name 属性，从前端传递时 ，无法区分。此时，通过 @ControllerAdvice 的全局数据预处理可以解决这个问题。

解决步骤如下:

    1. 给接口中的变量取别名
```java
@PostMapping("/book")
public void addBook(@ModelAttribute("b") Book book, @ModelAttribute("a") Author author) {
    System.out.println(book);
    System.out.println(author);
}
```
    2. 进行请求数据预处理
    在 @ControllerAdvice 标记的类中添加如下代码:
```java
@InitBinder("b")
public void b(WebDataBinder binder) {
    binder.setFieldDefaultPrefix("b.");
}
@InitBinder("a")
public void a(WebDataBinder binder) {
    binder.setFieldDefaultPrefix("a.");
}
```
@InitBinder("b") 注解表示该方法用来处理和Book和相关的参数,在方法中,给参数添加一个 b 前缀,即请求参数要有b前缀.

    3. 发送请求
    请求发送时,通过给不同对象的参数添加不同的前缀,可以实现参数的区分.
![](/java/spring/3478917317390130.png)