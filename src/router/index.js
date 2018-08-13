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
const UserCenter = () => import('@/views/UserCenter.vue')
const Posts = () => import('@/views/Posts.vue')

export function createRouter(token) {
  let route = new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home },
      { path: '/list/', component: List },
      { name: 'item', path: '/item/:id', component: Item },
      { path: '/about/', component: About },
      { path: '/contact/', component: Contact },
      { path: '/privacy/', component: Privacy },
      { path: '/copyright/', component: Copyright },
      {
        path: '/user/',
        component: UserCenter,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/user/posts',
        component: Posts,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/auth/',
        component: AuthLayout,
        children: [
          {
            path: 'login/',
            component: Login,
            meta: {
              requireUnAuth: true
            }
          }
        ]
      }
    ]
  })
  route.beforeEach((to, from, next) => {
    console.log('beforeEach exect~~~ cookies ', token)
    console.log(
      'to.matched.some(r => r.meta.requireUnAuth) # ',
      to.matched.some(r => r.meta.requireUnAuth)
    )
    if (to.matched.some(r => r.meta.requireAuth) && !token) {
      console.log('没权限#####A')
      next('/')
    }
    if (to.matched.some(r => r.meta.requireUnAuth) && !!token) {
      console.log('没权限#####B')
      next('/')
    }
    next()
  })
  return route
}
