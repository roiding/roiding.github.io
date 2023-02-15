const e=JSON.parse('{"key":"v-e6487068","path":"/java/jvm.html","title":"JVM","lang":"zh-CN","frontmatter":{"title":"JVM","head":[["meta",{"name":"keywords","content":"JVM"}],["meta",{"property":"og:url","content":"https://blog.ran-ding.ga/java/jvm.html"}],["meta",{"property":"og:site_name","content":"\u5C0F\u4E01\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"JVM"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-21T01:38:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:restrictions:age","content":"[12]+"}],["meta",{"name":"twitter:creator","content":"roiding1"}],["meta",{"property":"article:author","content":"roiding"}],["meta",{"property":"article:modified_time","content":"2022-06-21T01:38:37.000Z"}],["link",{"rel":"canonical","href":"https://blog.ran-ding.ga/java/jvm.html"}]],"summary":"JVM->JRE->JDK \u5173\u7CFB JDK(Java Development Kit) \u662F Java \u8BED\u8A00\u7684\u8F6F\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305\uFF08SDK\uFF09\u3002JDK \u7269\u7406\u5B58\u5728\uFF0C\u662F programming tools\u3001JRE \u548C JVM \u7684\u4E00\u4E2A\u96C6\u5408\u3002; JRE\uFF08Java Runtime Environment\uFF09Java \u8FD0\u884C\u65F6\u73AF\u5883\uFF0CJRE \u662F\u7269\u7406\u5B58\u5728\u7684\uFF0C\u4E3B\u8981\u7531Java API \u548C JV"},"excerpt":"","headers":[{"level":2,"title":"JVM->JRE->JDK \u5173\u7CFB","slug":"jvm-jre-jdk-\u5173\u7CFB","children":[{"level":3,"title":"JVM\u7279\u70B9","slug":"jvm\u7279\u70B9","children":[]}]},{"level":2,"title":"\u7C7B\u52A0\u8F7D\u5668","slug":"\u7C7B\u52A0\u8F7D\u5668","children":[{"level":3,"title":"\u5173\u7CFB","slug":"\u5173\u7CFB","children":[]},{"level":3,"title":"\u53CC\u4EB2\u59D4\u6258","slug":"\u53CC\u4EB2\u59D4\u6258","children":[]},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9","children":[]},{"level":3,"title":"\u7C7B\u7684\u52A8\u6001\u52A0\u8F7D","slug":"\u7C7B\u7684\u52A8\u6001\u52A0\u8F7D","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668","slug":"\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668","children":[{"level":4,"title":"\u6D4B\u8BD5\u7F16\u5199\u7684\u7C7B\u52A0\u8F7D\u5668","slug":"\u6D4B\u8BD5\u7F16\u5199\u7684\u7C7B\u52A0\u8F7D\u5668","children":[{"level":5,"title":"\u573A\u666F\u4E00","slug":"\u573A\u666F\u4E00","children":[]},{"level":5,"title":"\u573A\u666F\u4E8C","slug":"\u573A\u666F\u4E8C","children":[]}]}]}]},{"level":2,"title":"\u5185\u5B58\u7ED3\u6784","slug":"\u5185\u5B58\u7ED3\u6784","children":[{"level":3,"title":"Java\u5806\uFF08Heap\uFF09","slug":"java\u5806-heap","children":[{"level":4,"title":"\u65B9\u6CD5\u533A\uFF08Method Area\uFF09","slug":"\u65B9\u6CD5\u533A-method-area","children":[]}]},{"level":3,"title":"\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF08Program Counter Register\uFF09","slug":"\u7A0B\u5E8F\u8BA1\u6570\u5668-program-counter-register","children":[]},{"level":3,"title":"JVM\u6808\uFF08JVM Stacks\uFF09","slug":"jvm\u6808-jvm-stacks","children":[]},{"level":3,"title":"\u672C\u5730\u65B9\u6CD5\u6808\uFF08Native Method Stacks\uFF09","slug":"\u672C\u5730\u65B9\u6CD5\u6808-native-method-stacks","children":[]},{"level":3,"title":"OutOfMemoryErrors\u5206\u6790","slug":"outofmemoryerrors\u5206\u6790","children":[]}]},{"level":2,"title":"JVM\u5BF9\u8C61","slug":"jvm\u5BF9\u8C61","children":[{"level":3,"title":"\u5BF9\u8C61\u7684\u521B\u5EFA","slug":"\u5BF9\u8C61\u7684\u521B\u5EFA","children":[]},{"level":3,"title":"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D","slug":"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D","children":[]},{"level":3,"title":"\u5BF9\u8C61\u7684\u521D\u59CB\u5316","slug":"\u5BF9\u8C61\u7684\u521D\u59CB\u5316","children":[]}]},{"level":2,"title":"JVM\u5783\u573E\u56DE\u6536\u7B97\u6CD5","slug":"jvm\u5783\u573E\u56DE\u6536\u7B97\u6CD5","children":[{"level":3,"title":"\u5BF9\u8C61\u751F\u6B7B\u5224\u5B9A","slug":"\u5BF9\u8C61\u751F\u6B7B\u5224\u5B9A","children":[]},{"level":3,"title":"\u5BF9\u8C61\u5F15\u7528\u5206\u7C7B","slug":"\u5BF9\u8C61\u5F15\u7528\u5206\u7C7B","children":[]},{"level":3,"title":"finalize()\u4E8C\u6B21\u6807\u8BB0","slug":"finalize-\u4E8C\u6B21\u6807\u8BB0","children":[]},{"level":3,"title":"\u5783\u573E\u56DE\u6536\u7B97\u6CD5","slug":"\u5783\u573E\u56DE\u6536\u7B97\u6CD5","children":[]}]},{"level":2,"title":"\u5783\u573E\u56DE\u6536\u5668","slug":"\u5783\u573E\u56DE\u6536\u5668","children":[]},{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4","children":[{"level":3,"title":"jps","slug":"jps","children":[]},{"level":3,"title":"jstat","slug":"jstat","children":[]},{"level":3,"title":"jmap","slug":"jmap","children":[]},{"level":3,"title":"jhat","slug":"jhat","children":[]},{"level":3,"title":"jstack","slug":"jstack","children":[]},{"level":3,"title":"jinfo","slug":"jinfo","children":[]},{"level":3,"title":"JVM\u7EBF\u4E0A\u76D1\u63A7\u5DE5\u5177\u8BE6\u60C5","slug":"jvm\u7EBF\u4E0A\u76D1\u63A7\u5DE5\u5177\u8BE6\u60C5","children":[]}]}],"git":{"updatedTime":1655775517000,"contributors":[{"name":"roiding","email":"dingran@ran-ding.ga","commits":3},{"name":"roiding","email":"maodoulove19950815@gmail.com","commits":3}]},"filePathRelative":"java/jvm.md"}');export{e as data};