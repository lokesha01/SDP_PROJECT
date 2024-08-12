import axios from 'axios';
import { getToken } from './AuthService';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Change to your API URL
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log(token);
    console.log(config.url);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;