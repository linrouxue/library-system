import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: defineAsyncComponent(() => import('../pages/HomePage.vue')),
    meta: { title: '首页' }
  },
  {
    path: '/about',
    name: 'about',
    component: defineAsyncComponent(() => import('../pages/About.vue')),
    meta: { title: '列表页' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;