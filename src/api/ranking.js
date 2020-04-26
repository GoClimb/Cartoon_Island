import axios from '../tools/request'
import { format } from '@/tools/apiHeader'

export const getList = (ranktype, pageno = 1, pagesize = 20) => {
  return axios({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
