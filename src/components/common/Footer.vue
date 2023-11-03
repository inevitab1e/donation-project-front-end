<template>
  <div class="app-footer">
    <el-divider id="footer-divider"></el-divider>
    <span>法律声明</span>
    <el-divider direction="vertical"></el-divider>
    <span>友情链接</span>

    <br />
    <br />
    <span class="copyright">版权所有 dev_team</span>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    
  },
  methods: {},
};
</script>

<style scoped>
#footer-divider{
  width: auto
}

.app-footer {
  background-color: #F4F4F4;
  margin-top: 60px;
  left: 0;
  right: 0;
  position: relative;
  bottom: 0;
  height: 100px;
  text-align: center;
  font-size: 16px;
  padding: 0px 100px;
}
.copyright {
  font-size: 12px;
}
.info {
  font-size: 14px;
  color: #72767b;
  line-height: 25px;
}
</style>
