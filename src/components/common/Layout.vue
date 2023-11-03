<template>
  <div class="app-layout">
    <div class="top-layout">
      <AppHeader></AppHeader>
      <AppNavigator></AppNavigator>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigator from "./Navigator";
import AppHeader from "./Header";

export default {
  name: "AppLayout",
  components: {
    AppNavigator,
    AppHeader,
  },
};
</script>

<style scoped>
.top-layout {
  width: 1000px;
  margin: 0 auto;
}
</style>