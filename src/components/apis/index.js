import req from './https';

export const apiLogin = () => req('get', 'account');

export const apiSignup = data => req('post', 'signup', data);