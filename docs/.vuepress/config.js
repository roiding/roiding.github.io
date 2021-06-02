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
		html: true,
		xhtmlOut: true,
		breaks: true,
		langPrefix:   'language-',
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
	  ['@vuepress/back-to-top'],
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
            { text: 'github', link: 'https://github.com/maodou38'},
          ],
		algolia: {
			appId: 'XEQSFBL9DS',
			apiKey: '25a25110f2901993e844dff36f6449b8',
			indexName: 'blog',
			algoliaOptions: {
				hitsPerPage: 10,
				//facetFilters:  "",
				placeholder: '搜索',
			},
			
		},  
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
		  '/guide/':[
            '',
          ],
		  '/java/':[
            'jvm',
            'spring',
			'JPA',
            'spring-security',
            'springboot',
            'java-connect',
          ],
		  '/linux/':[
            'centos',
          ],
		  '/opencv/':[
		     'opencv-java',
		  ],
		  '/sql/':[
			'sql',
		  ],
          '/tools/':[
            'git',
            'intellij',
            'nginx',
          ],
		  '/vps/':[
			'euserv',
		  ],
          '/':[
            'resource',
            'attention',
          ],
        },
        lastUpdatedText: '上次编辑:'
    }
}