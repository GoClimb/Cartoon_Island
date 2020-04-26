import axios from '@/tools/request'

export const getList = (name) => {
  return axios({
    url: '/api/comic_v2/searchbookauthor?',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      name,
      type: 2,
      pageno: 1,
      pagesize: 100
    }
  })
}
