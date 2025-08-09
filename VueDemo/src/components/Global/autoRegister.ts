import type { Component } from 'vue'; //引入组件类型
import { type App } from 'vue'; //引入应用实例类型
// 全局组件注册
// 使用 import.meta.glob 进行全局组件注册
export const globalcomponent = {
  install(app: App) {
    // 使用 import.meta.glob 动态导入所有 .vue 文件
    const globalComponents = import.meta.glob('@/**/*.vue', {
      eager: true, // 同步加载（适合基础组件）
      import: 'default', // 确保导入默认导出
    }) as Record<string, Component>; // 类型断言为 Record<string, Component>
    // 遍历导入的组件并注册到 Vue 实例
    Object.entries(globalComponents).forEach(([path, component]) => {
      // 提取组件名称，假设文件名即为组件名
      const componentName = path.split('/').pop()?.replace('.vue', '') || '';
      // 确保组件名不为空
      app.component(componentName, component); // 注册组件
    });
  },
  console: '全局组件注册完成',
};
