import axios from 'axios';
import {getToken} from '../cookie-service/cookie-services';

axios.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => error,
);
