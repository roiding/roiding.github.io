---
title: CSS
head:
  - - meta
    - name: keywords
      content: CSS
---
## FLEX布局
### 使用FLEX布局
```css
    {
        display:flex
    }
```
### 设置元素的排列方向
* flex-direction
  * row 从左到右
  * row-reverse 从右到左
  * column 从上到下
  * column-reverse 从下到上
### 使容器内的元素换行
* flex-wrap
  * nowrap 不需要换行
  * wrap 换行
  * wrap-reverse 换行，但以相反顺序
### 设置元素在主轴上的对齐方式
* justify-content
  * flex-start 左对齐
  * flex-end 右对齐
  * center 居中对齐
  * space-between 间隔对齐，每个间隔一样宽
  * space-around 间隔对齐，最左最右有间隔，距离比`1：2`
### 设置元素在交叉轴上的对齐方式
* align-items
  * stretch 当元素高度没有设置，元素高度会拉伸至容器高度一致
  * flex-start 在交叉轴上向起点位置（向上/向左）对齐
  * flex-end 在交叉轴上向终点位置（向下/向右）对齐
  * center 居中对齐
  * baseline 保证元素中文字在同一条基准线
### 设置轴线的对齐方式（轴线当作元素，需要轴线超过1条）
* align-content
  * flex-start 左对齐
  * flex-end 右对齐
  * center 居中对齐
  * space-between 间隔对齐，每个间隔一样宽
  * space-around 间隔对齐，最左最右有间隔，距离比`1：2`
  * stretch 当元素高度没有设置，元素高度会拉伸至容器高度一致
### FLEX元素属性
* 元素顺序
  * order 默认为0，从小到大
* 元素放大比例
  * flex-grow 默认为0，有剩余空间时放大
* 元素缩小比例
  * flex-shrink 默认为1，0为不缩放
* 元素固定或自动空间占比
  * flex-basis
* 重写align-items父属性
  * align-self 覆盖父节点传递下来的对齐方式