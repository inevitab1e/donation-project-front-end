<!-- 定向帮扶列表 -->
<template>
  <div class="child-list">
    <ul class="list">
      <ChildItem></ChildItem>
      <ChildItem></ChildItem>
      <ChildItem></ChildItem>
      <ChildItem></ChildItem>
    </ul>
    <br>
    <!-- 之后要写js -->
    <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>
  
  <script>
import ChildItem from "./ChildItem.vue";

export default {
  components: {
    ChildItem,
  },
};
</script>
  
  <style scoped>
.child-list {
  margin-top: 20px;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>