<template>
  <div class="donation_project_container">
    <ProjectList></ProjectList>
  </div>
</template>

<script>
import ProjectList from "@/components/project/ProjectList.vue";

export default {
  components: {
    ProjectList,
  },
};
</script>

<style scoped>
.donation_project_container {
  margin-bottom: 20px;
  width: 1000px;
  margin: 0 auto; /* 设置左右外边距为 auto，实现水平居中 */
  text-align: center; /* 设置文本水平居中，这对内联元素有效 */
}
</style>