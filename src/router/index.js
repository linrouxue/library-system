import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import User from '@/components/home/user.vue' 
import Book from '@/components/home/book.vue' 
import Send from '@/components/home/send.vue' 
import FindBook from '@/components/user/FindBook.vue' 
import AlreadySend from '@/components/user/AlreadySend.vue' 

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
        },
        {
            path: '/user/FindBook',
            component: FindBook
        },
        {
            path: '/user/AlreadySend',
            component: AlreadySend
        },
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

// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('role');
//   // 检查目标路径是否已经是重定向的目标路径，避免无限重定向
//   if (to.path === '/home/user' || to.path === '/user/FindBook' || to.path === '/login') {
//     next();
//   } else {
//     if (role === 'user') {
//       next('/user/FindBook');
//     } else if (role === 'admin') {
//       next('/home/user');
//     } else {
//       next('/login');
//     }
//   }
// });
export default router;