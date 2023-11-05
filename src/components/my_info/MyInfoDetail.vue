<!-- 个人信息展示 -->
<template>
  <el-col :span="18">
    <div class="grid-content">
      <el-descriptions v-if="!isEditMode" title="基本信息" column="1">
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址"
          >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
        >
      </el-descriptions>
      <el-button v-if="!isEditMode" @click="toggleEditMode">编辑</el-button>
      <el-form v-else>
        <el-form-item label="用户名">
          <el-input v-model="editedUsername"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="editedPhoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="居住地">
          <el-input v-model="editedLocation"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="editedRemark"></el-input>
        </el-form-item>
        <el-button @click="saveChanges">保存</el-button>
        <el-button @click="removeChanges">取消</el-button>
      </el-form>
    </div>
  </el-col>
</template>
    
    <script>
export default {
  data() {
    return {
      isEditMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    saveChanges() {
      // 在这里添加保存编辑后的信息的逻辑
      // 可以将 this.editedUsername、this.editedPhoneNumber、this.editedLocation、this.editedRemark 发送到服务器或执行其他操作
      this.isEditMode = false; // 保存后退出编辑模式
    },
    removeChanges() {
      this.isEditMode = false;
    },
  },
};
</script>

<style scoped>
.grid-content {
    margin-top: 20px;
    margin-left: 20px;
}
</style>