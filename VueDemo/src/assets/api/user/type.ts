//登录接口参数
export interface IUser {
     username: string;
     password: string;
}
//用户信息接口返回类型
interface IResponse {
     token: string;
     message: string;
}
//用户信息接口返回类型
export interface LoginResponse {
     code: number;
     data: IResponse;
}
interface Userinfo {
     userid: string;
     username: string;
     acvatar: string;
     dece: string;
     roles: string[];
     buttons: string[];
     routes: string[];
     token: string;
}
//用户信息接口返回类型
interface User {
     checkuser: Userinfo;
}
export interface UserPesponseData {
     code: number;
     data: User;
}
// 用户信息接口返回类型
