import { instance } from './index.js';

export function fetchSignUp(userInfo) {
  return instance.post('/signup', userInfo);
}

export function fetchLogin(userInfo) {
  return instance.post('/login', userInfo);
}
