<!-- 帮扶项目页展示框 -->
<template>
  <li class="project-list-item">
    <div class="card-container">
      <el-row :gutter="20">
        <el-col :span="6">
          <!-- 图片 -->
          <a>
            <img
              class="image"
              src="../../assets/logo.png"
              height="170"
              border="0"
            />
          </a>
        </el-col>
        <el-col :span="12">
          <!-- 文本说明 -->
          <div class="card-text">
            <h3>
              <a class="titless" style="font-size: large">test project 01</a>
            </h3>
            <p>
              <span class="pro_sp2"
                >项目简介 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">description</span>
            </p>
            <p>
              <span class="pro_sp2"
                >计划金额 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">money</span><b>元</b>
            </p>
            <p>
              <span class="pro_sp2"
                >起止时间 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">起始-终止</span>
            </p>
            <!-- <p>
              <span class="pro_sp2"
                >项目简介 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">text</span>
            </p> -->
          </div>
        </el-col>
        <el-col :span="6">
          <!-- 文本说明 -->
          <div class="card-text">
            <!-- <p>
              <span class="pro_sp2">项目状态：</span>
              <span class="info">text</span>
            </p> -->
            <p>
              <span class="pro_sp2">已筹：</span>
              <span class="info">666</span><b>元</b>
            </p>
            <p>
              <span class="pro_sp2">捐款人次：</span>
              <span class="info">666</span>
            </p>
            <p>
              <el-progress :percentage="50"></el-progress>
            </p>
            <br />
            <el-button
              type="primary"
              size="mini"
              class="donation-btn"
              @click="checkLoginState"
              >我要捐款</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    checkLoginState() {
      if (!this.loginState) {
        this.$router.push("/login");
      }
      //写跳转到详情的逻辑
      console.log(this.loginState);
    },
  },
  computed: {
    ...mapState("user", ["loginState"]),
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.project-list-item {
  /* display: flex; */
  width: 1000px;
  clear: both;
  margin-top: 20px;
  border: 1px dashed #dfdfdf;
  font-size: 12px;
  padding-bottom: 20px;
  margin: 0 auto;
}

.card-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-text {
  text-align: left;
  padding: 5px;
}
</style>