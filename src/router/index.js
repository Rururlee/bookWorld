import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 1.這種讀取方式，可以省下讀取時間(不會一開始就讓about render出來，而是點擊路徑才讀取)
    // 2.壞處就是多一次讀取(示專案大小決定用哪種讀取方式，太大可能就切開)
    // 3.html上script tag會呈現<link href="/js/about.js" rel="prefetch"> 準備讀取的意思
    // 4.network上，about.js會是304
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ruru',
    name: 'Ruru',
    component: () => import(/* webpackChunkName: "ruru" */ '../views/Ruru.vue'),
    // 子路徑
    children:[
      {
        path:'info',
        name:'ruru-info',
        component:() => import(/* webpackChunkName: "info" */ '../views/Info.vue')
      },
      {
        path:'content',
        name:'ruru-content',
        component:() => import(/* webpackChunkName: "info" */ '../views/Content.vue')
      },
      // 下面redirect意思是，當傳到content若沒傳參數，自動幫你傳到1的路徑
      // {
      //   path:'content',
      //   redirect:'content/1',
      // }
    ]

  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
