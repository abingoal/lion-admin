import Dashboard from '@/components/Dashboard'

let routes = {
  path: '/',
  name: '用户管理',
  iconClass: 'fa fa-users',
  component: Dashboard,
  children: [
    {
      path: '/profile',
      name: '个人资料',
      component: resolve => require(['@/components/User/Profile'], resolve) // 异步加载路由
      // components: Profile
    }
  ]
}

export default routes
