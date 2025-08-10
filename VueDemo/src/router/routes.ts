export const constantRoute = [
  // 1. 根路径路由：访问 http://localhost:5173/ 时匹配
  {
    path: '/',
    redirect: '/login', // 默认跳转到登录页（根据需求修改为 /home 等）
  },
  // 2. 登录页路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/LoginPage.vue'),
  },
  // 3. 首页路由
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/HomePage.vue'),
  },
  // 4. 404 页面路由
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404Page.vue'),
  },
  // 5. 通配符路由（放在最后，优先级最低）
  {
    path: '/:pathMatch(.*)*', // Vue Router 4 推荐的通配符写法
    redirect: '/404',
  },
];
