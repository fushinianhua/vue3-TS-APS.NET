import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import type { UserConfig } from 'vite';
import viteConfig from './vite.config';

export default defineConfig(({ mode }) => {
  // 解析 Vite 配置（处理函数形式）
  const resolvedViteConfig: UserConfig =
    typeof viteConfig === 'function' ? viteConfig({ command: 'serve', mode }) : viteConfig;

  return mergeConfig(
    resolvedViteConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    }),
  );
});
