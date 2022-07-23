const { defaultTheme } = require("vuepress");

module.exports = {
  lang: 'zh-CN',
  title: 'VSearcher',
  description: '国内为数不多的视频内容检索Python库',
  base: '/vs-docs',
 
  markdown: {
    code: {
         lineNumbers: true, // 是否显示代码行，多少行之后开始显示的配置呢
    }
  },
  theme: defaultTheme({
    logo: '/images/vs-logo.ico',
    repo: 'https://gitee.com/breath57/vs-docs',
    repoLabel: "Gitee",
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    editLinks: true,
    editLinkText: "编辑此页面",
    selectLanguageText: '切换语言',
    sidebar: [
    {
        text: '快速开始',
        link: '/quick-start/'
      },
      {
        text: 'VSearcher API',
        link: '/api/',
        // collapsible: true,
      },
      {
        text: '全局配置',
        link: '/vs-config/'
      },
      {
        text: '视图对象',
        link: '/vo/'
      },
    //   {
    //     text: '案例项目',
    //     link: '/demo/'
    //   },
    //  {
    //     text: 'VS FLask API',
    //     link: '/vs-api/'
    //   },
      {
        text: '更新日志',
        link: '/log/'
      },
    
      '/contact/',
      '/reference/'
    ]
  })
}