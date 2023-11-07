<!-- 主题头 -->
<template>
  <div class="app-header">
    <div class="project-icon-container">
      <img class="project-icon" src="../../assets/logo.png" />
    </div>
    <div class="login-link-container">
      <a v-if="this.loginState" class="welcome-words"
        >您好，欢迎来到光明筑梦贫困儿童帮扶平台</a
      >
      <el-link v-else @click="jumpToLogin">登录</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link v-if="this.loginState" @click="logout">退出</el-link>
      <el-link v-else @click="jumpToSignIn">注册</el-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("user", ["updateUser", "updateLoginState"]),
    jumpToLogin() {
      this.$router.push("/login");
    },
    jumpToSignIn() {
      this.$router.push("/sign_in");
    },
    logout() {
      this.updateLoginState(false);
      this.updateUser(null);
      this.$router.push("/", { replace: true });
    },
  },
  computed: {
    ...mapState("user", ["loginState"]),
  },
  created() {
    this.isLogin = !!this.userInfo;
  },
};
</script>

<style scoped>
.app-header {
  padding-top: 30px;
  height: 50px;
  margin-bottom: 15px;
}
.project-icon-container {
  float: left;
  width: 50px;
}
.project-icon {
  width: 50px;
}
.login-link-container {
  margin-right: 10px;
  float: right;
}
.welcome-words {
  font-size: 10px;
}
</style>