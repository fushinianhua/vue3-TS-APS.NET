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
                              <el-input type="password" v-model="formvalue.password" :prefix-icon="Lock"
                                   :suffix-icon="Hide"></el-input>
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
import useUserStore from '@/stores/modules/user';
const formvalue = reactive({ username: 'admin', password: '111111' }); // 确保是响应式变量
const userStore = useUserStore();

function change() {
     const res = userStore.userlogin(formvalue);

     console.log(res);
}
</script>
<!-- css样式 -->
<style scoped lang="scss">
.首页 {
     width: 100%;
     height: 100vh;
     background: url('@/assets/images/background.jpg') no-repeat; //背景图片+填充
     background-size: cover;
     /* 可选：添加背景固定效果（不随内容滚动） */
     background-attachment: fixed;

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
