import{_ as a,o as n,c as s,a as e}from"./app.7c042103.js";const t={},o=e(`<ol><li>\u9047\u5230\u4EFB\u4F55\u7F51\u7EDC\u95EE\u9898\uFF0C\u5148\u628A\u5BBF\u4E3B\u673A\u9632\u706B\u5899\u5173\u4E86\u518D\u8BD5\uFF01\uFF01\uFF01</li></ol><h2 id="apline\u955C\u50CF\u65F6\u533A\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#apline\u955C\u50CF\u65F6\u533A\u66F4\u6539" aria-hidden="true">#</a> Apline\u955C\u50CF\u65F6\u533A\u66F4\u6539</h2><p>dockerfile\u589E\u52A0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u65F6\u533A\u4E3A\u4E0A\u6D77</span>
RUN apk <span class="token function">add</span> tzdata <span class="token operator">&amp;&amp;</span> <span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Asia/Shanghai&quot;</span> <span class="token operator">&gt;</span> /etc/timezone <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> apk del tzdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function c(l,p){return n(),s("div",null,i)}var d=a(t,[["render",c],["__file","attention.html.vue"]]);export{d as default};
