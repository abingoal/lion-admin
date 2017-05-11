import Main from '@/components/Main'

let routes = {
  path: '/',
  name: '系统设置',
  iconClass: 'fa fa-cogs',
  component: Main,
  children: [
    {
      path: '/setting',
      name: '配置文件',
      component: resolve => require(['@/components/System/Setting'], resolve)
    },
    {
      path: '/profile',
      name: '个人资料',
      hidden: true,
      component: resolve => require(['@/components/User/Profile'], resolve)
    }
  ]
}

export default routes
