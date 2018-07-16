import axios from 'axios'

export function createAPI() {
  let api
  if (process.__API__) {
    api = process.__API__
  } else {
    axios.interceptors.response.use(
      res => {
        console.log('axios.interceptors.response server~~: ', res.data)
        return res.data
      },
      error => {
        console.log('发生 error server: ', error)
        return Promise.reject(error)
      }
    )
    api = process.__API__ = axios
  }
  return api
}
// let api

// if (process.__API__) {
//   api = process.__API__
// } else {
//   // 这里可以应用拦截器，对数据进行预处理
//   api = process.__API__ = axios.interceptors.response.use(
//     res => {
//       console.log('axios.interceptors.response~~: ', res.data)
//       return res.data
//     },
//     error => {
//       console.log('发生 error: ', error)
//       return Promise.reject(error)
//     }
//   )
// }

// export default api
