export default [
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
  // }
];
