// This page contains axois config with Authorization
import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_BASE_URL;

const withAuthInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  },
});
withAuthInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log(config?.data);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      localStorage.clear(); // use this if needed. this will remove all items from localstorage
      delete withAuthInstance.defaults.headers.common.Authorization;
    }
    if (config?.data instanceof FormData) {
      config.headers = {
        'Content-Type': 'multipart/form-data',
        ...config?.headers,
      };
    }
    console.log(config);
    return config;
  },
  (error) => console.error(error)
);
withAuthInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401 || response.status === 403) {
      localStorage.clear();
    }
    // Any status code from range of 2xx
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.clear();
      localStorage.removeItem('persist:root');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default withAuthInstance;
