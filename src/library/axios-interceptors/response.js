import axios from 'axios';
import {removeToken} from '../cookie-service/cookie-services';
import {toggleNotificationAction} from '../../redux/actions/app';
import {store} from '../../store';

axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        throw error.message;
      }

      if (
        error.response.status === 401 &&
      error.response.config.url === '/user-service/me' // @TODO here we should check url where we get data if user is log in.
      ) {
        removeToken();
        return;
      }

      if (error.response.status >= 500) {
        store.dispatch(
            toggleNotificationAction({
              isOpened: true,
              type: 'error',
              message: 'server-errors:500+',
            }),
        );
        throw error;
      }

      throw error;
    },
);
