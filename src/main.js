// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRuter from 'vue-router'
import routes from './router/index'
import Vuex from 'vuex'

// 使用ElementUI
import ElementUI from 'element-ui'
// 使用自定义主题
import '../theme/index.css'

// 使用font-awesome图标
import 'font-awesome/css/font-awesome.min.css'

// NProgress 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 模拟数据
import Mock from './mock'
Mock.bootstrap()

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRuter)
Vue.config.productionTip = false

const router = new VueRuter({
  routes
})
// 配置NProgress
NProgress.configure({ showSpinner: true })

// 路由开始前
router.beforeEach((to, form, next) => {
  NProgress.start()
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

// 路由结束
router.afterEach(transition => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
