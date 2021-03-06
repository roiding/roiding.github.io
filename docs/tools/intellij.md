---
title: intellij使用
---
## 配置lombok  
 * Settings-->Plugins-->安装lombok插件
 * Settings-->Build，Execution，Deployment-->Compiler-->Annotation Processors-->Enable annotation processing  
<br/>
<br/>

## Jrebel 插件破解

大神基于JAVA写了一个可用于jrebel激活及jetbrains激活的服务器，详见
[https://gitee.com/gsls200808/JrebelLicenseServerforJava](https://gitee.com/gsls200808/JrebelLicenseServerforJava)

本人基于知名容器服务商**kintohub**搭建了一套环境供使用，地址为：[jrebel.ran-ding.cf](https://jrebel.ran-ding.cf)

注意按提示，但不要加端口号，因涉及过了一次docker服务的端口映射，页面上的*8081*端口不需要加

## 快捷键  

### 1.编辑

| 快捷键 | 中文说明 |
| :----: | :----: |
| Ctrl + Space | 补全代码，由于经常与操作系统的输入法的切换冲突，所以实际很少用。一般直接在 idea 中开启输入自动补全机制。 |
| Ctrl + Shift + Space | 在列出的可选项中只显示出你所输入的关键字最相关的信息。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + ↑/↓ | 代码向上下移动一行 <span style="color:red">**（常用）**</span> |
| Ctrl + Alt + V | 自动返回对象 <span style="color:red">**（常用）**</span> |
| Ctrl + Shift + Enter | 代码补全后，自动在代码末尾添加分号结束符 |
| Ctrl + P | 在某个方法中，调用该按键后，会展示出这个方法的调用参数列表信息。 |
| Ctrl + Q | 展示某个类或者方法的 API 说明文档 |
| Ctrl + mouse | 跳进到某个类或者方法源代码中进行查看。<span style="color:red">**（常用）**</span> |
| Alt + Insert | 自动生成某个类的 Getters, Setters, Constructors, hashCode/equals, toString 等代码。<span style="color:red">**（常用）**</span> |
| Ctrl + O | 展示该类中所有覆盖或者实现的方法列表，注意这里是字母小写的 O！ |
| Ctrl + Alt + T | 自动生成具有环绕性质的代码，比如：if…else,try…catch, for, synchronized 等等，使用前要先选择好需要环绕的代码块。<span style="color:red">**（常用）**</span> |
| Ctrl + / | 对单行代码，添加或删除注释。分为两种情况：如果只是光标停留在某行，那么连续使用该快捷键，会不断注释掉下一行的代码；如果选定了某行代码（选定了某行代码一部分也算这种情况），那么连续使用该快捷键，会在添加或删除该行注释之间来回切换。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + / | 对代码块，添加或删除注释。它与 Ctrl + / 的区别是，它只会在代码块的开头与结尾添加注释符号！<span style="color:red">**（常用）**</span> |
| Ctrl + W | 选中当前光标所在的代码块，多次触发，代码块会逐级变大。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + W | 是 Ctrl + W 的反向操作，多次触发，代码块会逐级变小，最小变为光标。 |
| Alt + Q | 展示包含当前光标所在代码的父节点信息，比如在 java 方法中调用，就会展示方法签名信息。 |
| Alt + Enter | 展示当前当前光标所在代码，可以变化的扩展操作 |
| Ctrl + Alt + L | 格式化代码 <span style="color:red">**（常用）**</span> |
| Ctrl + Alt + O | 去除没有实际用到的包，这在 java 类中特别有用。<span style="color:red">**（常用）**</span> |
| Ctrl + Alt + I | 按照缩进的设定，自动缩进所选择的代码段。 |
| Tab / Shift + Tab | 缩进或者不缩进一次所选择的代码段。<span style="color:red">**（常用）**</span> |
| Ctrl + X 或 Shift Delete | 剪切当前代码。 <span style="color:red">**（常用）**</span> |
| Ctrl + C 或 Ctrl + Insert | 拷贝当前代码。 <span style="color:red">**（常用）**</span> |
| Ctrl + V 或 Shift + Insert | 粘贴之前剪切或拷贝的代码。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + V | 从之前的剪切或拷贝的代码历史记录中，选择现在需要粘贴的内容。<span style="color:red">**（常用）**</span> |
| Ctrl + D | 复制当前选中的代码。<span style="color:red">**（常用）**</span> |
| Ctrl + Y | 删除当前光标所在的代码行。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + J | 把下一行的代码接续到当前的代码行。 |
| Ctrl + Enter | 当前代码行与下一行代码之间插入一个空行，原来所在的光标不变。<span style="color:red">**（常用）**</span> |
| Shift + Enter | 当前代码行与下一行代码之间插入一个空行，原来光标现在处于新加的空行上。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + U | 所选择的内容进行大小写转换。。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + ]/[ | 从当前光标所在位置开始，一直选择到当前光标所在代码段起始或者结束位置。 |
| Ctrl + Delete | 删除从当前光标所在位置开始，直到这个单词的结尾的内容。 |
| Ctrl + NumPad(+/-) | 展开或收缩代码段。 <span style="color:red">**（常用）**</span> |
| Ctrl + Shift + NumPad(+) | 展开所有代码段。 |
| Ctrl + Shift + NumPad(-) | 收缩所有代码段。 |
| Ctrl + F4 | 关闭当前标签页。 |
| Shift + F6 | 修改名字。<span style="color:red">**（常用）**</span> |
>  1.1 Ctrl + Shift + Space 示例（智能补全）

使用前，用于补全的列表，默认是以输入的关键字作为前缀的：
![](/intellij/1589726253134.jfif)
使用后，用于补全的列表，会把与输入的关键字最相关的信息排到最前面，比如这里的 Resource 的实现类会直接过滤出来，很方便吧 O(∩_∩)O~：
![](/intellij/1589726265866.jfif)

>  1.2 Ctrl + P 示例（方法参数列表）

![](/intellij/1589726288856.jfif)
>  1.3 Ctrl + Q 示例（API 说明文档）

![](/intellij/1589726310129.jfif)
不大好用，字体太小了，还不如直接 [ctrl + 点击] 看源代码来的方便！
>  1.4 Alt + Insert 示例（自动生成与类相关的代码）

如果绑定了 Spring 框架，还能自动生成与 Spring 相关的依赖参数哦：
![](/intellij/1589726375820.jfif)
>  1.5 Ctrl + O 示例（该类中所有覆盖或者实现的方法列表）

![](/intellij/1589726401798.jfif)
>  1.6 Ctrl + Alt + T 示例（生成具有环绕性质的代码）

![](/intellij/1589726426423.jfif)
在右边的 Surround with 列表，就是目前支持的自动代码环绕功能，可以直接通过列表最左边的快捷键选择，是不是很方便呀 O(∩_∩)O~

它还支持自定义的代码模板（Live templates）呢，很强大吧。
>  1.7 Ctrl + Shift + V 示例（剪切或拷贝的代码历史记录中，选择粘贴的内容）

这是一个很酷的功能 O(∩_∩)O~，它会把之前剪切或拷贝的代码历史记录（最近 5 条）展示出来，让你来选择哦。可惜的是，列表选项如果是中文会乱码，还好内容可以正常显示：
![](/intellij/1589726532155.jfif)

### 2.查找或替换
| 快捷键 | 中文说明 |
| :----: | :----: |
| Ctrl + F |在当前标签页中进行查找，还支持正则表达式哦。<span style="color:red">**（常用）**</span>|
| F3 | 如果找到了多个查找结果，每调用一次就会跳到下一个结果，很方便哦。 |
| Shift + F3 | 是 F3 的反向操作，即每调用一次就会跳到上一个结果。 |
| Ctrl + R | 在当前标签页中进行替换操作。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + F | 通过路径查找。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + R | 通过路径替换。<span style="color:red">**（常用）**</span> |
>  2.1 Ctrl + F （查找）

触发后，会打开一个查找面板：
![](/intellij/1589726587651.jfif)
触发后，会打开一个查找面板：
| 图示 | 说明 |
| :----: | :----: |
| 向上箭头 | 就是 快捷键【Shift + F3】，每调用一次就会跳到上一个结果。 |
| 向下箭头 | 就是 快捷键【F3】，每调用一次就会跳到下一个结果。 |
| 加号符号 | 把当前的高亮项加入到选中的列表中。 |
| 减号符号 | 把当前的高亮项从选中的列表中移除。 |
| 勾选符号 | 把所有的查找结果同时选中，这很适合批量操作。 |
| 文本内的向上箭头 | 打开查询结果列表面板。 |
| 两个框加一个向下箭头 | 更多选项。 |
| Match Case | 是否大小写敏感。 |
| Regex | 正则表达式。 |
| Words | 匹配单词。 |
| x matches | x 表示的是找到的记录数。 |
勾选符号选中效果：
![](/intellij/1589726755686.jfif)
点击文本内的向上箭头，打开后的查询结果列表面板：
![](/intellij/1589726765627.jfif)
两个框加一个向下箭头，会变成一个大文本输入框，而且还多出一个查看搜索历史的按钮：
![](/intellij/1589726785858.jfif)
> 2.2 Ctrl + Shift + F （通过路径查找）

![](/intellij/1589726804498.jfif)

### 3.查看使用情况  
| 快捷键 | 中文说明 |
| :----: | :----: |
| Alt + F7 | 在当前项目中的使用情况，会打开一个使用情况面板。 |
| Ctrl + F7 | 在当前文件中的使用情况，找的内容会低亮显示。 |
| Ctrl + Shift + F7 | 在当前文件中的使用情况，找的内容会高亮显示。 |
| Ctrl + Alt + F7 | 打开使用情况列表。 <span style="color:red">**（常用）**</span> |
> 3.1 Ctrl + Alt + F7（打开使用情况列表）
![](/intellij/1589726830701.jfif)

### 4.编译与运行
| 快捷键 | 中文说明 |
| :----: | :----: |
| Ctrl + F9	Make project | 编译项目（如果之前有编译过，那么只会编译那些修改的类或者依赖的包）。 |
| Ctrl + Shift + F9 | 编译所中的范围（如果在某个类中，那么只会编译当前类）。 |
| Alt + Shift + F10 | 会打开一个已经配置的运行列表，让你选择一个后，再运行。
| Alt + Shift + F9 | 会打开一个已经配置的运行列表，让你选择一个后，再以调试模式运行。 |
| Shift + F10 | 立即运行当前配置的运行实例，这个在单元测试中特别好用。 <span style="color:red">**（常用）**</span> |
| Shift + F9 | 立即以编译模式运行当前配置的运行实例。 |
| Ctrl + Shift + F10 | 按照编辑器绑定的文件类型，运行相关的程序。比如一个 html 页面，调用后，会直接打开一个浏览器。 |
> 4.1 Alt + Shift + F10（打开运行列表，选择一个运行）

![](/intellij/1589726858431.jfif)

### 5.调试
| 快捷键 | 中文说明 |
| :----: | :----: |
| F8 | 跳到当前代码下一行。 <span style="color:red">**（常用）**</span> |
| F7 | 跳入到调用的方法内部代码。 <span style="color:red">**（常用）**</span> |
| Shift + F7 | 会打开一个面板，让你选择具体要跳入的类方法，这个在复杂的嵌套代码中特别有用。 |
| Shift + F8 | 跳出当前的类，到上一级。 <span style="color:red">**（常用）**</span> |
| Alt + F9 | 让代码运行到当前光标所在处，非常棒的功能。 <span style="color:red">**（常用）**</span> |
| Alt + F8 | 打开一个表达式面板，然后进行进一步的计算。|
| F9 | 结束当前断点的本轮调试（因为有可能代码会被调用多次，所以调用后只会结束当前的这一次）；如果有下一个断点会跳到下一个断点中。<span style="color:red">**（常用）**</span> |
| Ctrl + F8 | 在当前光标处，添加或者删除断点。 |
| Ctrl + Shift + F8 | 打开当前断点的面板，可以进行条件过滤哦。 |

> 5.1 Shift + F7（选择具体要跳入的类方法）

![](/intellij/1589726893980.jfif)
> 5.2 Alt + F8 （计算表达式）

注意：要在当前断点之前的代码中，选择某一个变量运行才有效，因为只有代码运行过了，才会有值的呀 O(∩_∩)O~
![](/intellij/1589726919299.jfif)
> 5.3 Ctrl + Shift + F8 （当前断点的面板）

![](/intellij/1589726942178.jfif)
### 6.导航
| 快捷键 | 中文说明 |
| :----: | :----: |
| Ctrl + N | 打开类查询框。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + N | 打开文件查询框。<span style="color:red">**（常用）**</span> |
| Ctrl + Alt + Shift + N | 打开文本查询框。 |
| Alt + 右箭头/左箭头 | 跳到下一个/上一个编辑器标签。 |
| F12 | 如果当前在编辑窗口，触发后，会跳到之前操作过的工具栏上。 |
| ESC | 从工具栏上，再跳回原来的编辑窗口，一般与 F12 配合使用。 |
| Shift + ESC | 隐藏最后一个处于活跃状态的工具窗口。 |
| Ctrl + Shift + F4 | 同时关闭处于活动状态的某些工具栏窗口。 |
| Ctrl + G | 跳转至某一行代码。。<span style="color:red">**（常用）**</span> |
| Ctrl + E | 打开曾经操作过的文件历史列表。 |
| Ctrl + Alt + 右箭头/左箭头 | 在曾经浏览过的代码行中来回跳 |
| Ctrl + Shift + Backspace | 跳转到最近的编辑位置（如果曾经编辑过代码）。 |
| Alt + F1 | 打开一个类型列表，选择后会导航到当前文件或者内容的具体与类型相关的面板中。 |
| Ctrl + B 或 Ctrl + 鼠标左键 | 如果是类，那么会跳转到当前光标所在的类定义或者接口；如果是变量，会打开一个变量被引用的列表。<span style="color:red">**（常用）**</span> |
| Ctrl + Alt + B | 跳转到实现类，而不是接口。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + I | 打开一个面板，里面包含类代码。 |
| Ctrl + Shift + B | 打开变量的类型所对应的类代码，只对变量有用。 |
| Ctrl + U | 打开方法的超类方法或者类的超类，只对有超类的方法或者类有效。 |
| Alt + 上/下箭头 | 在某个类中，跳到上一个/下一个方法的签名上。 |
| Ctrl + ]/[ | 移动光标到类定义的终止右大括号或者起始左大括号。 |
| Ctrl + F12 | 打开类的结构列表。<span style="color:red">**（常用）**</span> |
| Ctrl + H | 打开类的继承关系列表。<span style="color:red">**（常用）**</span> |
| Ctrl + Shift + H | 打开某个类方法的继承关系列表。 |
| Ctrl + Alt + H | 打开所有类的方法列表，这些方法都调用了当前光标所处的某个类方法。<span style="color:red">**（常用）**</span> |
| F2/Shift + F2 | 在编译错误的代码行中来回跳。 |
| F4 | 打开当前光标所在处的方法或类源码。 |
| Alt + Home | 激活包路径的导航栏。 |
| F11 | 把光标所处的代码行添加为书签或者从书签中删除。<span style="color:red">**（常用）**</span> |
| Ctrl + F11 | 把光标所处的代码行添加为带快捷键的书签或者从快捷键书签中删除。 |
| Ctrl + [0-9] | 跳转到之前定义的快捷键书签。 |
| Shift + F11 | 打开书签列表。<span style="color:red">**（常用）**</span> |
> 6.1 Ctrl + N （打开类查询框）

键入类名的关键字，会自动出现相关的类哦，右侧还有一个勾选项，能够把引用的 jar 包中的类也加进来，很强大 O(∩_∩)O~
![](/intellij/1589727046696.jfif)
> 6.2 Ctrl + Alt + 右箭头/左箭头（在曾经浏览过的代码行中来回跳）

如果操作系统装的是 NVIDIA 显卡驱动程序，那么触发这个热键，会把旋转显示内容，而不是触发 idea 的功能，因为 idea 热键被 NVIDIA 显卡驱动给劫持咯。
解决方法是禁用 NVIDIA 显卡驱动所有快捷键，：
* 1、控制面板-》显示-》屏幕分辨率：*
![](/intellij/1589727066531.jfif)
* 2、点击【高级设置】-》核芯显卡控制面板：*
![](/intellij/1589727077129.jfif)
* 3、图形属性-》选项与支持-》禁用所有快捷键（这些快捷键几乎没有什么用处！）*
![](/intellij/1589727098644.jfif)

> 6.3 Alt + F1（打开一个类型列表）

![](/intellij/1589727122757.jfif)
> 6.4 F11（添加为书签或者从书签中删除）

书签不是默认视图，所以我们要把它添加到当前视图中：View -> Tool Windows -> Favorites，打开 Favorites 面板：
![](/intellij/1589727139730.jfif)
Favorites 面板中的 Bookmarks 就是我们添加的书签哦：
![](/intellij/1589727150856.jfif)
或者直接使用 Shift + F11，打开书签列表也可以的哦 O(∩_∩)O~。
> 6.5 Ctrl + F11 （添加或删除带快捷键的书签）

会打开一个设置快捷键的面板，比如这里点击了 1，那么它的快捷键就是 Ctrl + 1。

注意不要选择面板提供的 26 个大写字母，因为这会与 idea 的其他快捷键冲突，不知道 idea 为什么要把它们放在这里？好奇怪 O(∩_∩)O~
![](/intellij/1589727177989.jfif)