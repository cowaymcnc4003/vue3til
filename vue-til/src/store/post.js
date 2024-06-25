import {
  fetchPosts,
  fetchPostCreate,
  fetchPost,
  fetchPostEdit,
} from '@/api/post';
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async POSTLISTS() {
      const { data } = await fetchPosts();
      return data;
    },
    async POSTCREATE(context, postData) {
      const { data } = await fetchPostCreate(postData);
      return data;
    },
    async POSTLIST(context, id) {
      const { data } = await fetchPost(id);
      return data;
    },
    async POSTEDIT(context, postData) {
      const { data } = await fetchPostEdit(postData);
      return data;
    },
  },
};
