<!-- 帮扶项目详细进展展示框 -->
<template>
  <div class="project-prog-item">
    <el-row>
      <el-col :span="12">
        <h2>进展标题</h2>
        <div class="prog-content">
          <div class="content">
            <p>进展内容</p>
          </div>
          <div class="time">
            <p>2023-9-10</p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="img">
          <img src="../../assets/logo.png" alt="" />
        </div>
      </el-col>
    </el-row>
    <hr />
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      projectProgItemList: [],
    };
  },
  // props: {
  //   item: Object,
  // },
  created: {
    initChildProgItemList() {
      this.projectProgItemList = this.getProjectProgItemList();
    },
  },
  methods: {
    async getProjectProgItemList() {
      const response = await this.$axios.get(
        "/projectItem/query",
        this.currentProject.id
      );
      this.childProgItemList = response.data.data;
    },
  },
  computed: {
    ...mapState("project", ["currentProject"]),
  },
};
</script>
  
  <style scoped>
.img {
  text-align: center;
  background-color: #e6e5e5;
}
.time {
  margin-bottom: 0;
}
</style>