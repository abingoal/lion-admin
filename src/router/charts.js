import Main from '@/components/Main'

let routes = {
  path: '/',
  name: '数据图表',
  iconClass: 'fa fa-area-chart',
  component: Main,
  children: [
    {
      path: '/dau',
      name: '活跃用户',
      component: resolve => require(['@/components/Charts/Dau'], resolve)
    }
  ]
}

export default routes
