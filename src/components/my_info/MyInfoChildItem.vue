<!-- 个人中心帮扶儿童展示框 -->
<template>
  <el-col :span="18">
    <div class="grid-content">
      <el-row :gutter="20">
        <el-col :span="6">
          <!-- 图片 -->
          <a style="font-size: large">
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
              <a class="titless">test project 02</a>
            </h3>
            <p>
              <span class="pro_sp2"
                >捐助儿童 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">name</span>
            </p>
            <p>
              <span class="pro_sp2"
                >&nbsp;&nbsp;&nbsp;&nbsp;年龄&nbsp;&nbsp;&nbsp;
                <el-divider direction="vertical"></el-divider> </span
              ><span class="info">age</span>
            </p>
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
          </div>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" class="btn" @click="handleClick">查看详情</el-button>
        </el-col>
      </el-row>
    </div>
  </el-col>
</template>
      
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    userChild: Object,
  },
  methods:{
    ...mapMutations('child',['updateCurrentChild']),
    handleClick(){
      // this.updateCurrentChild(this.userChild)
      this.$router.push('/child_detail')
    }
  }
};
</script>
      
<style scoped>
img {
  margin-top: 20px;
  margin-left: 10px;
}

.btn {
  margin-top: 20px;
}

.grid-content {
  border: 1px solid #dfdcdc;
  margin-bottom: 20px;
}
</style>