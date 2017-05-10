import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import NotFound from '@/components/404'
import userRouter from './user'
import systemRouter from './system'

let commonRouter = [
  {
    path: '/dashboard',
    name: '控制面板',
    iconClass: 'fa fa-dashboard',
    rootNode: true,
    component: Dashboard
  },
  {
    path: '/login',
    name: '登录',
    hidden: true,
    component: Login
  },
  {
    path: '/404',
    component: NotFound,
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]

let routes = [
  userRouter,
  systemRouter
]

export default [...commonRouter, ...routes]
