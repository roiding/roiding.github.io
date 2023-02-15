import{_ as n,o as s,c as a,a as e}from"./app.7c042103.js";const t={},p=e(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MYSQL</h1><h2 id="\u5206\u533A\u53D6\u524Dn\u6761" tabindex="-1"><a class="header-anchor" href="#\u5206\u533A\u53D6\u524Dn\u6761" aria-hidden="true">#</a> \u5206\u533A\u53D6\u524DN\u6761</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	TB <span class="token keyword">AS</span> a 
<span class="token keyword">WHERE</span>
	<span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span>
		<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> 
	<span class="token keyword">FROM</span>
		TB <span class="token keyword">AS</span> b 
	<span class="token keyword">WHERE</span>
        a<span class="token punctuation">.</span>\u5206\u7EC4\u5B57\u6BB5<span class="token operator">=</span>b<span class="token punctuation">.</span>\u5206\u7EC4\u5B57\u6BB5
		<span class="token operator">and</span> a<span class="token punctuation">.</span>\u5206\u7EC4\u5B57\u6BB5 <span class="token operator">=</span> b<span class="token punctuation">.</span>\u5206\u7EC4\u5B57\u6BB5 
		<span class="token operator">AND</span> b<span class="token punctuation">.</span>\u6392\u5E8F\u5B57\u6BB5 <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>\u6392\u5E8F\u5B57\u6BB5 
	<span class="token punctuation">)</span><span class="token operator">&lt;=</span> <span class="token number">2</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	a<span class="token punctuation">.</span>\u5206\u7EC4\u5B57\u6BB5<span class="token punctuation">,</span>
	a<span class="token punctuation">.</span>\u5206\u7EC4\u5B57\u6BB5<span class="token punctuation">,</span>
	a<span class="token punctuation">.</span>\u6392\u5E8F\u5B57\u6BB5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u7EC4\u53D6\u7B2C\u4E00\u6761" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u53D6\u7B2C\u4E00\u6761" aria-hidden="true">#</a> \u5206\u7EC4\u53D6\u7B2C\u4E00\u6761</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	a<span class="token punctuation">.</span><span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> idc_bank_statement <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> page_num <span class="token keyword">asc</span><span class="token punctuation">)</span> a 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	a<span class="token punctuation">.</span>period_id<span class="token punctuation">,</span>
	a<span class="token punctuation">.</span>tax_number<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function o(i,c){return s(),a("div",null,l)}var r=n(t,[["render",o],["__file","sql.html.vue"]]);export{r as default};
