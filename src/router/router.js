
import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    alias: 'home_page',//别名
    component: Home,
    props: route => ({
      peoplename: route.query.p
    }),
    //函数传参
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') console.log('我是从about页来的')
    //   else console.log('我不是从about来的')
    //   next()
    // }
    //路由独享守卫
  },
  {
    path: '/about',
    name: 'about',
    // props(route) {
    //   return {
    //     food: 'apple',
    //     peoplename:route.query.peoplename
    //   }
    // },
    props: {
      food: 'banana'
    },
    meta: {
      title:'关于'
    },
    //对象传参
    component: () => import('@/views/About')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    props: true,
    //props传值
    //动态路由参数$route.params.name
    component: () => import('@/views/argu')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store')
  },
  {
    path: '/named_view',
    name: 'mmst',
    components: {
      default: () => import('@/views/child'),
      //default默认显示的组件
      email: () => import('@/views/email'),
      tel: () => import('@/views/tel')
    }
    //命名视图
  },
  {
    path: '/main',
    name: 'main',
    redirect: to => '/parent'
    // redirect:'/'  一种写法

    // redirect: {
    //   name:'mmst'
    // }
    // 二种写法

    // redirect: to => {
    //   return {
    //   //  name:'parent' 效果一样
    //     path:'/parent'
    //  }
    // }

    // redirect(to) {
    //   console.log(to)
    // }
    // 上面是箭头函数和此函数效果一样
  },
  {
    path: '*',
    component: () => import('@/views/404')
  }
]
