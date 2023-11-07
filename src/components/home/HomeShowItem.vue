<!-- 主页展示框组件 -->
<template>
  <li class="brief-list-item">
    <el-card :body-style="{ padding: '0px' }" shadow="never">
      <img src="../../assets/logo.png" class="image" />
      <div style="padding: 10px">
        <h3 class="main_h3">
          <a style="font-size: large">一针一线公益项目</a>
        </h3>
        <div class="donate_infor clearfix">
          <p class="donate_content">
            已筹：<span class="m_num" style="color: black">2632617</span>元
            <br />捐款人次:
            <span style="color: black">55371</span>
          </p>
          <el-button
            type="primary"
            size="mini"
            class="button"
            @click="handleClick"
            >我要捐款</el-button
          >
          <!-- <a>我要捐款</a> -->
        </div>
      </div>
    </el-card>
  </li>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  // props: {
  //   item: Object,
  // },
  methods: {
    ...mapMutations("project", ["updateCurrentProject"]),
    ...mapMutations("child", ["updateCurrentChild"]),
    handleClick() {
      if (!this.loginState) {
        this.$router.push("/login");
      }
      //写跳转到详情的逻辑
      // if ('age' in item){
      //   updateCurrentChild(item)
      //   // this.$router.push("/child_detail");
      // }else{
      //   updateCurrentProject(item)
      //   // this.$router.push("/project_detail");
      // }
    },
  },
  computed: {
    ...mapState("user", ["loginState"]),
    ...mapState("project", ["currentProject"]),
    ...mapState("child", ["currentChild"]),
    
  },
};
</script>

<style scoped>
.brief-list-item {
  width: 225px;
  height: auto;
  border: 1px solid #dfdcdc;
  float: left;
  margin-left: 17px;
}
li {
  list-style: none;
}
.main_h3 {
  font-size: 14px;
  color: #454647;
  font-weight: normal;
  height: 23px;
  overflow-y: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.project-title {
  font-size: medium;
  text-decoration: none;
}

.donate_content {
  color: #afafaf;
  line-height: 25px;
  text-align: left;
}

.button {
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
/* Add your scoped styles here */
</style>