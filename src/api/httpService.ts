import axios from 'axios';

// define app API url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// configure headers
axios.interceptors.request.use(
  config => {
    if (!config?.headers?.Authorization) {
      const token = localStorage.getItem('authToken');
      if (token) config!.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
