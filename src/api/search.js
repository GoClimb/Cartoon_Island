import axios from '@/tools/request'

export const getHotSearch = () => {
  return axios({
    url: '/api/comic/hotsearch',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      appType: 8
    }
  })
}

export const getSearchAll = (name) => {
  return axios({
    url: '/api/comic_v2/searchindex',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      name,
      type: 2
    }
  })
}
