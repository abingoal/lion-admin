import Main from '@/components/Main'

let routes = {
  path: '/',
  name: '用户管理',
  iconClass: 'fa fa-users',
  component: Main,
  children: [
    {
      path: '/userlist',
      name: '用户列表',
      component: resolve => require(['@/components/User/Userlist'], resolve) // 异步加载路由
    }
  ]
}

export default routes
