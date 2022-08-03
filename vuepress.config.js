const { defaultTheme } = require("vuepress");
const { searchPlugin } = require('@vuepress/plugin-search')
const url_base = '/vs-docs'

module.exports = {
  lang: 'zh-CN',
  title: 'VSearcher',
  description: '国内为数不多的教学视频内容检索Python库',
  base: url_base,
  head: [
    // ['link', { rel: 'icon', href: `/vs-logo-128.png` }] // 本地调试 不用加 url_base
    ['link', { rel: 'icon', href: `${url_base}/vs-logo-128.ico` }],
    ["script", {},
    `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?69185a0206e4e778f2e17ae4e3a33820";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
    `
]
  ],
  markdown: {
    code: {
         lineNumbers: true, // 是否显示代码行，多少行之后开始显示的配置呢
    },
     level: [1, 2, 3, 4, 5, 6],
  },
  plugins: [
    searchPlugin({
        locales: {
        '/': {
          placeholder: '搜索内容',
            },
        },
        maxSuggestions: 10,
        // getExtraFields: (page) => console.log("页面内容",page),
    })
  ],
  theme: defaultTheme({
    logo: '/images/vs-logo.ico',
    repo: 'https://gitee.com/breath57/vsearch',
    repoLabel: "Gitee",
    
    contributorsText: '贡献者',
    lastUpdatedText: '最近一次更新',
    contributors: true, // 显示贡献者
    sidebarDepth: 5,
    displayAllHeaders: true, // 默认值：false
    docsRepo: 'https://gitee.com/breath57/vs-docs',
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    editLinks: true,
    editLinkText: "编辑此页面",
    selectLanguageText: '切换语言',
    sidebar: [
    {
        text: '简介',
        link: '/'
      },
    '/quick-start/',
      {
        text: 'API',
        link:'/api/',
      },
      '/vs-config/',
      '/vo/',
      {
        text: '案例项目',
         collapsible: true,
        children:['/demo/搭建API服务.md','/demo/云部署问题.md','/demo/vs-api/','/demo/vs-proxy-api/']
      },
      '/log/',
      '/contact/',
      '/reference/'
    ],
    navbar: [
        '/quick-start/',
         {
        text: 'API',
        children: ['/api/','/demo/vs-api/','/demo/vs-proxy-api/'],
      },
       {
        text: '案例项目',
        children: [{
            text: '搭建API服务',
            link: '/demo/搭建API服务.md'
        }],
      },
      '/contact/',
    ]
  })
}