//统一管理用户相关的接口
import request from '@/Utils/request';
import type { IUser, LoginResponse, UserPesponseData } from '@/assets/api/user/type';
enum API {
     LOGIN_URL = '/api/user/login',

     USERINFO_URL = '/admin/acl/index/info',

     LOGOUT_URL = '/admin/acl/index/logout',
}
// 登录接口
//登录接口
export const reqLogin = (data: IUser): Promise<LoginResponse> => {
     return request.post(API.LOGIN_URL, data);
};
// 获取用户信息接口
export const requserinfo = (): Promise<UserPesponseData> => {
     return request.get(API.USERINFO_URL);
};
