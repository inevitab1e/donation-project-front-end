<!-- 主页定向帮扶展示列表 -->
<template>
  <div class="home-list">
    <div class="home-list-header">
      <h2 class="main_h2"><span class="bd"></span>定向帮扶</h2>
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
import { mapState } from "vuex";

export default {
  data() {
    return{
      itemList: this.childList.slice(0,4)
    }
  },
  components: {
    HomeShowItem,
  },
  computed: {
    ...mapState("child", ["childList"]),
  },
};
</script>
  
  <style scoped>
.home-list {
  height: 400px;
  margin-bottom: 20px;
}
.main_h2 {
  text-align: left;
}
.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>