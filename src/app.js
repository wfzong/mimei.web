import Vue from 'vue'
import VueCookies from 'vue-cookies' // https://www.npmjs.com/package/vue-cookies
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

Vue.use(VueCookies)

if (process.browser) { // for editor directive
  let VueQuillEditor = require('vue-quill-editor/dist/ssr')
  Vue.use(VueQuillEditor)
}
export function createApp(cookies) {
  // create store and router instances
  const store = createStore()
  const router = createRouter(cookies)
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
