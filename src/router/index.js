import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home.vue')
const List = () => import('@/views/List.vue')
const Details = () => import('@/views/Details.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home },
      { path: '/list', component: List },
      { path: '/details/:id', component: Details }
    ]
  })
}
