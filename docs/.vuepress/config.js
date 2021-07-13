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
	  ['@vuepress/back-to-top'],
	  ['@vuepress/docsearch',{
		  appId: 'XEQSFBL9DS',
		  apiKey: '25a25110f2901993e844dff36f6449b8',
		  indexName: 'blog',
		  placeholder: '搜索',
		  searchParameters:{
			  hitsPerPage: 10,
			  //facetFilters:  "",
		  }
	  }],
    ],
    base: '/',
    title: '小丁的博客',
    description: '小丁的博客',
    head: [
        ['link', { rel: 'icon', href: '/favicons/favicon.png', type: 'image/png', sizes: '16x16'}]
    ],
    port: 9090,
    extraWatchFiles: [],
    theme: '@vuepress/theme-default', // 主题
    themeConfig: {
		repo: 'roiding/roiding.github.io',
        logo: '/favicons/favicon.png' ,
		editLink: false, //禁用编辑
		backToHome: '回到首页',
        navbar: [
            { text: '首页', link: '/' },
            { text: '荒废的代码仓库', link: 'https://github.com/maodou38'},
          ],
        sidebar : 'auto',
        lastUpdatedText: '上次编辑:'
    }
}