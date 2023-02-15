const e=JSON.parse('{"key":"v-19aaf8a6","path":"/python/pandas.html","title":"Pandas","lang":"zh-CN","frontmatter":{"title":"Pandas","sidebarDepth":4,"head":[["meta",{"name":"keywords","content":"Pandas"}],["meta",{"property":"og:url","content":"https://blog.ran-ding.ga/python/pandas.html"}],["meta",{"property":"og:site_name","content":"\u5C0F\u4E01\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"Pandas"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-21T01:38:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:restrictions:age","content":"[12]+"}],["meta",{"name":"twitter:creator","content":"roiding1"}],["meta",{"property":"article:author","content":"roiding"}],["meta",{"property":"article:modified_time","content":"2022-06-21T01:38:37.000Z"}],["link",{"rel":"canonical","href":"https://blog.ran-ding.ga/python/pandas.html"}]],"summary":"Pandas\u4ECB\u7ECD 2008\u5E74WesMcKinney\u5F00\u53D1\u51FA\u7684\u5E93; \u4E13\u95E8\u7528\u4E8E\u6570\u636E\u6316\u6398\u7684\u5F00\u6E90python\u5E93; \u4EE5Numpy\u4E3A\u57FA\u7840\uFF0C\u501F\u529BNumpy\u6A21\u5757\u5728\u8BA1\u7B97\u65B9\u9762\u6027\u80FD\u9AD8\u7684\u4F18\u52BF; \u57FA\u4E8Ematplotlib\uFF0C\u80FD\u591F\u7B80\u4FBF\u7684\u753B\u56FE; \u72EC\u7279\u7684\u6570\u636E\u7ED3\u6784; \u4E3A\u4EC0\u4E48\u4F7F\u7528Pandas Numpy\u5DF2\u7ECF\u80FD\u591F\u5E2E\u52A9\u6211\u4EEC\u5904\u7406\u6570\u636E\uFF0C\u80FD\u591F\u7ED3\u5408matplotlib\u89E3\u51B3\u90E8\u5206\u6570\u636E\u5C55\u793A\u7B49\u95EE\u9898\uFF0C\u90A3\u4E48pandas\u5B66"},"excerpt":"","headers":[{"level":2,"title":"Pandas\u4ECB\u7ECD","slug":"pandas\u4ECB\u7ECD","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528Pandas","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528pandas","children":[]},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B","children":[{"level":4,"title":"\u95EE\u9898\uFF1A\u5982\u4F55\u8BA9\u6570\u636E\u66F4\u6709\u610F\u4E49\u7684\u663E\u793A\uFF1F\u5904\u7406\u521A\u624D\u7684\u80A1\u7968\u6570\u636E","slug":"\u95EE\u9898-\u5982\u4F55\u8BA9\u6570\u636E\u66F4\u6709\u610F\u4E49\u7684\u663E\u793A-\u5904\u7406\u521A\u624D\u7684\u80A1\u7968\u6570\u636E","children":[]}]},{"level":3,"title":"DataFrame","slug":"dataframe","children":[{"level":4,"title":"DataFrame\u7ED3\u6784","slug":"dataframe\u7ED3\u6784","children":[]},{"level":4,"title":"DataFrame\u7684\u5C5E\u6027","slug":"dataframe\u7684\u5C5E\u6027","children":[]}]},{"level":3,"title":"DatatFrame\u7D22\u5F15\u7684\u8BBE\u7F6E","slug":"datatframe\u7D22\u5F15\u7684\u8BBE\u7F6E","children":[{"level":4,"title":"\u4FEE\u6539\u884C\u5217\u7D22\u5F15\u503C","slug":"\u4FEE\u6539\u884C\u5217\u7D22\u5F15\u503C","children":[]},{"level":4,"title":"\u91CD\u8BBE\u7D22\u5F15","slug":"\u91CD\u8BBE\u7D22\u5F15","children":[]},{"level":4,"title":"\u4EE5\u67D0\u5217\u503C\u8BBE\u7F6E\u4E3A\u65B0\u7684\u7D22\u5F15","slug":"\u4EE5\u67D0\u5217\u503C\u8BBE\u7F6E\u4E3A\u65B0\u7684\u7D22\u5F15","children":[]}]},{"level":3,"title":"MultiIndex\u4E0EPanel","slug":"multiindex\u4E0Epanel","children":[{"level":4,"title":"MultiIndex","slug":"multiindex","children":[]},{"level":4,"title":"Panel","slug":"panel","children":[]}]},{"level":3,"title":"Series\u7ED3\u6784","slug":"series\u7ED3\u6784","children":[{"level":4,"title":"\u521B\u5EFAseries","slug":"\u521B\u5EFAseries","children":[]},{"level":4,"title":"series\u83B7\u53D6\u5C5E\u6027\u548C\u503C","slug":"series\u83B7\u53D6\u5C5E\u6027\u548C\u503C","children":[]}]}]},{"level":2,"title":"\u57FA\u672C\u6570\u636E\u64CD\u4F5C","slug":"\u57FA\u672C\u6570\u636E\u64CD\u4F5C","children":[{"level":3,"title":"\u7D22\u5F15\u64CD\u4F5C","slug":"\u7D22\u5F15\u64CD\u4F5C","children":[{"level":4,"title":"\u76F4\u63A5\u4F7F\u7528\u884C\u5217\u7D22\u5F15(\u5148\u5217\u540E\u884C)","slug":"\u76F4\u63A5\u4F7F\u7528\u884C\u5217\u7D22\u5F15-\u5148\u5217\u540E\u884C","children":[]},{"level":4,"title":"\u7ED3\u5408loc\u6216\u8005iloc\u4F7F\u7528\u7D22\u5F15","slug":"\u7ED3\u5408loc\u6216\u8005iloc\u4F7F\u7528\u7D22\u5F15","children":[]},{"level":4,"title":"\u4F7F\u7528ix\u7EC4\u5408\u7D22\u5F15","slug":"\u4F7F\u7528ix\u7EC4\u5408\u7D22\u5F15","children":[]}]},{"level":3,"title":"\u8D4B\u503C\u64CD\u4F5C","slug":"\u8D4B\u503C\u64CD\u4F5C","children":[]},{"level":3,"title":"\u6392\u5E8F","slug":"\u6392\u5E8F","children":[]}]},{"level":2,"title":"DataFrame\u8FD0\u7B97","slug":"dataframe\u8FD0\u7B97","children":[{"level":3,"title":"\u7B97\u672F\u8FD0\u7B97","slug":"\u7B97\u672F\u8FD0\u7B97","children":[]},{"level":3,"title":"\u903B\u8F91\u8FD0\u7B97","slug":"\u903B\u8F91\u8FD0\u7B97","children":[{"level":4,"title":"\u903B\u8F91\u8FD0\u7B97\u7B26\u53F7<\u3001 >\u3001|\u3001 &","slug":"\u903B\u8F91\u8FD0\u7B97\u7B26\u53F7-\u3001-\u3001-\u3001","children":[]},{"level":4,"title":"\u903B\u8F91\u8FD0\u7B97\u51FD\u6570","slug":"\u903B\u8F91\u8FD0\u7B97\u51FD\u6570","children":[]}]},{"level":3,"title":"\u7EDF\u8BA1\u8FD0\u7B97","slug":"\u7EDF\u8BA1\u8FD0\u7B97","children":[{"level":4,"title":"describe()","slug":"describe","children":[]},{"level":4,"title":"\u7EDF\u8BA1\u51FD\u6570","slug":"\u7EDF\u8BA1\u51FD\u6570","children":[]}]},{"level":3,"title":"\u7D2F\u8BA1\u7EDF\u8BA1\u51FD\u6570","slug":"\u7D2F\u8BA1\u7EDF\u8BA1\u51FD\u6570","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u8FD0\u7B97","slug":"\u81EA\u5B9A\u4E49\u8FD0\u7B97","children":[]}]},{"level":2,"title":"Pandas\u753B\u56FE","slug":"pandas\u753B\u56FE","children":[{"level":3,"title":"pandas.DataFrame.plot","slug":"pandas-dataframe-plot","children":[]},{"level":3,"title":"pandas.Series.plot","slug":"pandas-series-plot","children":[]}]},{"level":2,"title":"\u6587\u4EF6\u8BFB\u53D6\u4E0E\u5B58\u50A8","slug":"\u6587\u4EF6\u8BFB\u53D6\u4E0E\u5B58\u50A8","children":[{"level":3,"title":"CSV","slug":"csv","children":[{"level":4,"title":"read_csv","slug":"read-csv","children":[]},{"level":4,"title":"to_csv","slug":"to-csv","children":[]},{"level":4,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B-1","children":[]}]},{"level":3,"title":"HDF5","slug":"hdf5","children":[{"level":4,"title":"read_hdf\u4E0Eto_hdf","slug":"read-hdf\u4E0Eto-hdf","children":[]},{"level":4,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B-2","children":[]}]},{"level":3,"title":"JSON","slug":"json","children":[{"level":4,"title":"read_json","slug":"read-json","children":[]},{"level":4,"title":"read_josn \u6848\u4F8B","slug":"read-josn-\u6848\u4F8B","children":[]},{"level":4,"title":"to_json","slug":"to-json","children":[]},{"level":4,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B-3","children":[]}]},{"level":3,"title":"\u62D3\u5C55","slug":"\u62D3\u5C55","children":[]}]},{"level":2,"title":"\u9AD8\u7EA7\u5904\u7406-\u7F3A\u5931\u503C\u5904\u7406","slug":"\u9AD8\u7EA7\u5904\u7406-\u7F3A\u5931\u503C\u5904\u7406","children":[{"level":3,"title":"\u5982\u4F55\u5904\u7406nan","slug":"\u5982\u4F55\u5904\u7406nan","children":[]},{"level":3,"title":"\u7535\u5F71\u6570\u636E\u7684\u7F3A\u5931\u503C\u5904\u7406","slug":"\u7535\u5F71\u6570\u636E\u7684\u7F3A\u5931\u503C\u5904\u7406","children":[{"level":4,"title":"\u5224\u65AD\u7F3A\u5931\u503C\u662F\u5426\u5B58\u5728","slug":"\u5224\u65AD\u7F3A\u5931\u503C\u662F\u5426\u5B58\u5728","children":[]},{"level":4,"title":"\u5B58\u5728\u7F3A\u5931\u503Cnan,\u5E76\u4E14\u662Fnp.nan","slug":"\u5B58\u5728\u7F3A\u5931\u503Cnan-\u5E76\u4E14\u662Fnp-nan","children":[]},{"level":4,"title":"\u4E0D\u662F\u7F3A\u5931\u503Cnan\uFF0C\u6709\u9ED8\u8BA4\u6807\u8BB0\u7684","slug":"\u4E0D\u662F\u7F3A\u5931\u503Cnan-\u6709\u9ED8\u8BA4\u6807\u8BB0\u7684","children":[]}]}]},{"level":2,"title":"\u9AD8\u7EA7\u5904\u7406-\u6570\u636E\u79BB\u6563\u5316","slug":"\u9AD8\u7EA7\u5904\u7406-\u6570\u636E\u79BB\u6563\u5316","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48\u8981\u79BB\u6563\u5316","slug":"\u4E3A\u4EC0\u4E48\u8981\u79BB\u6563\u5316","children":[]},{"level":3,"title":"\u4EC0\u4E48\u662F\u6570\u636E\u7684\u79BB\u6563\u5316","slug":"\u4EC0\u4E48\u662F\u6570\u636E\u7684\u79BB\u6563\u5316","children":[]},{"level":3,"title":"\u80A1\u7968\u7684\u6DA8\u8DCC\u5E45\u79BB\u6563\u5316","slug":"\u80A1\u7968\u7684\u6DA8\u8DCC\u5E45\u79BB\u6563\u5316","children":[{"level":4,"title":"\u8BFB\u53D6\u80A1\u7968\u7684\u6570\u636E","slug":"\u8BFB\u53D6\u80A1\u7968\u7684\u6570\u636E","children":[]},{"level":4,"title":"\u5C06\u80A1\u7968\u6DA8\u8DCC\u5E45\u6570\u636E\u8FDB\u884C\u5206\u7EC4","slug":"\u5C06\u80A1\u7968\u6DA8\u8DCC\u5E45\u6570\u636E\u8FDB\u884C\u5206\u7EC4","children":[]},{"level":4,"title":"\u80A1\u7968\u6DA8\u8DCC\u5E45\u5206\u7EC4\u6570\u636E\u53D8\u6210one-hot\u7F16\u7801","slug":"\u80A1\u7968\u6DA8\u8DCC\u5E45\u5206\u7EC4\u6570\u636E\u53D8\u6210one-hot\u7F16\u7801","children":[]}]}]},{"level":2,"title":"\u9AD8\u7EA7\u5904\u7406-\u5408\u5E76","slug":"\u9AD8\u7EA7\u5904\u7406-\u5408\u5E76","children":[{"level":3,"title":"pd.concat\u5B9E\u73B0\u6570\u636E\u5408\u5E76","slug":"pd-concat\u5B9E\u73B0\u6570\u636E\u5408\u5E76","children":[]},{"level":3,"title":"pd.merge","slug":"pd-merge","children":[]},{"level":3,"title":"pd.merge\u5408\u5E76","slug":"pd-merge\u5408\u5E76","children":[]}]},{"level":2,"title":"\u9AD8\u7EA7\u5904\u7406-\u4EA4\u53C9\u8868\u4E0E\u900F\u89C6\u8868","slug":"\u9AD8\u7EA7\u5904\u7406-\u4EA4\u53C9\u8868\u4E0E\u900F\u89C6\u8868","children":[{"level":3,"title":"\u4EA4\u53C9\u8868\u4E0E\u900F\u89C6\u8868\u4EC0\u4E48\u4F5C\u7528","slug":"\u4EA4\u53C9\u8868\u4E0E\u900F\u89C6\u8868\u4EC0\u4E48\u4F5C\u7528","children":[]},{"level":3,"title":"\u4F7F\u7528crosstab(\u4EA4\u53C9\u8868)\u5B9E\u73B0\u4E0A\u56FE","slug":"\u4F7F\u7528crosstab-\u4EA4\u53C9\u8868-\u5B9E\u73B0\u4E0A\u56FE","children":[]},{"level":3,"title":"\u6848\u4F8B\u5206\u6790","slug":"\u6848\u4F8B\u5206\u6790","children":[{"level":4,"title":"\u6570\u636E\u51C6\u5907","slug":"\u6570\u636E\u51C6\u5907","children":[]},{"level":4,"title":"\u67E5\u770B\u6548\u679C","slug":"\u67E5\u770B\u6548\u679C","children":[]},{"level":4,"title":"\u4F7F\u7528pivot_table(\u900F\u89C6\u8868)\u5B9E\u73B0","slug":"\u4F7F\u7528pivot-table-\u900F\u89C6\u8868-\u5B9E\u73B0","children":[]}]}]},{"level":2,"title":"\u9AD8\u7EA7\u5904\u7406-\u5206\u7EC4\u4E0E\u805A\u5408","slug":"\u9AD8\u7EA7\u5904\u7406-\u5206\u7EC4\u4E0E\u805A\u5408","children":[{"level":3,"title":"\u4EC0\u4E48\u5206\u7EC4\u4E0E\u805A\u5408","slug":"\u4EC0\u4E48\u5206\u7EC4\u4E0E\u805A\u5408","children":[]},{"level":3,"title":"\u5206\u7EC4API","slug":"\u5206\u7EC4api","children":[]},{"level":3,"title":"\u661F\u5DF4\u514B\u96F6\u552E\u5E97\u94FA\u6570\u636E","slug":"\u661F\u5DF4\u514B\u96F6\u552E\u5E97\u94FA\u6570\u636E","children":[{"level":4,"title":"\u6570\u636E\u83B7\u53D6","slug":"\u6570\u636E\u83B7\u53D6","children":[]},{"level":4,"title":"\u8FDB\u884C\u5206\u7EC4\u805A\u5408","slug":"\u8FDB\u884C\u5206\u7EC4\u805A\u5408","children":[]}]}]},{"level":2,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B-4","children":[{"level":3,"title":"\u9700\u6C42","slug":"\u9700\u6C42","children":[]},{"level":3,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0","children":[{"level":4,"title":"\u95EE\u9898\u4E00","slug":"\u95EE\u9898\u4E00","children":[]},{"level":4,"title":"\u95EE\u9898\u4E8C","slug":"\u95EE\u9898\u4E8C","children":[]},{"level":4,"title":"\u95EE\u9898\u4E09","slug":"\u95EE\u9898\u4E09","children":[]}]}]},{"level":2,"title":"Pandas\u4E2D\u6587API","slug":"pandas\u4E2D\u6587api","children":[]}],"git":{"updatedTime":1655775517000,"contributors":[{"name":"roiding","email":"dingran@ran-ding.ga","commits":2}]},"filePathRelative":"python/pandas.md"}');export{e as data};