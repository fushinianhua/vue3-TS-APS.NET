import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import eslintJs from '@eslint/js'; // 新增

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    // 新增规则配置
    rules: {
      // 禁用未使用变量的基本检查
      'no-unused-vars': 'off',
      // 禁用 TypeScript 的未使用变量检查
      '@typescript-eslint/no-unused-vars': 'off',
      // Vue 特定规则：禁用未使用变量检查
      'vue/no-unused-vars': 'off',
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  skipFormatting,

  // 新增基础配置
  {
    ...eslintJs.configs.recommended,
    rules: {
      // 确保基础配置不覆盖我们的规则
      'no-unused-vars': 'off',
    },
  },
);
