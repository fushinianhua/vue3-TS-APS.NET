import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'node:path';
import { viteMockServe } from 'vite-plugin-mock';
// https://vite.dev/config/
export default defineConfig({
     plugins: [
          vue(),
          vueDevTools(),
          viteMockServe({
               // mock 文件所在目录
               mockPath: './src/mock', // 确保路径正确
               enable: true, // 显式启用 Mock 服务（开发环境）
               logger: true, // 开启日志，启动时会显示加载的 Mock 文件
          }),
          createSvgIconsPlugin({
               // Specify the icon folder to be cached
               iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
               // Specify symbolId format
               symbolId: 'icon-[dir]-[name]',
          }),
     ],
     resolve: {
          alias: {
               '@': fileURLToPath(new URL('./src', import.meta.url)),
          },
     },
     css: {
          preprocessorOptions: {
               scss: {
                    // 全局注入 SCSS 变量和混合
                    additionalData: `
          @import "@/assets/styles/variable.scss";

        `,
               },
          },
     },
});
