import Login from '@/components/Login'
import Main from '@/components/Main'
import Dashboard from '@/components/Dashboard'
import NotFound from '@/components/404'
import userRouter from './user'
import systemRouter from './system'
import chartsRouter from './charts'

let commonRouter = [
  {
    path: '/',
    redirect: { path: '/dashboard' },
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    component: Main,
    rootNode: true,
    children: [
      {
        path: '/dashboard',
        name: '控制面板',
        component: Dashboard,
        iconClass: 'fa fa-dashboard'
      }
    ]
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
  chartsRouter,
  systemRouter
]

export default [...commonRouter, ...routes]
