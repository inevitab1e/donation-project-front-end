<!-- 个人信息页面 -->
<template>
  <div class="my_info_container">
    <el-row>
      <MyInfoSideNav></MyInfoSideNav>
      <router-view></router-view>
      <!-- <MyInfoDetail></MyInfoDetail> -->
    </el-row>
  </div>
</template>

<script>
import MyInfoSideNav from "../components/my_info/MyInfoSideNav.vue";
// import MyInfoDetail from "../components/my_info/MyInfoDetail.vue";

export default {
  components: {
    MyInfoSideNav,
    // MyInfoDetail,
  },

};
</script>

<style scoped>
.my_info_container {
  width: 1000px;
  margin: 0 auto;
}
</style>