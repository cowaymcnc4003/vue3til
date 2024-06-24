import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/users/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/users/SignupPage.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/MainPage.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/posts/PostCreatePage.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/posts/PostEditPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/components/common/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
