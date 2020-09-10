---
title: JVM
sidebarDepth: 2
---
## JVM->JRE->JDK 关系
![关系图](/java/jvm/java.png)
- `JDK`(Java Development Kit) 是 `Java` 语言的软件开发工具包（`SDK`）。`JDK` 物理存在，是 `programming tools`、`JRE` 和 `JVM` 的一个集合。

- `JRE`（Java Runtime Environment）`Java` 运行时环境，`JRE` 是物理存在的，主要由`Java API` 和 `JVM` 组成，提供了用于执行 `java` 应用程序最低要求的环境。

-  `JVM`是一种用于计算设备的规范，它是一个虚构的计算机的软件实现，简单的说，`JVM`是运行`byte code`字节码程序的一个容器。
### JVM特点

* **基于堆栈的虚拟机**：最流行的计算机体系结构，如英特尔 X86 架构和 ARM 架构上运行基于 寄存器。比如，安卓的 Davilk 虚拟机就是基于 寄存器 结构，而 JVM 是基于栈结构的。


* **符号引用** ：除了基本类型以外的数据 （类和接口） 都是通过符号来引用，而不是通过显式地使用内存地址来引用。


* **垃圾收集** ：一个类的实例是由用户程序创建和垃圾回收自动销毁。


* **网络字节顺序** ：Java class文件用网络字节码顺序来进行存储，保证了小端的Intel x86架构和大端的RISC系列的架构之间的无关性。

## 类加载器
![](/java/jvm/classloader.png)
### 关系
1. `Bootstrap Classloader` 是在Java虚拟机启动后初始化的。


2. `Bootstrap Classloader` 负责加载 `ExtClassLoader`，并且将 `E`xtClassLoader`的父加载器设置为 `Bootstrap Classloader`


3. `Bootstrap Classloader` 加载完 `ExtClassLoader` 后，就会加载 `AppClassLoader`，并且将 `AppClassLoader` 的父加载器指定为 `ExtClassLoader`。
### 双亲委托
`Java`中`ClassLoader`的加载采用了**双亲委托机制**，采用**双亲委托机制**加载类的时候采用如下的几个步骤：


1. 当前`ClassLoader`首先从自己已经加载的类中查询是否此类已经加载，如果已经加载则直接返回原来已经加载的类。


2. 当前`ClassLoader`的缓存中没有找到被加载的类的时候，委托父类加载器去加载，父类加载器采用同样的策略，首先查看自己的缓存，然后委托父类的父类去加载，一直到`Bootstrap ClassLoader`。


3. 当所有的父类加载器都没有加载的时候，再由当前的类加载器加载，并将其放入它自己的缓存中，以便下次有加载请求的时候直接返回。
> 双亲委托机制的核心思想分为两个步骤。其一，自底向上检查类是否已经加载；其二，自顶向下尝试加载类。

### 特点
* **层级结构**：Java里的类装载器被组织成了有父子关系的层级结构。Bootstrap类装载器是所有装载器的父亲。

* **代理模式**： 基于层级结构，类的代理可以在装载器之间进行代理。当装载器装载一个类时，首先会检查它在父装载器中是否进行了装载。如果上层装载器已经装载了这个类，这个类会被直接使用。反之，类装载器会请求装载这个类

* **可见性限制**：一个子装载器可以查找父装载器中的类，但是一个父装载器不能查找子装载器里的类。


* **不允许卸载**：类装载器可以装载一个类但是不可以卸载它，不过可以删除当前的类装载器，然后创建一个新的类装载器装载。

### 类的动态加载
类的几种加载方式
* 通过**命令行**启动时由`JVM`初始化加载；
* 通过`Class.forName()`方法动态加载；
* 通过`ClassLoader.loadClass()`方法动态加载。
**Class.forName()和ClassLoader.loadClass()**
* **Class.forName()**：把类的`.class`文件加载到`JVM`中，对类进行解释的同时执行类中的`static`**静态代码块**；
* **ClassLoader.loadClass()**：只是把`.class`文件加载到`JVM`中，不会执行`static`代码块中的内容，只有在`newInstance`才会去执行。

### 自定义类加载器
1. 定义待加载的目标类Parent.java和Children.java。

Parent.java
```java
package org.ostenant.jdk8.learning.examples.classloader.custom;

public class Parent {
    protected static String CLASS_NAME;
    protected static String CLASS_LOADER_NAME;
    protected String instanceID;

	// 1.先执行静态变量和静态代码块（只在类加载期间执行一次）
    static {
        CLASS_NAME = Parent.class.getName();
        CLASS_LOADER_NAME = Parent.class.getClassLoader().toString();
        System.out.println("Step a: " + CLASS_NAME + " is loaded by " + CLASS_LOADER_NAME);
    }

    // 2.然后执行变量和普通代码块（每次创建实例都会执行）
    {
        instanceID = this.toString();
        System.out.println("Step c: Parent instance is created: " + CLASS_LOADER_NAME + " -> " + instanceID);
    }

    // 3.然后执行构造方法
    public Parent() {
        System.out.println("Step d: Parent instance：" + instanceID + ", constructor is invoked");
    }

    public void say() {
        System.out.println("My first class loader...");
    }
}
```

Children.java

```java
package org.ostenant.jdk8.learning.examples.classloader.custom;

public class Children extends Parent {
    static {
        CLASS_NAME = Children.class.getName();
        CLASS_LOADER_NAME = Children.class.getClassLoader().toString();
        System.out.println("Step b: " + CLASS_NAME + " is loaded by " + CLASS_LOADER_NAME);
    }

    {
        instanceID = this.toString();
        System.out.println("Step e: Children instance is created: " + CLASS_LOADER_NAME + " -> " + instanceID);
    }

    public Children() {
        System.out.println("Step f: Children instance：" + instanceID + ", constructor is invoked");
    }

    public void say() {
        System.out.println("My first class loader...");
    }
}
```
2. 实现自定义类加载器CustomClassLoader

CustomClassLoader.java

```java
public class CustomClassLoader extends ClassLoader {
    private String classPath;

    public CustomClassLoader(String classPath) {
        this.classPath = classPath;
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        Class<?> c = findLoadedClass(name); // 可省略
        if (c == null) {
            byte[] data = loadClassData(name);
            if (data == null) {
                throw new ClassNotFoundException();
            }
            return defineClass(name, data, 0, data.length);
        }
        return null;
    }

    protected byte[] loadClassData(String name) {
        try {
            // package -> file folder
            name = name.replace(".", "//");
            FileInputStream fis = new FileInputStream(new File(classPath + "//" + name + ".class"));
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            int len = -1;
            byte[] b = new byte[2048];
            while ((len = fis.read(b)) != -1) {
                baos.write(b, 0, len);
            }
            fis.close();
            return baos.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

3. 测试类加载器的加载过程

CustomerClassLoaderTester.java

    - 测试程序启动时，逐一拷贝并加载待加载的目标类源文件。
```java
private static final String CHILDREN_SOURCE_CODE_NAME = SOURCE_CODE_LOCATION + "Children.java";
    private static final String PARENT_SOURCE_CODE_NAME = SOURCE_CODE_LOCATION + "Parent.java";
    private static final List<String> SOURCE_CODE = Arrays.asList(CHILDREN_SOURCE_CODE_NAME, PARENT_SOURCE_CODE_NAME);

    static {
        SOURCE_CODE.stream().map(path -> new File(path))
            // 路径转文件对象
            .filter(f -> !f.isDirectory())
            // 文件遍历
            .forEach(f -> {
            // 拷贝后源代码
            File targetFile = copySourceFile(f);
            // 编译源代码
            compileSourceFile(targetFile);
        });
    }
```
    - 拷贝单一源文件到自定义类加载器的类加载目录。
```java
     protected static File copySourceFile(File f) {
        BufferedReader reader = null;
        BufferedWriter writer = null;
        try {
            reader = new BufferedReader(new FileReader(f));
            // package ...;
            String firstLine = reader.readLine();

            StringTokenizer tokenizer = new StringTokenizer(firstLine, " ");
            String packageName = "";
            while (tokenizer.hasMoreElements()) {
                String e = tokenizer.nextToken();
                if (e.contains("package")) {
                    continue;
                } else {
                    packageName = e.trim().substring(0, e.trim().length() - 1);
                }
            }

            // package -> path
            String packagePath = packageName.replace(".", "//");
            // java file path
            String targetFileLocation = TARGET_CODE_LOCALTION + "//" + packagePath + "//";

            String sourceFilePath = f.getPath();
            String fileName = sourceFilePath.substring(sourceFilePath.lastIndexOf("\\") + 1);

            File targetFile = new File(targetFileLocation, fileName);
            File targetFileLocationDir = new File(targetFileLocation);
            if (!targetFileLocationDir.exists()) {
                targetFileLocationDir.mkdirs();
            }
            // writer
            writer = new BufferedWriter(new FileWriter(targetFile));
            // 写入第一行
            writer.write(firstLine);
            writer.newLine();
            writer.newLine();

            String input = "";
            while ((input = reader.readLine()) != null) {
            writer.write(input);
                writer.newLine();
            }

            return targetFile;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                reader.close();
                writer.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
```

    - 对拷贝后的.java源文件执行手动编译，在同级目录下生成.class文件。
```java
 protected static void compileSourceFile(File f) {
        try {
            JavaCompiler javaCompiler = ToolProvider.getSystemJavaCompiler();
            StandardJavaFileManager standardFileManager = javaCompiler.getStandardFileManager(null, null, null);
            Iterable<? extends JavaFileObject> javaFileObjects = standardFileManager.getJavaFileObjects(f);

            // 执行编译任务
            CompilationTask task = javaCompiler.getTask(null, standardFileManager, null, null, null, javaFileObjects);
            task.call();
            standardFileManager.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```
    - 通过自定义类加载器加载Children的java.lang.Class<?>对象，然后用反射机制创建Children的实例对象。
```java
 @Test
    public void test() throws Exception {
        // 创建自定义类加载器
        CustomClassLoader classLoader = new CustomClassLoader(TARGET_CODE_LOCALTION); // E://myclassloader//classpath
        // 动态加载class文件到内存中（无连接）
        Class<?> c = classLoader.loadClass("org.ostenant.jdk8.learning.examples.classloader.custom.Children");
        // 通过反射拿到所有的方法
        Method[] declaredMethods = c.getDeclaredMethods();
        for (Method method : declaredMethods) {
            if ("say".equals(method.getName())) {
                // 通过反射拿到children对象
                Object children = c.newInstance();
                // 调用children的say()方法
                method.invoke(children);
                break;
            }
        }
    }
```
#### 测试编写的类加载器
##### 场景一
1. **保留**`static`代码块，把目标类`Children.java`和`Parent.java`**拷贝**到类加载的目录，然后进行手动**编译**。
2. 保留测试项目目录中的目标类`Children.java`和`Parent.java`。
![](/java/jvm/test1.png)

结果：
![](/java/jvm/test2.png)

分析：
> 我们成功创建了`Children`对象，并通过反射调用了它的`say()`方法。 然而查看控制台日志，可以发现类加载使用的仍然是`AppClassLoader`，`CustomClassLoader`并没有生效。

查看`CustomClassLoader`的类加载目录：
![](/java/jvm/test3.png)

> 类目录下有我们拷贝并编译的Parent和Chidren文件。

分析原因：
> 由于项目空间中的`Parent.java`和`Children.java`，在拷贝后并没有移除。导致`AppClassLoader`优先在其`Classpath`下面找到并成功加载了目标类。

##### 场景二
1. **注释掉**`static`代码块（类目录下有已编译的目标类`.class`文件）。
2. **移除**测试项目目录中的目标类`Children.java`和`Parent.java`。
![](/java/jvm/test4.png)

测试结果分析：
我们成功通过**自定义类加载器**加载了目标类。创建了`Children`对象，并通过反射调用了它的`say()`方法。

## 内存结构
JVM内存结构主要有三大块：**堆内存**、**方法区**和**栈**。堆内存是JVM中最大的一块由年轻代和老年代组成，而年轻代内存又被分成三部分，**Eden空间**、**From Survivor空间**、**To Survivor空间**,默认情况下年轻代按照**8:1:1**的比例来分配；

方法区存储类信息、常量、静态变量等数据，是线程共享的区域，为与Java堆区分，方法区还有一个别名Non-Heap(非堆)；栈又分为java虚拟机栈和本地方法栈主要用于方法的执行。
![](/java/jvm/jvm.png)

args参数:
* -Xms设置堆的最小空间大小。
* -Xmx设置堆的最大空间大小。
* -XX:NewSize设置新生代最小空间大小。
* -XX:MaxNewSize设置新生代最大空间大小。
* -XX:PermSize设置永久代最小空间大小。
* -XX:MaxPermSize设置永久代最大空间大小。
* -Xss设置每个线程的堆栈大小。

老年代空间大小=堆空间大小-年轻代大空间大小
### Java堆（Heap）

对于大多数应用来说，Java堆（Java Heap）是Java虚拟机所管理的内存中**最大**的一块。Java堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放对象实例，**几乎所有的对象实例都在这里分配内存**。

Java堆是垃圾收集器管理的主要区域，因此很多时候也被称做“**GC堆**”。如果从内存回收的角度看，由于现在收集器基本都是采用的分代收集算法，所以Java堆中还可以细分为：**新生代和老年代**；再细致一点的有**Eden空间**、**From Survivor空间**、**To Survivor空间**等。

根据Java虚拟机规范的规定，Java堆可以处于物理上不连续的内存空间中，只要逻辑上是连续的即可，就像我们的磁盘空间一样。在实现时，既可以实现成固定大小的，也可以是可扩展的，不过当前主流的虚拟机都是按照可扩展来实现的（通过-Xmx和-Xms控制）。

如果在堆中没有内存完成实例分配，并且堆也无法再扩展时，将会抛出OutOfMemoryError异常。

#### 方法区（Method Area）

方法区（Method Area）与Java堆一样，是各个线程共享的内存区域，**它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据**。虽然Java虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做Non-Heap（非堆），目的应该是与Java堆区分开来。

对于习惯在HotSpot虚拟机上开发和部署程序的开发者来说，很多人愿意把方法区称为“永久代”（Permanent Generation），本质上两者并不等价，仅仅是因为HotSpot虚拟机的设计团队选择把GC分代收集扩展至方法区，或者说使用永久代来实现方法区而已。

Java虚拟机规范对这个区域的限制非常宽松，除了和Java堆一样不需要连续的内存和可以选择固定大小或者可扩展外，还可以选择不实现垃圾收集。相对而言，垃圾收集行为在这个区域是比较少出现的，但并非数据进入了方法区就如永久代的名字一样“永久”存在了。这个区域的内存回收目标主要是针对常量池的回收和对类型的卸载，一般来说这个区域的回收“成绩”比较难以令人满意，尤其是类型的卸载，条件相当苛刻，但是这部分区域的回收确实是有必要的。

根据Java虚拟机规范的规定，当方法区无法满足内存分配需求时，将抛出OutOfMemoryError异常。

方法区有时被称为持久代（PermGen）。

所有的对象在实例化后的整个运行周期内，都被存放在堆内存中。堆内存又被划分成不同的部分：伊甸区(Eden)，幸存者区域(Survivor Sapce)，老年代（Old Generation Space）。

方法的执行都是伴随着线程的。原始类型的本地变量以及引用都存放在线程栈中。而引用关联的对象比如String，都存在在堆中。为了更好的理解上面这段话，我们可以看一个例子：
```java
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.log4j.Logger;
 
public class HelloWorld {
    private static Logger LOGGER = Logger.getLogger(HelloWorld.class.getName());
    public void sayHello(String message) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.YYYY");
        String today = formatter.format(new Date());
        LOGGER.info(today + ": " + message);
    }
}
```
内存图

![](/java/jvm/memory1.png)
通过JConsole工具可以查看运行中的Java程序（比如Eclipse）的一些信息：堆内存的分配，线程的数量以及加载的类的个数；
![](/java/jvm/jconsole.png)

### 程序计数器（Program Counter Register）

程序计数器（Program Counter Register）是一块较小的内存空间，它的作用可以看做是当前线程所执行的字节码的行号指示器。在虚拟机的概念模型里（仅是概念模型，各种虚拟机可能会通过一些更高效的方式去实现），字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。

由于Java虚拟机的多线程是通过线程轮流切换并分配处理器执行时间的方式来实现的，在任何一个确定的时刻，一个处理器（对于多核处理器来说是一个内核）只会执行一条线程中的指令。因此，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各条线程之间的计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。

如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果正在执行的是Natvie方法，这个计数器值则为空（Undefined）。

**此内存区域是唯一一个在Java虚拟机规范中没有规定任何OutOfMemoryError情况的区域。**

### JVM栈（JVM Stacks）

与程序计数器一样，Java虚拟机栈（Java Virtual Machine Stacks）也是线程私有的，**它的生命周期与线程相同**。**虚拟机栈描述的是Java方法执行的内存模型**：每个方法被执行的时候都会同时创建一个栈帧（Stack Frame）用于存储局部变量表、操作栈、动态链接、方法出口等信息。**每一个方法被调用直至执行完成的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。**

局部变量表存放了编译期可知的各种基本数据类型（boolean、byte、char、short、int、float、long、double）、对象引用（reference类型，它不等同于对象本身，根据不同的虚拟机实现，它可能是一个指向对象起始地址的引用指针，也可能指向一个代表对象的句柄或者其他与此对象相关的位置）和returnAddress类型（指向了一条字节码指令的地址）。

其中64位长度的long和double类型的数据会占用2个局部变量空间（Slot），其余的数据类型只占用1个。局部变量表所需的内存空间在编译期间完成分配，当进入一个方法时，这个方法需要在帧中分配多大的局部变量空间是完全确定的，在方法运行期间不会改变局部变量表的大小。

在Java虚拟机规范中，对这个区域规定了两种异常状况：如果线程请求的栈深度大于虚拟机所允许的深度，将抛出StackOverflowError异常；如果虚拟机栈可以动态扩展（当前大部分的Java虚拟机都可动态扩展，只不过Java虚拟机规范中也允许固定长度的虚拟机栈），当扩展时无法申请到足够的内存时会抛出OutOfMemoryError异常。

### 本地方法栈（Native Method Stacks）

本地方法栈（Native Method Stacks）与虚拟机栈所发挥的作用是非常相似的，其区别不过是虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而**本地方法栈则是为虚拟机使用到的Native方法服务**。虚拟机规范中对本地方法栈中的方法使用的语言、使用方式与数据结构并没有强制规定，因此具体的虚拟机可以自由实现它。甚至有的虚拟机（譬如Sun HotSpot虚拟机）直接就把本地方法栈和虚拟机栈合二为一。与虚拟机栈一样，本地方法栈区域也会抛出StackOverflowError和OutOfMemoryError异常。

### OutOfMemoryErrors分析
```
Exception in thread “main”: java.lang.OutOfMemoryError: Java heap space
```
对象不能被分配到堆内存中
```
Exception in thread “main”: java.lang.OutOfMemoryError: PermGen space
```
类或者方法不能被加载到持久代。它可能出现在一个程序加载很多类的时候，比如引用了很多第三方的库
```
Exception in thread “main”: java.lang.OutOfMemoryError: Requested array size exceeds VM limit
```
创建的数组大于堆内存的空间
```
Exception in thread “main”: java.lang.OutOfMemoryError: request <size> bytes for <reason>. Out of swap space?
```
分配本地分配失败。JNI、本地库或者Java虚拟机都会从本地堆中分配内存空间
```
Exception in thread “main”: java.lang.OutOfMemoryError: <reason> <stack trace>（Native method）
```
同样是本地方法内存分配失败，只不过是JNI或者本地方法或者Java虚拟机发现

## JVM对象
### 对象的创建
`Java` 中提供的几种对象创建方式：
| Header | 解释 |
| --- | --- |
| 使用new关键字 | 调用了构造函数 |
| 使用Class的newInstance方法 | 调用了构造函数 |
| 使用Constructor类的newInstance方法 | 调用了构造函数 |
| 使用clone方法 | 没有调用构造函数 |
| 使用反序列化 | 没有调用构造函数 |
```java
public class Employee implements Cloneable, Serializable {
    private static final long serialVersionUID = 1L;
    private String name;

    public Employee() {}

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Employee other = (Employee) obj;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Employee [name=" + name + "]";
    }

    @Override
    public Object clone() {
        Object obj = null;
        try {
            obj = super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return obj;
    }
}
```
1. new关键字
这是最常见也是最简单的创建对象的方式了。通过这种方式，我们可以调用任意的构造函数(无参的和带参数的)。
```java
Employee emp1 = new Employee();
```
```java
Employee emp1 = new Employee(name);
```
2. Class类的newInstance方法
我们也可以使用`Class`类的`newInstance`方法创建对象。这个`newInstance`方法调用无参的构造函数创建对象。
+ 方式一
```java
    Employee emp2 = (Employee) Class.forName("org.ostenant.jvm.instance.Employee").newInstance();
```
+ 方式二

```java
Employee emp2 = Employee.class.newInstance();
```
3. Constructor类的newInstance方法
和`Class`类的`newInstance`方法很像， `java.lang.reflect.Constructor`类里也有一个`newInstance`方法可以创建对象。我们可以通过这个`newInstance`方法调用有参数的和私有的构造函数。其中，`Constructor`可以从对应的`Class`类中获得。
```java
Constructor<Employee> constructor = Employee.class.getConstructor();
Employee emp3 = constructor.newInstance();
```
> 这两种newInstance方法就是大家所说的反射。事实上Class的newInstance方法内部调用Constructor的newInstance方法。
4. Clone方法
无论何时我们调用一个对象的`clone`方法，`JVM`都会创建一个新的对象，将前面对象的内容全部拷贝进去。用`clone`方法创建对象并不会调用任何构造函数。

为了使用`clone`方法，我们需要先实现`Cloneable`接口并实现其定义的`clone`方法。
```java
Employee emp4 = (Employee) emp3.clone();
```
5. 反序列化
当我们**序列化**和**反序列化**一个对象，`JVM`会给我们创建一个**单独**的对象。在反序列化时，`JVM`创建对象并不会调用任何构造函数。

为了反序列化一个对象，我们需要让我们的类实现`Serializable`接口。
```java
ByteArrayOutputStream out = new ByteArrayOutputStream();
ObjectOutputStream oos = new ObjectOutputStream(out);
oos.writeObject(emp4);

ByteArrayInputStream in = new ByteArrayInputStream(oos.toByteArray());
ObjectInputStream ois =new ObjectInputStream(in);

Employee emp5 = (Employee) in.readObject();
```
### 对象的访问定位
`Java`程序需要通过 `JVM` 栈上的引用访问堆中的具体对象。对象的访问方式取决于 `JVM` 虚拟机的实现。目前主流的访问方式有 **句柄** 和 **直接指针** 两种方式。
> 指针： 指向对象，代表一个对象在内存中的起始地址。 

> 句柄： 可以理解为指向指针的指针，维护着对象的指针。句柄不直接指向对象，而是指向对象的指针（句柄不发生变化，指向固定内存地址），再由对象的指针指向对象的真实内存地址。

1. 句柄
`Java`堆中划分出一块内存来作为**句柄池**，引用中存储对象的**句柄地址**，而句柄中包含了对象**实例数据**与**对象类型数据**各自的**具体地址**信息，具体构造如下图所示：
![](/java/jvm/jubin.png)
**优势**：引用中存储的是**稳定**的句柄地址，在对象被移动（垃圾收集时移动对象是非常普遍的行为）时只会改变**句柄**中的**实例数据指针**，而**引用**本身不需要修改。

2. 直接指针
如果使用**直接指针**访问，**引用**中存储的直接就是**对象地址**，那么`Java`堆对象内部的布局中就必须考虑如何放置访问**类型数据**的相关信息。
![](/java/jvm/zhijiezhizheng.png)
**优势**：速度更**快**，节省了**一次指针定位**的时间开销。由于对象的访问在`Java`中非常频繁，因此这类开销积少成多后也是非常可观的执行成本。
### 对象的初始化
**对象的初始化顺序**
静态变量/静态代码块 -> 普通代码块 -> 构造函数
1. 父类静态变量和静态代码块（先声明的先执行）；
2. 子类静态变量和静态代码块（先声明的先执行）；
3. 父类普通成员变量和普通代码块（先声明的先执行）；
4. 父类的构造函数；
5. 子类普通成员变量和普通代码块（先声明的先执行）；
6. 子类的构造函数。

**示例**

Parent.java

![](/java/jvm/demo1.png)
Children.java

![](/java/jvm/demo2.png)
Tester.java

![](/java/jvm/demo3.png)

测试结果：

![](/java/jvm/result1.png)
## 常用命令

### jps
----------------
JVM Process Status Tool,显示指定系统内所有的HotSpot虚拟机进程。
```
jps [option] [hostid]
```

|  Option   | 	解释  |
|  ----  | ----  |
| -l  | 输出主类全名或jar路径 |
| -q  | 只输出LVMID |
| -m  | 输出JVM启动时传递给main()的参数 |
| -v  |  输出JVM启动时显示指定的JVM参数 |

### jstat
--------------
jstat(JVM statistics Monitoring)是用于监视虚拟机运行时状态信息的命令，它可以显示出虚拟机进程中的类装载、内存、垃圾收集、JIT编译等运行数据。

```
jstat [option] LVMID [interval] [count]

[option] : 操作参数
LVMID : 本地虚拟机进程ID
[interval] : 连续输出的时间间隔
[count] : 连续输出的次数
```

| Option | 解释 |
|  ----  | ----  |
| class | class loader的行为统计。Statistics on the behavior of the class loader. |
| compiler | HotSpt JIT编译器行为统计。Statistics of the behavior of the HotSpot Just-in-Time compiler. |
| gc | 垃圾回收堆的行为统计。Statistics of the behavior of the garbage collected heap. |
| gccapacity | 各个垃圾回收代容量(young,old,perm)和他们相应的空间统计。Statistics of the capacities of the generations and their corresponding spaces. |
| gcutil | 垃圾回收统计概述。Summary of garbage collection statistics. |
| gccause | 垃圾收集统计概述（同-gcutil），附加最近两次垃圾回收事件的原因。Summary of garbage collection statistics (same as -gcutil), with the cause of the last and |
| gcnew | 新生代行为统计。Statistics of the behavior of the new generation. |
| gcnewcapacity | 新生代与其相应的内存空间的统计。Statistics of the sizes of the new generations and its corresponding spaces. |
| gcold | 年老代和永生代行为统计。Statistics of the behavior of the old and permanent generations. |
| gcoldcapacity | 年老代行为统计。Statistics of the sizes of the old generation. |
| gcpermcapacity | 永生代行为统计。Statistics of the sizes of the permanent generation. |
| printcompilation | HotSpot编译方法统计。HotSpot compilation method statistics. |
**例如查看垃圾回收堆的行为统计**

```
[root@VM_247_254_centos ~]# jstat -gc 25446
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT
6400.0 6400.0  0.0   1601.4 51712.0  50837.0   128808.0   88450.0   67584.0 66167.7 7936.0 7630.5    401    5.939  10      1.247    7.186
```
参数意义： C：Capacity表示的是容量 U：Used表示的是已使用
```
S0C : survivor0区的总容量
S1C : survivor1区的总容量
S0U : survivor0区已使用的容量
S1C : survivor1区已使用的容量
EC : Eden区的总容量
EU : Eden区已使用的容量
OC : Old区的总容量
OU : Old区已使用的容量
PC 当前perm的容量 (KB)
PU perm的使用 (KB)
YGC : 新生代垃圾回收次数
YGCT : 新生代垃圾回收时间
FGC : 老年代垃圾回收次数
FGCT : 老年代垃圾回收时间
GCT : 垃圾回收总消耗时间
```
### jmap
jmap(JVM Memory Map)命令用于生成heap dump文件，如果不使用这个命令，可以使用-XX:+HeapDumpOnOutOfMemoryError参数来让虚拟机出现OOM的时候，自动生成dump文件。
jmap不仅能生成dump文件，还可以查询finalize执行队列、Java堆和永久代的详细信息，如当前使用率、当前使用的是哪种收集器等。
```
jmap [option] LVMID
```
| Option | 解释 |
|  ----  | ----  |
| dump          | 生成堆转储快照 |
| finalizerinfo | 显示在F-Queue队列等待Finalizer线程执行finalizer方法的对象 |
| heap          | 显示Java堆详细信息 |
| histo         | 显示堆中对象的统计信息 |
| permstat      | to print permanent generation statistics |
| F             | 当-dump没有响应时，强制生成dump快照 |
例子
* **-dump**
```
jmap -dump:format=b,file=dump.dprof 25446
Dumping heap to /home/gem/dump.dprof ...
Heap dump file created
```
**输出.dprof文件后，使用MAT分析工具进行分析**
* **-heap**打印heap的概要信息，GC使用的算法，heap的配置及wise heap的使用情况,可以用此来判断内存目前的使用情况以及垃圾回收情况
 ```
 jmap -heap 25446
Attaching to process ID 25446, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.121-b13

using thread-local object allocation.
Mark Sweep Compact GC  //GC 方式 ,该次是标记-清理算法，上一篇有记录哦

//堆内存初始化配置
Heap Configuration:  
   //对应jvm启动参数-XX:MinHeapFreeRatio设置JVM堆最小空闲比率(default 40)
   MinHeapFreeRatio         = 40   
   //对应jvm启动参数 -XX:MaxHeapFreeRatio设置JVM堆最大空闲比率(default 70)
   MaxHeapFreeRatio         = 70
   //对应jvm启动参数-XX:MaxHeapSize=设置JVM堆的最大大小
   MaxHeapSize              = 262144000 (250.0MB)
   //对应jvm启动参数-XX:NewSize=设置JVM堆的‘新生代’的默认大小
   NewSize                  = 5570560 (5.3125MB)
   //对应jvm启动参数-XX:MaxNewSize=设置JVM堆的‘新生代’（YG）的最大大小
   MaxNewSize               = 87359488 (83.3125MB)
   //对应jvm启动参数-XX:OldSize=<value>:设置JVM堆的‘老生代’（OG）的大小
   OldSize                  = 11206656 (10.6875MB)
   //对应jvm启动参数-XX:NewRatio=:‘新生代’和‘老年代’的大小比率
   NewRatio                 = 2
   //对应jvm启动参数-XX:SurvivorRatio=设置年轻代中Eden区与Survivor区的大小比值 
   SurvivorRatio            = 8
   //元空间大小，对应-XX:MetaspaceSize，初始空间大小
   //达到该值就会触发垃圾收集进行类型卸载，同时GC会对该值进行调整
   //JDK 8 中永久代向元空间的转换
   MetaspaceSize            = 21807104 (20.796875MB)
   //只有当-XX:+UseCompressedClassPointers开启了才有效
   //通过java -XX:+PrintFlagsInitial | grep UseCompressedClassPointers
   //发现bool UseCompressedClassPointers= false，是没有启用的
   CompressedClassSpaceSize = 1073741824 (1024.0MB)
   //对应启动参数-XX:MaxMetaspaceSize对应元空间最大大小
   MaxMetaspaceSize         = 17592186044415 MB
   //当使用G1收集器时，设置java堆被分割的大小。这个大小范围在1M到32M之间。
   //可能我这个JVM没有启用G1收集器，所以为0
   G1HeapRegionSize         = 0 (0.0MB)

//堆内存使用情况
Heap Usage:
//新的复制算法，一个伊甸区+Survivor区
New Generation (Eden + 1 Survivor Space):
   capacity = 59506688 (56.75MB)
   used     = 17941224 (17.110084533691406MB)
   free     = 41565464 (39.639915466308594MB)
   30.14992869372935% used
//Eden区内存分布
Eden Space:
   capacity = 52953088 (50.5MB)
   used     = 17935840 (17.104949951171875MB)
   free     = 35017248 (33.395050048828125MB)
   33.871188022122524% used
//其中一个Survivor区的内存分布
From Space:
   capacity = 6553600 (6.25MB)
   used     = 5384 (0.00513458251953125MB)
   free     = 6548216 (6.244865417480469MB)
   0.0821533203125% used
//另一个Survivor区的内存分布
To Space:
   capacity = 6553600 (6.25MB)
   used     = 0 (0.0MB)
   free     = 6553600 (6.25MB)
   0.0% used
//‘当前’老年代内存分布
tenured generation:
   capacity = 131899392 (125.7890625MB)
   used     = 94610832 (90.22792053222656MB)
   free     = 37288560 (35.56114196777344MB)
   71.7295436812931% used

27405 interned Strings occupying 3101144 bytes.
 ```
 ### ~~jhat~~
 jhat(JVM Heap Analysis Tool)命令是与jmap搭配使用，用来分析jmap生成的dump，jhat内置了一个微型的HTTP/HTML服务器，生成dump的分析结果后，可以在浏览器中查看。在此要注意，一般不会直接在服务器上进行分析，因为jhat是一个耗时并且耗费硬件资源的过程，一般把服务器生成的dump文件复制到本地或其他机器上进行分析。
 **常用分析方法是用各平台通用的MAT进行分析**
 ### jstack
 jstack用于生成java虚拟机当前时刻的线程快照。
线程快照是当前java虚拟机内每一条线程正在执行的方法堆栈的集合，生成线程快照的主要目的是定位线程出现长时间停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等。
线程出现停顿的时候通过jstack来查看各个线程的调用堆栈，就可以知道没有响应的线程到底在后台做什么事情，或者等待什么资源。 如果java程序崩溃生成core文件，jstack工具可以用来获得core文件的java stack和native stack的信息，从而可以轻松地知道java程序是如何崩溃和在程序何处发生问题。另外，jstack工具还可以附属到正在运行的java程序中，看到当时运行的java程序的java stack和native stack的信息, 如果现在运行的java程序呈现hung的状态，jstack是非常有用的。
```
jstack [option] LVMID
```
| Option | 解释 |
|  ----  | ----  |
| -F | 当正常输出请求不被响应时，强制输出线程堆栈 |
| -l | 除堆栈外，显示关于锁的附加信息 |
| -m | 如果调用到本地方法的话，可以显示C/C++的堆栈 |
例子
```
jstack -l 25446 | more
2018-01-25 21:18:22
Full thread dump Java HotSpot(TM) 64-Bit Server VM (25.121-b13 mixed mode):

"main-EventThread" #174 daemon prio=5 os_prio=0 tid=0x00007feb692b7000 nid=0x6502 waiting on condition [0x00007feb32bb1000]
    //等待
   java.lang.Thread.State: WAITING (parking)
	at sun.misc.Unsafe.park(Native Method)
	- parking to wait for  <0x00000000f0a00860> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)
	at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)
	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)
	at java.util.concurrent.LinkedBlockingQueue.take(LinkedBlockingQueue.java:442)
	at org.apache.zookeeper.ClientCnxn$EventThread.run(ClientCnxn.java:501)

   Locked ownable synchronizers:
	- None

"main-SendThread(115.159.192.69:2181)" #173 daemon prio=5 os_prio=0 tid=0x00007feb694bd800 nid=0x6501 runnable [0x00007feb363ce000]
    //运行
   java.lang.Thread.State: RUNNABLE
	at sun.nio.ch.EPollArrayWrapper.epollWait(Native Method)
	at sun.nio.ch.EPollArrayWrapper.poll(EPollArrayWrapper.java:269)
	at sun.nio.ch.EPollSelectorImpl.doSelect(EPollSelectorImpl.java:93)
	at sun.nio.ch.SelectorImpl.lockAndDoSelect(SelectorImpl.java:86)
	- locked <0x00000000f09ef268> (a sun.nio.ch.Util$3)
	- locked <0x00000000f09ef258> (a java.util.Collections$UnmodifiableSet)
	- locked <0x00000000f09ef140> (a sun.nio.ch.EPollSelectorImpl)
	at sun.nio.ch.SelectorImpl.select(SelectorImpl.java:97)
	at org.apache.zookeeper.ClientCnxnSocketNIO.doTransport(ClientCnxnSocketNIO.java:349)
	at org.apache.zookeeper.ClientCnxn$SendThread.run(ClientCnxn.java:1141)

   Locked ownable synchronizers:
	- None
```
### jinfo
jinfo(JVM Configuration info)这个命令作用是实时查看和调整虚拟机运行参数。 之前的jps -v口令只能查看到显示指定的参数，如果想要查看未被显示指定的参数的值就要使用jinfo口令
**一般用它来看JVM启动时的参数**
```
jinfo [option] [args] LVMID
```
| Option | 解释 |
|  ----  | ----  |
| -flag     | 输出指定args参数的值 |
| -flags    | 不需要args参数，输出所有JVM参数的值 |
| -sysprops | 输出系统属性，等同于System.getProperties() |
例子
```
[root@VM_247_254_centos ~]# jinfo -flags 25446
Attaching to process ID 25446, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.121-b13
Non-default VM flags: -XX:CICompilerCount=2 -XX:InitialHeapSize=16777216 -XX:MaxHeapSize=262144000 -XX:MaxNewSize=87359488 -XX:MinHeapDeltaBytes=196608 -XX:NewSize=5570560 -XX:OldSize=11206656 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops
Command line:  -Djava.util.logging.config.file=/usr/local/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dcatalina.base=/usr/local/tomcat -Dcatalina.home=/usr/local/tomcat -Djava.io.tmpdir=/usr/local/tomcat/temp
```