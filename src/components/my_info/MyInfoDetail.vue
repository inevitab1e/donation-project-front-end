<!-- 个人信息展示 -->
<template>
  <el-col :span="18">
    <div class="grid-content">
      <el-descriptions v-if="!isEditMode" title="基本信息" column="1">
        <el-descriptions-item label="uid">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="个人简介">苏州市</el-descriptions-item>
      </el-descriptions>
      <el-button v-if="!isEditMode" @click="toggleEditMode">编辑</el-button>
      <el-form v-else>
        <el-form-item label="手机号">
          <el-input v-model="editedPhoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input type="textarea" autosize="true" v-model="editedDescription"></el-input>
        </el-form-item>
        <el-button @click="saveChanges">保存</el-button>
        <el-button @click="removeChanges">取消</el-button>
      </el-form>
    </div>
  </el-col>
</template>
    
    <script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isEditMode: false,
      editedPhoneNumber: "",
      editedDescription: ""
    };
  },
  methods: {
    ...mapActions("user", ["updateUserInfo"]),
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    saveChanges() {
      try {
        // 在这里添加保存编辑后的信息的逻辑
        // 可以将 this.editedUsername、this.editedPhoneNumber、this.editedLocation、this.editedRemark 发送到服务器或执行其他操作
        const isSuccess = this.updateUserInfo({
          phoneNumber: this.editedPhoneNumber,
          description: this.editedDescription,
        });
        if (isSuccess) {
          alert("保存成功");
        } else {
          alert("保存失败");
        }
        this.isEditMode = false; // 保存后退出编辑模式
      } catch (error) {
        console.log(error);
      }
    },
    removeChanges() {
      this.isEditMode = false;
    },
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<style scoped>
.grid-content {
  margin-top: 20px;
  margin-left: 20px;
}
</style>