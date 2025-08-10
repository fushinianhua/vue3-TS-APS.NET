<template>
  <div class="首页">
    <el-row>
      <el-col :span="12" :xs="0"> </el-col>
      <el-col :span="12" :xs="24">
        <el-form class="登录">
          <h1>Hellow</h1>
          <h2>欢迎使用</h2>
          <el-form-item>
            <el-input v-model="formvalue.username" :prefix-icon="User"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              type="password"
              v-model="formvalue.password"
              :prefix-icon="Lock"
              :suffix-icon="Hide"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="button" type="primary" size="default" @click="change">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock, Hide } from '@element-plus/icons-vue';
import { reactive } from 'vue';
const formvalue = reactive({ username: '', password: '' }); // 确保是响应式变量
console.log(formvalue);
function change() {
  console.log(formvalue);
}
</script>
<!-- css样式 -->
<style scoped lang="scss">
.首页 {
  width: 100%;
  height: 100dvh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.登录 {
  width: 70%;
  top: 30vh;
  position: relative;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 10px 60px;
}
.button {
  width: 100%;
}
h1 {
  color: white;
  font-size: 40px;
}
h2 {
  font-size: 20px;
  margin: 20px 0px;
}
</style>
