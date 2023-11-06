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
        <el-form-item label="账号" prop="account">
          <el-input v-model="loginForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 0px">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="plain" @click="jumpToSignIn">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
      },
      loginRules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    login() {
      this.$refs.loginForm.validate((valid) => {
        try {
          if (valid) {
            // 在这里添加登录逻辑
            this.getUserInfo({
              account: this.loginForm.account,
              password: this.loginForm.password,
            });
            // console.log(this.loginForm.account, this.loginForm.password);
            // 示例：验证用户名和密码，然后跳转到主页
            if (this.loginState) {
              this.$message.success("登录成功");
              this.$router.push("/home"); // 使用Vue Router导航到主页
              console.log(this.user);
            } else {
              this.$message.error("账号或密码不正确");
            }
          }
        } catch (err) {
          console.log(err);
        }
      });
    },
    jumpToSignIn() {
      this.$router.push("/sign_in");
    },
  },
  computed: {
    ...mapState("user", ["user", "loginState"]),
  },
};
</script>
  
<style scoped>
h1 {
  font-size: 25px;
}

h2 {
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
  