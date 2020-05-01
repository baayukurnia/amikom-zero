var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

module.exports = axiosInstance;