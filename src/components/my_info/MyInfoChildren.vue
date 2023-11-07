<!-- 个人中心帮扶儿童展示列表 -->
<template>
  <div>
    <MyInfoChildItem></MyInfoChildItem>
    <!-- <MyInfoChildItem v-for="userChild in this.userChildList" :key="userChild.id" :userChild="userChild"></MyInfoChildItem> -->
  </div>
</template>
  
  <script>
import MyInfoChildItem from "./MyInfoChildItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    MyInfoChildItem,
  },
  computed: {
    ...mapState(["user", ["userChildList"]]),
  },
};
</script>
  
  <style>
</style>