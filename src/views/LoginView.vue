<!-- 登录界面 -->
<template>
  <div class="login-container">
    <el-card class="login-card">
      <h1>“光明筑梦”贫困儿童帮扶平台</h1>
      <h2>登录</h2>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 0px;">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="plain" @click="jumpToSignIn">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      loginForm: {
        user: null,
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 在这里添加登录逻辑
          // 示例：验证用户名和密码，然后跳转到主页
          if (
            this.loginForm.username === "user" &&
            this.loginForm.password === "password"
          ) {
            this.$router.push("/dashboard"); // 使用Vue Router导航到主页
          } else {
            this.$message.error("用户名或密码不正确");
          }
        }
      });
    },
    jumpToSignIn () {
        this.$router.push('/sign_in');
    },
  },
};
</script>
  
<style scoped>
h1{
    font-size: 25px;
}

h2{
    font-size: 20px;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 400px;
  padding: 20px;
  text-align: center;
}

</style>
  