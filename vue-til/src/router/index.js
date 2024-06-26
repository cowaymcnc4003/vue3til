import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router';
// import PostCreatePage from '@/views/posts/PostCreatePage.vue';
// import MainPage from '@/views/main/MainPage.vue';
import loginModule from './loginModule';
import postModule from './postModule';

const routes = [...loginModule, ...postModule];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
