<!-- 主页面 -->
<template>
  <div class="home-container">
    <HomeProjectList></HomeProjectList>
    <div class="line-break"></div>
    <HomeChildList></HomeChildList>
  </div>
</template>

<script>
import HomeProjectList from "../components/home/HomeProjectList";
import HomeChildList from "../components/home/HomeChildList";

export default {
  name: "HomeView",
  components: {
    HomeProjectList,
    HomeChildList,
  },
};
</script>

<style scoped>
.home-container {
  margin-bottom: 20px;
  width: 1000px;
  height: auto;
  margin: 0 auto; /* 设置左右外边距为 auto，实现水平居中 */
  text-align: center; /* 设置文本水平居中，这对内联元素有效 */
}

.line-break {
  clear: both; /* 在两侧都不允许元素（例如 el-card）显示 */
  height: 0;
  content: " "; /* 添加内容以占用高度 */
  display: block;
}


</style>