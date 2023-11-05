<!-- 定向帮扶详情页进步列表 -->
<template>
    <div class="project-prog-list">
      <ul class="list">
        <ChildProgItem></ChildProgItem>
        <ChildProgItem></ChildProgItem>
        <ChildProgItem></ChildProgItem>
        <ChildProgItem></ChildProgItem>
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
  export default {
    components: {
      ChildProgItem,
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