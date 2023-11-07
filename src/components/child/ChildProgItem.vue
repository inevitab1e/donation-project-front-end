<!-- 定向帮扶详情页进步组件 -->
<template>
  <div class="child-prog-item">
    <el-row>
      <el-col :span="12">
        <h2>进展标题</h2>
        <div class="child-content">
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
export default {
  mounted: {},
  // props:{
  //   item: Object
  // },
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