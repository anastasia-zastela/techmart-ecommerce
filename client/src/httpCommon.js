import axios from 'axios';

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
  config.headers.authorization = localStorage.getItem('token');
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
