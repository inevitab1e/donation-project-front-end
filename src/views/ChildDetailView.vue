<!-- 定向帮扶详细页面 -->
<template>
  <div class="child-detail-container">
    <h1>项目名称</h1>
    <div class="top-container">
      <el-row>
        <el-col :span="12">
          <img src="../assets/logo.png" alt="" />
        </el-col>
        <el-col :span="12">
          <div class="donate-target">
            <div class="progress-info">
              <p class="horizon-p">
                <span>目标：</span>
                <span>10000</span>元
              </p>
              <p class="horizon-p">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p class="horizon-p">
                <span>已筹：</span>
                <span>5000</span>元
              </p>
            </div>
            <div class="progress-container">
              <el-progress :percentage="50"></el-progress>
            </div>
            <div class="time-box">
              <p class="horizon-p">
                <span>时间</span>
              </p>
              <p class="horizon-p">&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p class="horizon-p">
                <span>11:11</span>
                <span>--</span>
                <span>22:22</span>
              </p>
            </div>
            <br /><br /><br />
            <div class="donate-form">
              <el-row :gutter="11">
                <el-col :span="5">
                  <div class="donation-input-label">捐款金额:</div>
                </el-col>
                <el-col :span="7">
                  <el-input
                    v-model.number="donationMoney"
                    placeholder="输入捐款金额"
                  />
                </el-col>
                <el-col :span="6">
                  <el-button type="primary" @click="donate">捐款</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <hr />
    </div>
    <div class="main">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/child_detail/child_desc">捐助说明</el-menu-item>
        <el-menu-item index="/child_detail/child_prog">捐助进展</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>
  
  <script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      donationMoney: 0,
    };
  },
  components: {},
  methods: {
    ...mapMutations("user", ["updateDonationMoney"]),
    handleSelect(key) {
      // if(key === )
      this.activeIndex = key; // 更新当前激活的菜单项
      this.$router.push(key, { replace: true }); // 使用Vue Router进行路由导航
    },
    donate() {
      // 使用正则表达式验证 donationMoney
      const regex = /^(?:\d+|\d*\.\d{0,2})$/;
      if (
        !regex.test(this.donationMoney) ||
        parseFloat(this.donationMoney) < 0
      ) {
        // 不是数字、格式错误或小于零时，弹出信息框
        this.$message.error("捐款金额必须为非负数，最多保留两位小数。");
        return;
      }
      // this.donationMoney = null;
      // 在这里执行捐款操作
      console.log(this.donationMoney);
      this.updateDonationMoney(this.donationMoney);
      this.$router.push({ name: "pay", params: { type: 2 } });
    },
  },
};
</script>
  
  <style scoped>
h1 {
  text-align: left;
}
.child-detail-container {
  width: 1000px;
  margin: 0 auto; /* 设置左右外边距为 auto，实现水平居中 */
  text-align: left;
}
.donate-target {
  margin-left: 20px;
}

/* .donate-form {
    border: 1px solid #dfdcdc;
  }
  .time-box{
    height: 20px;
  } */

p.horizon-p {
  float: left;
}

div.donation-input-label {
  font-size: 20px;
}

.main {
  width: 1000px;
  margin: 0 auto;
}
</style>
    