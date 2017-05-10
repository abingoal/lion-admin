import Dashboard from '@/components/Dashboard'

let routes = {
  path: '/',
  name: '系统设置',
  iconClass: 'fa fa-cogs',
  component: Dashboard,
  children: [
    {
      path: '/setting',
      name: '配置文件',
      component: resolve => require(['@/components/System/Setting'], resolve)
    }
  ]
}

export default routes
