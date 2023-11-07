<!-- 注册界面 -->
<template>
  <div class="register-container">
    <el-card class="sign-in-card">
      <h2>注册</h2>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm">
          <el-input type="password" v-model.trim="form.confirm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">注册</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var validateConfirm = (value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        password: "",
        confirm: "",
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        confirm: [
          { required: true, validator: validateConfirm, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        try {
          if (valid) {
            // TODO: 发送注册信息到后端 api没写
            const res = await this.$axios.post("/donor/signUp", {
              password: this.form.password,
            });
            if (res.data.code === 200) {
              alert("注册成功");
              this.$router.push("/login");
            } else {
              alert("注册失败");
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        } catch (err) {
          console.log(err);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.sign-in-card {
  width: 400px;
  padding: 20px;
  text-align: center;
}
</style>
