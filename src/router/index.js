import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const List = () => import('@/view/List.vue')
const Details = () => import('@/view/Details.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/list' },
      { path: '/list', component: List },
      { path: '/details/:id', component: Details }
    ]
  })
}
