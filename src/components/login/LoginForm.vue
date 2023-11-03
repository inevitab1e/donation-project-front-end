<template>
    <div>
      <el-dialog
        :visible.sync="showDialog"
        title="登录"
        width="30%"
        @close="showDialog = false"
      >
        <el-form ref="loginForm" :model="loginForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="showDialog = false">取消</el-button>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDialog: false,
        loginForm: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        // 在这里处理登录逻辑
        // 可以使用 this.loginForm 中的数据
        this.showDialog = false;
      }
    }
  };
  </script>
  