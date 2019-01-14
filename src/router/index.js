import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes
})
const HAS_LOGINED = true

// 全局前置守卫（跳转之前处理的逻辑）
router.beforeEach((to, from, next) => {
  // if(to.meta.title)
  to.meta && setTitle(to.meta.title)
  //如果to.meta真，则返回后面，不是真，则返回to.meta
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

//导航被确认之前（被确认：所有导航钩子都结束）所有组建内守卫和异步路由组建被解析之后调用
// router.beforeResolve


//全局后置钩子  所有的页面跳转之后添加，没有next，不能对跳转的页面进行操作
router.afterEach((to, from) => {

})

export default router
