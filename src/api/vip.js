import axios from '@/tools/request'
import { format } from '@//tools/apiHeader'

export const getList = () => {
  return axios({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      pageno: 1,
      pagesize: 15,
      special: 892
    })
  })
}
