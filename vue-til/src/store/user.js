import { fetchLogin, fetchSignUp } from '@/api/user';
import {
  saveUserToCookie,
  saveAuthToCookie,
  getUserFromCookie,
  getAuthFromCookie,
} from '@/utils/cookies.js';

export default {
  namespaced: true,
  state: {
    token: getAuthFromCookie() || '',
    username: getUserFromCookie() || '',
  },
  getters: {
    isLogin: state => state.username,
  },
  mutations: {
    fectedLogin(state, data) {
      console.log(data.token);
      console.log(data.user.username);
      state.token = data.token;
      state.username = data.user.username;
    },
    clearUserName(state) {
      state.username = '';
    },
    clearToken: state => {
      return (state.token = '');
    },
    // fectedSignup() { },
  },
  actions: {
    async LOGIN({ commit }, userInfo) {
      const { data } = await fetchLogin(userInfo);
      // console.log(data);
      commit('fectedLogin', data);
      saveUserToCookie(data.user.username);
      saveAuthToCookie(data.token);
      return data;
    },
    async SIGNUP(commit, userInfo) {
      const { data } = await fetchSignUp(userInfo);
      // commit('');
      return data;
    },
  },
};
