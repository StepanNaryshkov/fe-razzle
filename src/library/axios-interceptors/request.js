import axios from "axios";
import {getToken} from "../cookie-service/cookie-services";

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => error
);
