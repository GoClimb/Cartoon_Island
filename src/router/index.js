import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Classify from '@/views/Classify'
import History from '@/views/History'
import Browsehistory from '@/views/History/Browse_history'
import Favorite from '@/views/History/Favorite'
import Login from '@/views/Login'
import Ranking from '@/views/Ranking'
import Mine from '@/views/Mine'
import Search from '@/views/Search'
import Vip from '@/views/Vip'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/ranking',
      component: Ranking
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/history',
      component: History,
      children: [
        {
          path: 'browse_history',
          component: Browsehistory
        },
        {
          path: 'favorite',
          component: Favorite
        },
        {
          path: '',
          redirect: '/history/browse_history'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

export default router
