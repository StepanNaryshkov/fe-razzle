import * as CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

export const setToken = (token) => {
  const encodedToken = CryptoJS.AES.encrypt(token, 'token').toString();
  const options = {
    path: '/',
  };
  options.expires = 0.5;

  Cookies.set('token', encodedToken, options);
};

export const getToken = () => {
  const encodedToken = Cookies.get('token');
  if (encodedToken !== undefined) {
    const bytes = CryptoJS.AES.decrypt(encodedToken, 'token');
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  return undefined;
};

export const removeToken = () => {
  Cookies.remove('token', {path: '/'});
};
