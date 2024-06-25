import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router';
// import PostCreatePage from '@/views/posts/PostCreatePage.vue';
// import MainPage from '@/views/main/MainPage.vue';

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
  // {
  //   path: '/main',
  //   children: [
  //     {
  //       path: '', // 빈 경로는 부모 경로와 조합하여 /main과 매치됩니다.
  //       component: () => import('@/views/main/MainPage.vue'),
  //     },
  //     {
  //       path: 'create', // 부모 경로 '/main'에 상대적인 경로를 사용합니다.
  //       component: () => import('@/views/posts/PostCreatePage.vue'),
  //     },
  //   ],
  // },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/posts/PostCreatePage.vue'),
  },
  {
    path: '/edit/:id',
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
