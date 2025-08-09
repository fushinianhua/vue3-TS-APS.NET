export // 定义路由配置
const constantRoute = [
  // 在此处添加你的路由配置
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login/LoginPage.vue'), // 示例路由
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/HomePage.vue'), // 示例路由
  },
  // 可以添加更多路由配置...
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/LoginPage.vue'), // 示例路由
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404Page.vue'), // 示例路由
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];
