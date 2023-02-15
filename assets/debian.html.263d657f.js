import{_ as e,o as n,c as i,a as s}from"./app.7c042103.js";const t={},c=s(`<h2 id="bbr" tabindex="-1"><a class="header-anchor" href="#bbr" aria-hidden="true">#</a> BBR</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#debian
echo &quot;net.core.default_qdisc=fq&quot; &gt;&gt; /etc/sysctl.conf
echo &quot;net.ipv4.tcp_congestion_control=bbr&quot; &gt;&gt; /etc/sysctl.conf
 #\u4FDD\u5B58\u751F\u6548
sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u95EDbbr" tabindex="-1"><a class="header-anchor" href="#\u5173\u95EDbbr" aria-hidden="true">#</a> \u5173\u95EDBBR</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#debian
sed -i &#39;/net\\.core\\.default_qdisc=fq/d&#39; /etc/sysctl.conf
sed -i &#39;/net\\.ipv4\\.tcp_congestion_control=bbr/d&#39; /etc/sysctl.conf
sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[c];function a(r,l){return n(),i("div",null,d)}var u=e(t,[["render",a],["__file","debian.html.vue"]]);export{u as default};
