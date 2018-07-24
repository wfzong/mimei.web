import { createAPI } from 'create-api'
// import axios from 'axios'

const host = 'https://api.mimei.net.cn/api/v1'

export const getData = (url = '', data = {}, type = 'GET') => {
  console.log('getData executed... ')
  let api = createAPI()
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
  return api({
    method: type,
    url: url,
    data: data
  })
}
