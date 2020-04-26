import axios from 'axios'

export const getCity = () => {
  return axios({
    url: '/maizuo/gateway?k=6078078',
    method: 'GET',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15877460542061584302421","bc":"340800"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
