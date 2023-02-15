import{_ as t,o as i,c as e,a as l}from"./app.7c042103.js";const a={},p=l('<h2 id="git\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> git\u5E38\u7528\u547D\u4EE4</h2><h3 id="\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83" aria-hidden="true">#</a> \u5176\u5B83</h3><p>git init\uFF1A\u521D\u59CB\u5316\u672C\u5730\u5E93</p><p>git status\uFF1A\u67E5\u770B\u5DE5\u4F5C\u533A\u3001\u6682\u5B58\u533A\u7684\u72B6\u6001</p><p>git add <code>&lt;file name&gt;</code>\uFF1A\u5C06\u5DE5\u4F5C\u533A\u7684\u201C\u65B0\u5EFA/\u4FEE\u6539\u201D\u6DFB\u52A0\u5230\u6682\u5B58\u533A</p><p>git rm --cached <code>&lt;file name&gt;</code>\uFF1A\u79FB\u9664\u6682\u5B58\u533A\u7684\u4FEE\u6539</p><p>git commit <code>&lt;file name&gt;</code>\uFF1A\u5C06\u6682\u5B58\u533A\u7684\u5185\u5BB9\u63D0\u4EA4\u5230\u672C\u5730\u5E93</p><ul><li>tip\uFF1A\u9700\u8981\u518D\u7F16\u8F91\u63D0\u4EA4\u65E5\u5FD7\uFF0C\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u5EFA\u8BAE\u7528\u4E0B\u9762\u5E26\u53C2\u6570\u7684\u63D0\u4EA4\u65B9\u6CD5</li></ul><p>git commit -m &quot;\u63D0\u4EA4\u65E5\u5FD7&quot; <code>&lt;file name&gt;</code>\uFF1A\u6587\u4EF6\u4ECE\u6682\u5B58\u533A\u5230\u672C\u5730\u5E93</p><h3 id="\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a> \u65E5\u5FD7</h3><p>git log\uFF1A\u67E5\u770B\u5386\u53F2\u63D0\u4EA4</p><ul><li>tip\uFF1A\u7A7A\u683C\u5411\u4E0B\u7FFB\u9875\uFF0Cb\u5411\u4E0A\u7FFB\u9875\uFF0Cq\u9000\u51FA</li></ul><p>git log --pretty=oneline\uFF1A\u4EE5\u6F02\u4EAE\u7684\u4E00\u884C\u663E\u793A\uFF0C\u5305\u542B\u5168\u90E8\u54C8\u5E0C\u7D22\u5F15\u503C</p><p>git log --oneline\uFF1A\u4EE5\u7B80\u6D01\u7684\u4E00\u884C\u663E\u793A\uFF0C\u5305\u542B\u7B80\u6D01\u54C8\u5E0C\u7D22\u5F15\u503C</p><p>git reflog\uFF1A\u4EE5\u7B80\u6D01\u7684\u4E00\u884C\u663E\u793A\uFF0C\u5305\u542B\u7B80\u6D01\u54C8\u5E0C\u7D22\u5F15\u503C\uFF0C\u540C\u65F6\u663E\u793A\u79FB\u52A8\u5230\u67D0\u4E2A\u5386\u53F2\u7248\u672C\u6240\u9700\u7684\u6B65\u6570</p><p>git log --stat [-<code>&lt;number&gt;</code> \u9650\u5236\u663E\u793A\u5386\u53F2\u63D0\u4EA4\u7684\u6570\u91CF] \u67E5\u770B\u4FEE\u6539\u4E86\u54EA\u4E9B\u6587\u4EF6</p><h3 id="\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> \u7248\u672C\u63A7\u5236</h3><p>git reset --hard \u7B80\u6D01/\u5B8C\u6574\u54C8\u5E0C\u7D22\u5F15\u503C\uFF1A\u56DE\u5230\u6307\u5B9A\u54C8\u5E0C\u503C\u6240\u5BF9\u5E94\u7684\u7248\u672C</p><p>git reset --hard HEAD\uFF1A\u5F3A\u5236\u5DE5\u4F5C\u533A\u3001\u6682\u5B58\u533A\u3001\u672C\u5730\u5E93\u4E3A\u5F53\u524DHEAD\u6307\u9488\u6240\u5728\u7684\u7248\u672C</p><p>git reset --hard HEAD^\uFF1A\u540E\u9000\u4E00\u4E2A\u7248\u672C</p><ul><li>tip\uFF1A\u4E00\u4E2A^\u8868\u793A\u56DE\u9000\u4E00\u4E2A\u7248\u672C</li></ul><p>git reset --hard HEAD~1\uFF1A\u540E\u9000\u4E00\u4E2A\u7248\u672C</p><ul><li>tip\uFF1A\u6CE2\u6D6A\u7EBF~\u540E\u9762\u7684\u6570\u5B57\u8868\u793A\u540E\u9000\u51E0\u4E2A\u7248\u672C</li></ul><h3 id="\u6BD4\u8F83\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u5DEE\u5F02" aria-hidden="true">#</a> \u6BD4\u8F83\u5DEE\u5F02</h3><p>git diff\uFF1A\u6BD4\u8F83\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5DEE\u5F02</p><p>git diff <code>&lt;file name&gt;</code>\uFF1A\u6BD4\u8F83\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u5DEE\u5F02</p><p>git diff HEAD|HEAD^|HEAD~|\u54C8\u5E0C\u7D22\u5F15\u503C <code>&lt;file name&gt;</code>\uFF1A\u6BD4\u8F83\u5DE5\u4F5C\u533A\u8DDF\u672C\u5730\u5E93\u7684\u67D0\u4E2A\u7248\u672C\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u5DEE\u5F02</p><h3 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u652F\u64CD\u4F5C</h3><p>git branch -v\uFF1A\u67E5\u770B\u6240\u6709\u5206\u652F</p><p>git branch -d &lt;\u5206\u652F\u540D&gt;\uFF1A\u5220\u9664\u672C\u5730\u5206\u652F</p><p>git branch &lt;\u5206\u652F\u540D&gt;\uFF1A\u65B0\u5EFA\u5206\u652F</p><p>git checkout &lt;\u5206\u652F\u540D&gt;\uFF1A\u5207\u6362\u5206\u652F</p><p>git merge &lt;\u88AB\u5408\u5E76\u5206\u652F\u540D&gt;\uFF1A\u5408\u5E76\u5206\u652F</p><ul><li><p>tip\uFF1A\u5982master\u5206\u652F\u5408\u5E76 hot_fix\u5206\u652F\uFF0C\u90A3\u4E48\u5F53\u524D\u5FC5\u987B\u5904\u4E8Emaster\u5206\u652F\u4E0A\uFF0C\u7136\u540E\u6267\u884C git merge hot_fix \u547D\u4EE4</p></li><li><p>tip2\uFF1A\u5408\u5E76\u51FA\u73B0\u51B2\u7A81</p><ol><li>\u5220\u9664git\u81EA\u52A8\u6807\u8BB0\u7B26\u53F7\uFF0C\u5982&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\u3001&gt;&gt;&gt;&gt;&gt;&gt;&gt;\u7B49</li><li>\u4FEE\u6539\u5230\u6EE1\u610F\u540E\uFF0C\u4FDD\u5B58\u9000\u51FA</li><li>git add <code>&lt;file name&gt;</code></li><li>git commit -m &quot;\u65E5\u5FD7\u4FE1\u606F&quot;\uFF0C\u6B64\u65F6\u540E\u9762\u4E0D\u8981\u5E26\u6587\u4EF6\u540D</li></ol></li></ul><h3 id="\u672C\u5730\u5E93\u8DDF\u8FDC\u7A0B\u5E93\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5E93\u8DDF\u8FDC\u7A0B\u5E93\u4EA4\u4E92" aria-hidden="true">#</a> \u672C\u5730\u5E93\u8DDF\u8FDC\u7A0B\u5E93\u4EA4\u4E92</h3><p>git clone &lt;\u8FDC\u7A0B\u5E93\u5730\u5740&gt;\uFF1A\u514B\u9686\u8FDC\u7A0B\u5E93 \u529F\u80FD\uFF1A</p><ol><li>\u5B8C\u6574\u7684\u514B\u9686\u8FDC\u7A0B\u5E93\u4E3A\u672C\u5730\u5E93</li><li>\u4E3A\u672C\u5730\u5E93\u65B0\u5EFAorigin\u522B\u540D</li><li>\u521D\u59CB\u5316\u672C\u5730\u5E93</li></ol><p>git remote -v\uFF1A\u67E5\u770B\u8FDC\u7A0B\u5E93\u5730\u5740\u522B\u540D</p><p>git remote add &lt;\u522B\u540D&gt; &lt;\u8FDC\u7A0B\u5E93\u5730\u5740&gt;\uFF1A\u65B0\u5EFA\u8FDC\u7A0B\u5E93\u5730\u5740\u522B\u540D</p><p>git remote rm &lt;\u522B\u540D&gt;\uFF1A\u5220\u9664\u672C\u5730\u4E2D\u8FDC\u7A0B\u5E93\u522B\u540D</p><p>git push &lt;\u522B\u540D&gt; &lt;\u5206\u652F\u540D&gt;\uFF1A\u672C\u5730\u5E93\u67D0\u4E2A\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\uFF0C\u5206\u652F\u5FC5\u987B\u6307\u5B9A</p><p>git pull &lt;\u522B\u540D&gt; &lt;\u5206\u652F\u540D&gt;\uFF1A\u628A\u8FDC\u7A0B\u5E93\u7684\u4FEE\u6539\u62C9\u53D6\u5230\u672C\u5730</p><p>tip\uFF1A\u8BE5\u547D\u4EE4\u5305\u62ECgit fetch\uFF0Cgit merge</p><p>git fetch &lt;\u8FDC\u7A0B\u5E93\u522B\u540D&gt; &lt;\u8FDC\u7A0B\u5E93\u5206\u652F\u540D&gt;\uFF1A\u6293\u53D6\u8FDC\u7A0B\u5E93\u7684\u6307\u5B9A\u5206\u652F\u5230\u672C\u5730\uFF0C\u4F46\u6CA1\u6709\u5408\u5E76</p><p>git merge &lt;\u8FDC\u7A0B\u5E93\u522B\u540D/\u8FDC\u7A0B\u5E93\u5206\u652F\u540D&gt;\uFF1A\u5C06\u6293\u53D6\u4E0B\u6765\u7684\u8FDC\u7A0B\u7684\u5206\u652F\uFF0C\u8DDF\u5F53\u524D\u6240\u5728\u5206\u652F\u8FDB\u884C\u5408\u5E76</p><p>git fork\uFF1A\u590D\u5236\u8FDC\u7A0B\u5E93</p><ul><li>tip\uFF1A\u4E00\u822C\u662F\u5916\u9762\u56E2\u961F\u7684\u5F00\u53D1\u4EBA\u5458fork\u672C\u56E2\u961F\u9879\u76EE\uFF0C\u7136\u540E\u8FDB\u884C\u5F00\u53D1\uFF0C\u4E4B\u540E\u5916\u9762\u56E2\u961F\u53D1\u8D77pull request\uFF0C\u7136\u540E\u672C\u56E2\u961F\u8FDB\u884C\u5BA1\u6838\uFF0C\u5982\u65E0\u95EE\u9898\u672C\u56E2\u961F\u8FDB\u884Cmerge\uFF08\u5408\u5E76\uFF09\u5230\u56E2\u961F\u81EA\u5DF1\u7684\u8FDC\u7A0B\u5E93\uFF0C\u6574\u4E2A\u6D41\u7A0B\u5C31\u662F\u672C\u56E2\u961F\u8DDF\u5916\u9762\u56E2\u961F\u7684\u534F\u540C\u5F00\u53D1\u6D41\u7A0B\uFF0CLinux\u7684\u56E2\u961F\u5F00\u53D1\u6210\u5458\u5373\u4E3A\u8FD9\u79CD\u5DE5\u4F5C\u65B9\u5F0F\u3002</li></ul>',47),g=[p];function r(d,o){return i(),e("div",null,g)}var c=t(a,[["render",r],["__file","git.html.vue"]]);export{c as default};
