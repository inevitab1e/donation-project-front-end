<!-- 帮扶项目详细进展列表 -->
<template>
  <div class="project-prog-list">
    <ul class="list">
      <ProjectProgItem></ProjectProgItem>
      <ProjectProgItem></ProjectProgItem>
      <ProjectProgItem></ProjectProgItem>
      <ProjectProgItem></ProjectProgItem>
      <!-- <ProjectProgItem v-for="item in projectProgItemList" :key="item.id" :item="item"></ProjectProgItem> -->
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
import { mapState } from "vuex";
import ProjectProgItem from "./ProjectProgItem";
export default {
  data() {
    return {
      projectProgList: [],
    };
  },
  components: {
    ProjectProgItem,
  },
  created: {
    initProjectProgList() {
      this.projectProgList = this.getProjectProgList();
    },
  },
  methods: {
    async getProjectProgList() {
      const res = await this.$axios.get("/projectItem/query-project", {
        params: { projectId: this.currentProject.projectId },
      });
      this.projectProgList = res.data.data;
    },
  },
  computed: {
    ...mapState("project", ["currentProject"]),
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