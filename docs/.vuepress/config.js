module.exports = {
  //定义静态资源路径别名
  /*     configureWebpack: {
          resolve: {
            alias: {static
              '@static': ''
            }
          }
        }, */
  plugins: [
    ['@vuepress/docsearch', {
      appId: 'XEQSFBL9DS',
      apiKey: '25a25110f2901993e844dff36f6449b8',
      indexName: 'blog',
      placeholder: '搜索',
      searchParameters: {
        hitsPerPage: 10,
        //facetFilters:  "",
      }
    }],
    ['@vuepress/plugin-google-analytics',{
        id: 'G-DJ563FK52Q',
    }],
    ['vuepress-plugin-baidu-analytics',{
        id: '53648d3636c154d6532ae47fd64401a0',
    }],
    ['vuepress-plugin-sitemap2',{
      hostname: 'https://blog.ran-ding.ga',
      outFile: 'sitemap.xml',
      exclude: ["/404.html"]
    }],
  ],
  base: '/',
  title: '小丁的博客',
  lang:'zh-CN',
  description: '一个专注于整理日常学习的新技术框架知识和使用过程中遇到的问题及解决方案的小站',
  markdown: {
    extractHeaders:{
        level: [2,3,4],
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicons/favicon.png', type: 'image/png', sizes: '16x16' }],
    /* bing的请求统计js 暂不单独做插件 */
    ['script',{},`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "7vp68ppzv2");
    `],
    ['meta', { name: 'keywords', content: 'Java,Python,SpringBoot,SpringCloud,SpringAlibaba,VuePress'}],
  ],
  port: 9090,
  extraWatchFiles: [],
  theme: require.resolve('./theme/'), // 主题
  themeConfig: {
    logo: '/favicons/favicon.png',
    backToHome: '回到首页',
    notFound: ['小伙子，别犯罪，我还没写呢，你就访问！','再请求没有的页面，我要报警了啊！','好汉，报上名来，什么意思，老请求没有的页面'],
    toggleDarkMode: '模式切换',
    navbar: [
      { text: '首页', link: '/' },
      { text: '荒废的代码仓库', link: 'https://github.com/maodou38' },
    ],
    sidebar: {
      '/docker/':[
            '/docker/docker-install.md',
            '/docker/docker-buildx.md',
            '/docker/docker-remote.md',
            '/docker/docker-command.md',
            '/docker/dockerfile-command.md',
            '/docker/docker-compose-command.md',
            '/docker/docker-app.md',
            '/docker/attention.md',
      ],
      '/guide/':[
            '/guide/README.md',
      ],
      '/java/':[
            '/java/jvm.md',
            '/java/spring.md',
			      '/java/JPA.md',
            '/java/spring-security.md',
            '/java/springboot.md',
            '/java/java-connect.md',
            '/java/java-blog.md',
            '/java/framework.md'
      ],
      '/python/':[
             '/python/jupyter.md',
             '/python/matplotlib.md',
             '/python/numpy.md',
             '/python/pandas.md',
      ],
      '/linux/':[
            '/linux/centos.md',
            '/linux/debian.md',
            '/linux/LVM.md',
            '/linux/linux.md',
      ],
      '/fronted/':[
        '/fronted/css.md',
      ],
      '/opencv/':[
            '/opencv/opencv-java.md',
      ],
      '/sql/':[
            '/sql/sql.md',
      ],
      '/tools/':[
            '/tools/git.md',
            '/tools/intellij.md',
            '/tools/nginx.md',
      ],
      '/vps/':[
            '/vps/euserv.md',
      ],
      '/github/':[
            '/github/github.md',
      ],
      '/cloud/':[
        '/cloud/dns.md',
      ],
      '/openwrt':[
        'attention.md',
      ],
      '/':[
            '/resource.md',
            '/attention.md',
      ],
    },
    lastUpdatedText: '上次更新',
    repo: 'https://github.com/roiding/roiding.github.io',
    docsRepo: 'https://github.com/roiding/roiding.github.io',
    docsBranch: 'docs',
    docsDir: 'docs',
    editLinkText:'编辑此页',
    editLinkPattern: ':repo/edit/:branch/:path',
  }
}