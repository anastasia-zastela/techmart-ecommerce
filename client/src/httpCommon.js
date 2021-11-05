import axios from 'axios';
require('dotenv').config();

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const authInterceptor = (config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.authorization = localStorage.getItem('token');
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
