<!-- <template>
  <li class="brief-list-item">
    <a href=""><img src="" title="" alt="" class="" /></a>
    <h3 class="main_h3">
      <a href="" title="">慈善募捐 | 一针一线公益项目</a>
    </h3>
    <div class="donate_infor clearfix">
      <p class="donate_content">
        已筹：<span class="m_num">2632617</span>元 <br />捐款人次:
        <span>55371</span>
      </p>
      <a>我要捐款</a>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
.brief-list-item {
  
  width: 225px;
  height: 225px;
  border: 1px solid #dfdcdc;
  float: left;
  margin-left: 17px;
}
li {
  list-style: none;
}
</style> -->

<template>
  <li class="brief-list-item">
    <el-card :body-style="{ padding: '0px' }" shadow="never">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 10px">
        <h3 class="main_h3">
          <a href="" class="project-title" title="">一针一线公益项目</a>
        </h3>
        <div class="donate_infor clearfix">
          <p class="donate_content">
            已筹：<span class="m_num">2632617</span>元 <br />捐款人次:
            <span>55371</span>
          </p>
          <el-button
            type="primary"
            size="mini"
            class="button"
            :click="showLoginForm()"
            >我要捐款</el-button
          >
          <LoginForm v-if="showForm"></LoginForm>
          <!-- <a>我要捐款</a> -->
        </div>
      </div>
    </el-card>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    showLoginForm() {
      this.showForm = true;
      console.log(this.showForm);
    },
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