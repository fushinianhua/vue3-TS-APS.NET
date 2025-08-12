     <template>
      <div class="首页">
         <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
               <el-form class="登录" :rules="rules" :model="formvalue" ref="formRef">
                  <h1>Hellow</h1>
                  <h2>欢迎使用</h2>
                  <el-form-item prop="username">
                     <el-input v-model="formvalue.username" :prefix-icon="User"></el-input>
                  </el-form-item>

                  <el-form-item prop="password">
                     <el-input type="password" v-model="formvalue.password" :prefix-icon="Lock" show-password>
                     </el-input>
                  </el-form-item>

                  <el-form-item>
                     <el-button class="button" type="primary" size="default" :loading="loading"
                        @click="change">登录</el-button>
                  </el-form-item>

               </el-form>
            </el-col>
         </el-row>
      </div>
   </template>

<script setup lang="ts">

/* eslint-disable */// 忽略所有 eslint 错误
import { User, Lock, Hide } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import useUserStore from '@/stores/modules/user';
import router from '@/router';
import { ElNotification } from 'element-plus';
import { tr } from 'element-plus/es/locales.mjs';

// 表单数据
const formvalue = reactive({ username: 'admin', password: '111111' });


const loading = ref(false);
//表单验证自定义规则

const validatePass = (rule: any, value: any, callback: any) => {
   if (value === '') {
      callback(new Error('Please input the password'))
   } else {
      if (formvalue.password !== '') {
         if (!formRef.value) return
         formRef.value.validateField('checkPass')
      }
      callback()
   }
};
// 表单验证规则
const validatename = (rule: any, value: any, callback: any) => {
   if (value === '') {
      callback(new Error('Please input the password'))
   } else {
      if (formvalue.username !== '') {
         if (!formRef.value) return
         formRef.value.validateField('checkPass')
      }
      callback()
   }

}
// 表单验证规则
const rules = {
   username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
   password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
   // password: [{ validator: validatePass, trigger: 'blur' }],
   // checkPass: [{ validator: validatename, trigger: 'blur' }],

};
// 获取表单实例引用
const formRef = ref();

const userStore = useUserStore();



async function change() {

   loading.value = true;
   //await formRef.value.validate();//验证表单 ，如果验证失败，会抛出异常
   try {

      await userStore.userlogin(formvalue);
      ElNotification({
         title: `Hi,${GetTime()}好`,
         message: '登录成功',
         type: 'success',

      });

      router.push('/Home');

   } catch (error) {
      ElNotification({
         type: 'error',
         message: (error as Error).message,
      });
      loading.value = false;
   }
}

const GetTime = () => {
   const hour = new Date().getHours();
   let message = '';

   if (hour < 6) {
      message = '凌晨';
   } else if (hour < 9) {
      message = '早上';
   } else if (hour < 12) {
      message = '上午';
   } else if (hour < 14) {
      message = '中午';
   } else if (hour < 17) {
      message = '下午';
   } else if (hour < 19) {
      message = '傍晚';
   } else {
      message = '晚上';
   }

   return message;
};


</script>

<style scoped lang="scss">
.首页 {
   width: 100%;
   height: 100vh;
   background: url('@/assets/images/background.jpg') no-repeat;
   background-size: cover;
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
