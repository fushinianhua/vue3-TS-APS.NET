import { type MockMethod } from 'vite-plugin-mock';

// 定义用户数据类型
interface User {
  id: number;
  name: string;
  age: number;
}

// 定义详细用户信息类型
interface UserDetail extends User {
  address: string;
}

// 定义响应数据类型
interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
}

// 模拟用户数据存储
const users: User[] = [
  { id: 1, name: '张三', age: 20 },
  { id: 2, name: '李四', age: 22 },
];

export default [
  // 获取用户列表
  {
    url: '/api/user/list',
    method: 'get',
    response: (): ResponseData<User[]> => {
      return {
        code: 200,
        message: 'success',
        data: users,
      };
    },
  },

  // 获取用户详情
  {
    url: '/api/user/detail',
    method: 'post',
    response: ({ body }: { body: { id: number } }): ResponseData<UserDetail | null> => {
      const { id } = body;
      const user = users.find((u) => u.id === id);
      if (user) {
        return {
          code: 200,
          message: 'success',
          data: { ...user, address: '北京' },
        };
      } else {
        return {
          code: 404,
          message: '用户不存在',
          data: null,
        };
      }
    },
  },

  // 创建用户
  {
    url: '/api/user/create',
    method: 'post',
    response: ({ body }: { body: Omit<User, 'id'> }): ResponseData<User> => {
      const newUser: User = {
        ...body,
        id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      };
      users.push(newUser);
      return {
        code: 200,
        message: '创建成功',
        data: newUser,
      };
    },
  },

  // 更新用户
  {
    url: '/api/user/update',
    method: 'post',
    response: ({ body }: { body: Partial<User> & { id: number } }): ResponseData<User | null> => {
      const { id, ...updateData } = body;
      const index = users.findIndex((u) => u.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...updateData };
        return {
          code: 200,
          message: '更新成功',
          data: users[index],
        };
      } else {
        return {
          code: 404,
          message: '用户不存在',
          data: null,
        };
      }
    },
  },

  // 删除用户
  {
    url: '/api/user/delete',
    method: 'post',
    response: ({ body }: { body: { id: number } }): ResponseData<null> => {
      const { id } = body;
      const index = users.findIndex((u) => u.id === id);
      if (index !== -1) {
        users.splice(index, 1);
        return {
          code: 200,
          message: '删除成功',
          data: null,
        };
      } else {
        return {
          code: 404,
          message: '用户不存在',
          data: null,
        };
      }
    },
  },
] satisfies MockMethod[];
