import axios, { type AxiosResponse, type AxiosError } from 'axios';
import { ElMessage } from 'element-plus';

// 提取配置常量
const API_BASE_URL = '';
const REQUEST_TIMEOUT = 5000;

// 创建 axios 实例
const http = axios.create({
     baseURL: API_BASE_URL,
     timeout: REQUEST_TIMEOUT,
     headers: {
          'Content-Type': 'application/json',
     },
});

// 请求拦截器：添加认证Token、通用配置
http.interceptors.request.use(
     (config) => {
          // 若有登录Token，添加到请求头（根据项目实际存储方式调整）
          const token = localStorage.getItem('Token');
          if (token) {
               config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
     },
     (error: AxiosError) => {
          // 请求发起前的错误（如参数处理失败）
          ElMessage.error('请求参数错误');
          return Promise.reject(error);
     },
);

// 响应拦截器
http.interceptors.response.use(
     (response: AxiosResponse) => {
          return response.data; // 直接返回数据体，简化后续使用
     },
     (error: AxiosError) => {
          let message = '';

          // 处理有响应的错误（服务器返回错误状态码）
          if (error.response) {
               const { status, data } = error.response;
               // 优先使用后端返回的错误信息，无则用默认文本
               const defaultMsg: Record<number, string> = {
                    400: '请求错误',
                    401: '未授权，请重新登录',
                    403: '拒绝访问',
                    404: '请求地址不存在',
                    500: '服务器内部错误',
               };

               // 优化错误消息选择逻辑
               message =
                    ((data as Record<string, unknown>).message as string) ||
                    defaultMsg[status] ||
                    '请求失败';

               // 特殊处理401：清除Token并跳转登录页
               if (status === 401) {
                    localStorage.removeItem('authToken'); // 清除无效Token
                    //router.push('/login'); // 跳转到登录页
               }
          } else {
               // 无响应的错误（网络中断、超时等）
               message = error.message?.includes('timeout')
                    ? '请求超时，请稍后重试'
                    : '网络错误，请检查网络连接';
          }

          ElMessage({
               type: 'error',
               message,
          });
          return Promise.reject(error);
     },
);

export default http;
