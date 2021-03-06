import { createApp } from '@/app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { url, cookies } = context
    const { app, router, store } = createApp(cookies && cookies.token)
    const { fullPath } = router.resolve(url).route
    console.log('fullPath#### ', fullPath)
    console.log('url#### ', url)
    // if (fullPath !== url) {
    //   return reject(new Error({ url: fullPath }))
    // }

    // set router's location
    router.push(url)
    console.log('context entry server:::', cookies)
    store.commit('initToken', cookies) // 将cookie信息注册到store里

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        return reject(new Error({ code: 404 }))
      }
      // Call fetchData hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      // console.log('matchedComponents: ', matchedComponents)
      Promise.all(
        matchedComponents.map(
          ({ asyncData }) =>
            asyncData &&
            asyncData({
              store,
              route: router.currentRoute
            })
        )
      )
        .then(() => {
          isDev && console.log(`取数据时间 data pre-fetch: ${Date.now() - s}ms`)
          context.state = store.state
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}
