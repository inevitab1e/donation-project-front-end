<!-- 帮扶项目页列表 -->
<template>
  <div class="project-list">
    <ul class="list">
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <!-- <ProjectItem v-for="project in this.projectList" :key="project.id" :project="project"></ProjectItem> -->
    </ul>
    <br>
    <!-- 之后要写js -->
    <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProjectItem,
  },
  computed: {
    ...mapState("project",["projectList"]),
  },
};
</script>

<style scoped>
.project-list {
  margin-top: 20px;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>