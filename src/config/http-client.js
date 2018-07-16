import axios from 'axios'
// let api
// // 这里可以应用拦截器，对数据进行预处理
// api = axios.interceptors.response.use(
//   res => {
//     console.log('axios.interceptors.response~~: ', res.data)
//     return res.data
//   },
//   error => {
//     console.log('发生 error: ', error)
//     return Promise.reject(error)
//   }
// )
// export default api

export function createAPI() {
  // let api
  // 这里可以应用拦截器，对数据进行预处理
  axios.interceptors.response.use(
    res => {
      console.log('axios.interceptors.response client~~: ', res.data)
      return res.data
    },
    error => {
      console.log('发生 error client: ', error)
      return Promise.reject(error)
    }
  )
  axios.interceptors.request.use(config => {
    console.log('request client ...', config)
    return config
  }, error => {
    Promise.reject(error)
  })
  return axios
}
