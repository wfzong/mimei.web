import axios from 'axios'

axios.interceptors.response.use(
  res => {
    console.log('response client 执行 ...', res)
    return res.data
  },
  error => {
    console.log('发生 error client: ', error)
    return Promise.reject(error)
  }
)
axios.interceptors.request.use(
  config => {
    console.log('request client 执行 ...', config)
    return config
  },
  error => {
    Promise.reject(error)
  }
)
export function createAPI() {
  console.log('createAPI 执行...')
  return axios
}
