import * as CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

export const setToken = (token, remember) => {
  const encodedToken = CryptoJS.AES.encrypt(token, 'token').toString();
  const options = {
    path: '/',
  };
  if (remember) options.expires = 0.5;

  Cookies.set('token', encodedToken, options);
};

export const getToken = () => {
  const encodedToken = Cookies.get('token');
  if (encodedToken !== undefined) {
    const bytes = CryptoJS.AES.decrypt(encodedToken, 'token');
    return bytes.toString(CryptoJS.enc.Utf8);
  }
};

export const removeToken = () => {
  Cookies.remove('token', { path: '/' });
};
