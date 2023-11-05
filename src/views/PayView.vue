<!-- 支付页面 -->
<template>
  <div class="payment-container">
    <h1>光明筑梦</h1>

    <!-- 支付说明 -->
    <div class="payment-instructions">
      <h2>请使用支付宝扫描下方二维码完成支付</h2>
      <p>
        <span>支付金额：</span>
        <span>2111元</span>
      </p>
    </div>

    <!-- 二维码 -->
    <div class="payment-qr-code">
      <img src="../assets/logo.png" alt="支付二维码" />
    </div>
    <div class="btn">
      <el-button type="primary">我已支付</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
  
  <script>
export default {
  // 你可以在这里添加需要的逻辑
};
</script>
  
  <style scoped>
.payment-instructions {
  margin-top: 20px;
}

.payment-qr-code {
  margin-top: 20px;
}

.payment-container {
  margin-bottom: 20px;
  width: 1000px;
  height: auto;
  margin: 0 auto; /* 设置左右外边距为 auto，实现水平居中 */
  text-align: center; /* 设置文本水平居中，这对内联元素有效 */
}
</style>
  