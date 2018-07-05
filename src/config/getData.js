import axios from '@/config/http'
// import axios from 'axios'

const host = 'https://api.mimei.net.cn/api/v1'

export const getData = (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  url = host + url
  if (type === 'GET' && Object.keys(data).length) {
    // 将 query 字符串拼接
    let queryArr = []
    for (let k in data) {
      queryArr.push(k + '=' + data[k])
    }
    url = url + '?' + queryArr.join('&')
  }
  return axios({
    method: type,
    url: url,
    data: data
  })
  // return new Promise(resolve => resolve('yes'))
}
