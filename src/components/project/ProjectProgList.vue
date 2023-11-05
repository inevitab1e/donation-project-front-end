<!-- 帮扶项目详细进展列表 -->
<template>
  <div class="project-prog-list">
    <ul class="list">
      <ProjectProgItem></ProjectProgItem>
      <ProjectProgItem></ProjectProgItem>
      <ProjectProgItem></ProjectProgItem>
      <ProjectProgItem></ProjectProgItem>
    </ul>
    <br />
    <!-- 之后要写js -->
    <!-- <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="100"
    ></el-pagination> -->
  </div>
</template>

<script>
import ProjectProgItem from "./ProjectProgItem";
export default {
  components: {
    ProjectProgItem,
  },
};
</script>

<style scoped>
.project-prog-list {
  margin-top: 20px;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
/* .pagination {

} */
</style>