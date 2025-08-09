<!-- src/components/icons/StarIcon.vue -->
<template>
  <svg>
    <!-- 使用动态绑定和模板字符串 -->
    <use :xlink:href="`${prefix}${name}`" :fill="color" />
  </svg>
</template>



<script setup lang="ts">
// 定义属性
defineProps({
  // 图标名称
  name: {
    // 保持属性名一致
    type: String, // 类型
    required: true, // 必填
  },
  // 图标前缀
  prefix: {
    type: String,
    default: "#icon-", // 默认值
  },
  //// 图标颜色
  color: {
    type: String,
    default: "", // 默认值
  },
  // 宽高
  Width: {
    type: String,
    default: "20px", // 默认值
  },
  // 高度
  Height: {
    type: String,
    default: "20px", // 默认值
  },
});
</script>
