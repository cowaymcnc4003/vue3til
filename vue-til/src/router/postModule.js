export default [
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
