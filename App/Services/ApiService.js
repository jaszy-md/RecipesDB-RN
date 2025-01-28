import axios from 'axios'
import Config from 'react-native-config'

const apiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
