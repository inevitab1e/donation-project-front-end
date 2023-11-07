<!-- 个人帮扶项目列表 -->
<template>
  <div>
    <MyInfoProjectItem></MyInfoProjectItem>
    <!-- <MyInfoProjectItem v-for="userProject in this.userProjectList" :key="userProject.id" :userProject="userProject"></MyInfoProjectItem> -->
  </div>
</template>

<script>
import MyInfoProjectItem from "./MyInfoProjectItem.vue";
import { mapState } from "vuex";


export default {
  components: {
    MyInfoProjectItem,
  },
  computed: {
    ...mapState('user',["userProjectList"]),
  },
};
</script>

<style>
</style>