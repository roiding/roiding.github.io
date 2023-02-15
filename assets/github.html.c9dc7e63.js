import{_ as n,o as s,c as a,a as e}from"./app.7c042103.js";const t={},p=e(`<h2 id="actions\u96C6\u6210docker-buildx\u53CA\u63A8\u9001\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#actions\u96C6\u6210docker-buildx\u53CA\u63A8\u9001\u793A\u4F8B" aria-hidden="true">#</a> actions\u96C6\u6210docker buildx\u53CA\u63A8\u9001\u793A\u4F8B</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> build and push docker image to github package

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">path-context</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up QEMU
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>qemu<span class="token punctuation">-</span>action@v1
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Docker Buildx
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>buildx<span class="token punctuation">-</span>action@v1
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Login to DockerHub
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v1 
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKERHUB_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKERHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Login to Gitlab Container Registry
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v1 
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">registry</span><span class="token punctuation">:</span> registry.gitlab.com
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITLAB_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITLAB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Build and push
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/build<span class="token punctuation">-</span>push<span class="token punctuation">-</span>action@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">context</span><span class="token punctuation">:</span> .
          <span class="token key atrule">file</span><span class="token punctuation">:</span> ./Dockerfile
          <span class="token key atrule">push</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">tags</span><span class="token punctuation">:</span> registry.gitlab.com/$<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITLAB_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>/your<span class="token punctuation">-</span>repo/your<span class="token punctuation">-</span>app<span class="token punctuation">:</span>latest
          <span class="token key atrule">build-args</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            arg1=var1
            arg2=var2</span>
      <span class="token punctuation">-</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Image digest
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.docker_build.outputs.digest <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function u(l,i){return s(),a("div",null,c)}var k=n(t,[["render",u],["__file","github.html.vue"]]);export{k as default};
