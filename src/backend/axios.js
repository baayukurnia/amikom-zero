import axios from 'axios'

const API_URL = 'https://api.febridk.id/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})