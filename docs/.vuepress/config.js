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
  ],
  base: '/',
  title: '小丁的博客',
  lang:'zh-CN',
  description: '小丁的博客',
  head: [
    ['link', { rel: 'icon', href: '/favicons/favicon.png', type: 'image/png', sizes: '16x16' }]
  ],
  port: 9090,
  extraWatchFiles: [],
  theme: 'vuepress-theme-local', // 主题
  themeConfig: {
    logo: '/favicons/favicon.png',
    backToHome: '回到首页',
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
      ],
      '/linux/':[
            '/linux/centos.md',
            '/linux/debian.md',
            '/linux/linux.md',
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