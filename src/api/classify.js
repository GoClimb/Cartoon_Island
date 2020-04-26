import axios from '@/tools/request.js'
import { format } from '@/tools/apiHeader'

export const getType = () => {
  return axios({
    url: '/api/comic_v2/getproad',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 125
    }
  })
}

export const getList = (subject, pageno = 1, pagesize = 20) => {
  return axios({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      subject,
      pageno,
      pagesize
    })

  })
}
