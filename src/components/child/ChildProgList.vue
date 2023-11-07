<!-- 定向帮扶详情页进步列表 -->
<template>
  <div class="project-prog-list">
    <ul class="list">
      <ChildProgItem></ChildProgItem>
      <ChildProgItem></ChildProgItem>
      <ChildProgItem></ChildProgItem>
      <ChildProgItem></ChildProgItem>
      <!-- <ChildProgItem v-for="item in childProgItemList" :key="item.id" :item="item"></ChildProgItem> -->
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
import ChildProgItem from "./ChildProgItem";
import { mapState } from "vuex";
export default {
  data() {
    return {
      childProgItemList: [],
    };
  },
  components: {
    ChildProgItem,
  },
  created: {
    initChildProgItemList() {
      this.childProgItemList = this.getChildProgItemList();
    },
  },
  methods: {
    async getChildProgItemList() {
      const response = await this.$axios.get(
        "/childItem/query-child",
        this.currentChild.id
      );
      this.childProgItemList = response.data.data;
    },
  },
  computed: {
    ...mapState("child", ["currentChild"]),
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