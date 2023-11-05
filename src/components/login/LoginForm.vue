<template>
  <div>
    <el-dialog
      v-show="isShowForm"
      title="登录"
      width="30%"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username"> </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
    };
  },
  props: {
    isShowForm: Boolean,
  },
  mounted() {
    console.log(this.isShowForm);
  },
  methods: {
    submitForm() {
      // 在这里处理登录逻辑
      // 可以使用 this.loginForm 中的数据
      this.$emit("update:isShowForm", false);
    },
    close() {
      this.$emit("update:isShowForm", false);
    },
  },
};
</script>
  