//创建用户相关的pinia模块
import { defineStore } from 'pinia';
import type { IUser } from '@/assets/api/user/type';
import { reqLogin } from '@/assets/api/user';
//定义用户信息的类型
const useUserStore = defineStore('User', {
     state: () => {
          return {
               token: '',
          };
     },
     actions: {
          async userlogin(data: IUser) {
               try {
                    const res = await reqLogin(data);
                    if (res.code === 200) {
                         this.token = res.data.token;
                         return res.data; // 成功时返回数据
                    } else {
                         throw new Error(res.data.message || '122323账号或密码错误');
                    }
               } catch (error) {
                    if (error instanceof Error) {
                         throw error;
                    } else {
                         throw new Error('网络错误或服务器无响应');
                    }
               }
          },
     },
     getters: {},
});
export default useUserStore;
