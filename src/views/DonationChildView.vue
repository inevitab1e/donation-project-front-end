<template>
  <div class="donation_child_container">
    <ChildList></ChildList>
  </div>
</template>

<script>
import ChildList from "@/components/child/ChildList.vue";

export default {
  components: {
    ChildList,
  },
};
</script>

<style scoped>
.donation_child_container {
  margin-bottom: 20px;
  width: 1000px;
  margin: 0 auto; /* 设置左右外边距为 auto，实现水平居中 */
  text-align: center; /* 设置文本水平居中，这对内联元素有效 */
}
</style>