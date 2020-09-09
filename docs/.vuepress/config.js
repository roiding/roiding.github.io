module.exports = {
    //定义静态资源路径别名
/*     configureWebpack: {
        resolve: {
          alias: {static
            '@static': ''
          }
        }
      }, */
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
        logo: '/favicons/favicon.png' ,
        nav: [
            { text: '首页', link: '/' },
            { text: 'github', link: 'https://github.com/maodou38'},
          ],
        sidebar : {
          '/docker/': [
             'docker-install',
             'docker-buildx',
             'docker-remote',
             'docker-command',
             'dockerfile-command',
             'docker-compose-command',
             'docker-app',
          ],
          '/linux/':[
            'centos',
          ],
        },
        searchMaxSuggestions: 10, //调整默认查找个数 10
        lastUpdated: 'Last Updated:',
        nextLinks: true, // 上/先一篇链接
        prevLinks: true,
        navbar: true, // 禁用导航栏
        displayAllHeaders: true, // 显示所有页面的标题链接 默认值：false 
    }
}