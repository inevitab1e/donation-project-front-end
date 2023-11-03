<template>
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <el-menu :default-active="$route.path" router class="el-menu-vertical-demo">
        <el-menu-item index="/my_info/detail">
          <i class="el-icon-menu"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>我捐助的</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/my_info/projects">帮扶项目</el-menu-item>
            <el-menu-item index="/my_info/children">定向帮扶</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </el-col>
</template>
  
  <script>
export default {

};
</script>
  
  <style>
</style>