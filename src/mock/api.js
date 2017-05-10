import axios from 'axios'

export const login = parms => {
  return axios.post('/login', parms).then(res => res.data)
}
