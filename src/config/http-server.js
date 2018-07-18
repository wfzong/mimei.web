import axios from 'axios'

export function createAPI() {
  let api
  if (process.__API__) {
    api = process.__API__
  } else {
    axios.interceptors.response.use(
      res => {
        console.log('response client 执行 ... server~~: ', res.data)
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
