import axios from '@/tools/request.js'

export const getBanner = () => {
  return axios({
    url: '/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123',
    method: 'GET'
  })
}
export const getMain = () => {
  return axios({
    url: '/api/comic_v2/customerview',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}
