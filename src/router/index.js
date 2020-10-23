import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Serve from '../views/serve/Serve.vue'
import Admin from '../views/admin/Admin.vue'
import StallRegister from '../views/admin/StallRegister.vue'
import StallPay from '../views/admin/StallPay.vue'
import StallHygiene from '../views/admin/StallHygiene.vue'
import StallNews from '../views/admin/StallNews.vue'
import StallJudge from '../views/admin/StallJudge.vue'
import Search from '../views/admin/Search.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/login',
   name:'Login',
  component:Login},
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path: '/',
      name: 'Serve',
      component: Serve,
    },{
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children:[{
        path: '/admin/stall/register',
        name: 'StallRegister',
        component: StallRegister,
      },{
        path: '/admin/stall/pay',
        name: 'StallPay',
        component: StallPay,
      },{
        path: '/admin/stall/hygiene',
        name: 'StallHygiene',
        component: StallHygiene,
      },{
        path: '/admin/stall/news',
        name: 'StallNews',
        component: StallNews,
      },{
        path: '/admin/stall/judge',
        name: 'StallJudge',
        component: StallJudge,
      },{
        path: '/admin/search',
        name: 'Search',
        component: Search,
      },]
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
