import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// const Home = () => import('@/views/Home')
// const Classify = () => import('@/views/Classify')
// const History = () => import('@/views/History')
// const Browsehistory = () => import('@/views/History/Browse_history')
// const Favorite = () => import('@/views/History/Favorite')
// const Login = () => import('@/views/Login')
// const Ranking = () => import('@/views/Ranking')
// const Mine = () => import('@/views/Mine')
// const Search = () => import('@/views/Search')
// const Vip = () => import('@/views/Vip')
// const SearchResult = () => import('@/views/Search-Result')
// const City = () => import('@/views/City')

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home')
    },
    {
      path: '/classify',
      component: () => import('@/views/Classify')
    },
    {
      path: '/ranking',
      component: () => import('@/views/Ranking')
    },
    {
      path: '/vip',
      component: () => import('@/views/Vip')
    },
    {
      path: '/history',
      component: () => import('@/views/History'),
      children: [
        {
          path: 'browse_history',
          component: () => import('@/views/History/Browse_history')
        },
        {
          path: 'favorite',
          component: () => import('@/views/History/Favorite')
        },
        {
          path: '',
          redirect: '/history/browse_history'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login')
    },
    {
      path: '/mine',
      component: () => import('@/views/Mine')
    },
    {
      path: '/search',
      component: () => import('@/views/Search')
    },
    {
      path: '/search-result',
      component: () => import('@/views/Search-Result')
    },
    {
      path: '/city',
      component: () => import('@/views/City')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(store)
  // console.log(to)
  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.path
      }
    })
  } else {
    next()
  }
})

export default router
