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
               const res = await reqLogin(data);
               if (res.data.code === 200) {
                    this.token = res.data.token;
                    console.log(res.data.token);
               }
          },
     },
     getters: {},
});
export default useUserStore;
