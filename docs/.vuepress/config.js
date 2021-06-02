








module.exports = {
    //定义静态资源路径别名
/*     configureWebpack: {
        resolve: {
          alias: {static
            '@static': ''
          }
        }
      }, */
	markdown:{
		lineNumbers: true
	},
    plugins: [
      [	
        '@vuepress/plugin-last-updated',
        {
          transformer: (timestamp, lang) => {
            // Don't forget to install moment yourself
            const moment = require('moment')
            //暂时没有多语言，设置为中文
            moment.locale('zh-cn')
            return moment(timestamp).utcOffset(8).format('LLL')
          },
          dateOptions:{
            hour12: false
          },
        }
      ],
	  ['@vuepress/back-to-top']
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
             'attention',
          ],
          '/linux/':[
            'centos',
          ],
          '/guide/':[
            '',
          ],
		  '/vps/':[
			'euserv',
		  ],
          '/java/':[
            'jvm',
            'spring',
			'JPA',
            'spring-security',
            'springboot',
            'java-connect',
          ],
          '/tools/':[
            'git',
            'intellij',
            'nginx',
          ],
		  '/sql/':[
			'sql',
		  ],
		  '/opencv/':[
		     'opencv-java',
		  ],
          '/':[
            'resource',
            'attention',
          ],
        },
        searchMaxSuggestions: 10, //调整默认查找个数 10
        lastUpdated: '上次编辑:',
        nextLinks: true, // 上/先一篇链接
        prevLinks: true,
        navbar: true, // 禁用导航栏
        displayAllHeaders: false, // 显示所有页面的标题链接 默认值：false 
        smoothScroll: true //页面滚动效果
    }
}