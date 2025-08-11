import 'virtual:svg-icons-register'; // 引入虚拟 SVG 图标注册
import App from './App.vue'; // 引入根组件
import { createApp } from 'vue'; // 引入 Vue 应用创建函数
import router from './router'; // 引入路由实例

import { globalcomponent } from '@/components/Global/autoRegister'; // 引入全局组件注册函数
import './assets/styles/index.scss'; //导入全局样式
import 'element-plus/dist/index.css'; // 引入 Element Plus 样式
import ElementPlus from 'element-plus'; // 导入 Element Plus 核心库
import pinia from './stores'; // 引入 Pinia 实例
const app = createApp(App); // 创建 Vue 应用实例
app.use(globalcomponent); // 使用全局组件注册函数
app.use(pinia); // 使用 Pinia 状态管理库
app.use(router); // 使用路由实例
app.use(ElementPlus); // 全局注册，所有 el-* 组件才能被识别
app.mount('#app');
