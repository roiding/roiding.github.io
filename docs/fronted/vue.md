---
title: Vue
head:
  - - meta
    - name: keywords
      content: Vue注意事项
---
## 注意点
<span style='color:red'>父子组件中，如果需要传给子组件props的内容是通过网络延时获取的，子组件需要做延时处理或渲染前处理</span>