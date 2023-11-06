<!-- 帮扶项目详细描述组件 -->
<template>
  <div class="project-desc-container">
    <el-row>
      <el-col :span="24">
        <div class="content">
          <h2>项目介绍</h2>
          <div class="img-box">
            <img src="../../assets/logo.png" alt="" />
          </div>
          <div class="detail-content">
            <p>这是content</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted: {},
};
</script>

<style scoped>
.content {
  margin: 0 auto; /* 设置左右外边距为 auto，实现水平居中 */
  text-align: center; /* 设置文本水平居中，这对内联元素有效 */
}
</style>