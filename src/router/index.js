import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import User from '@/components/home/user.vue' 
import Book from '@/components/home/book.vue' 
import Send from '@/components/home/send.vue' 

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: defineAsyncComponent(() => import('../pages/HomePage.vue')),
    meta: { title: '首页' },
    children: [
        {
          path: '/home/user',
          component: User
        },
        {
            path: '/home/book',
            component: Book
        },
        {
          path: '/home/send',
          component: Send
        }
      ]
  },
  {
    path: '/login',
    name: 'login',
    component: defineAsyncComponent(() => import('../pages/Login.vue')),
    meta: { title: '登录页' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;