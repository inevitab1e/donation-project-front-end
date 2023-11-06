<!-- 主页帮扶项目展示列表 -->

<template>
  <div class="home-list">
    <div class="home-list-header">
      <h2 class="main_h2"><span class="bd"></span>帮扶项目</h2>
    </div>
    <div class="bd">
      <ul class="list">
        <HomeShowItem></HomeShowItem>
        <HomeShowItem></HomeShowItem>
        <HomeShowItem></HomeShowItem>
        <HomeShowItem></HomeShowItem>
        <!-- <HomeShowItem v-for="item in itemList" :key="item.id" :item="item"></HomeShowItem> -->
      </ul>
    </div>
  </div>
</template>

<script>
import HomeShowItem from "./HomeShowItem";

export default {
  components: {
    HomeShowItem,
  },
};
</script>

<style scoped>
.home-list{
    height: 400px;
    margin-bottom: 20px;
}
.main_h2{
  text-align: left;
}

.list{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>