<!-- 主导航栏 -->
<template>
  <div class="app-navigator">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-navigator"
      mode="horizontal"
      text-color="#FFF"
      active-text-color="#FFF"
      background-color="#DF2413"
      @select="handleSelect"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/donation_project">帮扶项目</el-menu-item>
      <el-menu-item index="/donation_child">定向帮扶</el-menu-item>
      <el-menu-item index="/my_info" v-if="this.loginState">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppHeader",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key) {
      // if(key === )
      this.activeIndex = key; // 更新当前激活的菜单项
      this.$router.push(key, { replace: true }); // 使用Vue Router进行路由导航
    },
  },
  computed: {
    ...mapState("user", ["loginState"]),
  },
};
</script>

<style scoped>
.app-navigator {
  box-sizing: border-box;
  width: auto;
  margin: 0 auto;
  box-shadow: none;
}
</style>