import { createStore } from 'vuex';
import user from './user';
import post from './post';

export default createStore({
  modules: {
    user,
    post,
  },
});
