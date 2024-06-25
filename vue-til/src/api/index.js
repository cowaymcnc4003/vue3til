import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
  });
  return instance;
}

function createInstanceWith(path) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${path}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWith('posts');
