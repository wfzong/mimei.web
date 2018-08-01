import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home.vue')
const List = () => import('@/views/List.vue')
// const Details = () => import('@/views/Details.vue')
const Item = () => import('@/views/Item.vue')
const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')
const Privacy = () => import('@/views/Privacy.vue')
const Copyright = () => import('@/views/Copyright.vue')
const AuthLayout = () => import('@/views/AuthLayout.vue')
const Login = () => import('@/views/Login.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home },
      { path: '/list/', component: List },
      { path: '/item/:id', component: Item },
      { path: '/about/', component: About },
      { path: '/contact/', component: Contact },
      { path: '/privacy/', component: Privacy },
      { path: '/copyright/', component: Copyright },
      {
        path: '/auth/',
        component: AuthLayout,
        children: [
          {
            path: 'login/',
            component: Login
          }
        ]
      }
    ]
  })
}
