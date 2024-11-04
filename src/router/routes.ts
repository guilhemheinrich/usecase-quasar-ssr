import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/normal',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NormalPage.vue') }],
  },
  {
    path: '/markdown',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MarkdownPage.vue') }],
  },
  {
    path: '/wysiwyg',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WysiwygPage.vue') }],
  },
  {
    path: '/simpleSsr',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SimpleNoSsrPage.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
