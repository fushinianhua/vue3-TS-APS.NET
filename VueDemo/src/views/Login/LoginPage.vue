<template>
  <div class="首页">
    <el-row type="flex" justify="space-between" class="full-height">
      <el-col :span="12" :xs="0" color="red" class="left-column">
        左侧内容
      </el-col>
      <el-col :span="12" :xs="24" class="right-column">
        右侧内容
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 脚本部分
</script>

<style scoped lang="scss">
.首页 {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .el-row {
    height: 100%; // 确保行高度填满容器

    &.full-height {
      flex-wrap: nowrap; // 防止在小屏幕换行
    }
  }

  .el-col {
    border: 1px solid red;
    /* 调试用 */
  }

  .el-col {
    display: flex; // 使用 flex 布局
    flex-direction: column; // 垂直排列内容
    justify-content: center; // 垂直居中内容（可选）

    &.left-column {
      background-color: rgba(255, 0, 0, 0.2); // 调试用，可移除
    }

    &.right-column {
      background-color: rgba(0, 255, 0, 0.2); // 调试用，可移除
    }
  }

  // 移动端样式
  @media screen and (max-width: 768px) {
    .right-column {
      width: 100% !important; // 确保在小屏幕占满宽度
      margin-left: 0 !important; // 清除左侧边距
    }
  }
}
</style>
