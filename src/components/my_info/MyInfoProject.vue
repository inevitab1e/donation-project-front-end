<template>
  <el-col :span="18">
    <div class="grid-content">
      <el-row :gutter="20">
        <el-col :span="6">
          <!-- 图片 -->
          <a href="https://www.baidu.com/" target="_blank">
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
              <a href="https://www.baidu.com/" target="_blank" class="titless"
                >test project 01</a
              >
            </h3>
            <p>
              <span class="pro_sp2"
                >项目简介 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">text</span>
            </p>
            <p>
              <span class="pro_sp2"
                >项目简介 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">text</span>
            </p>
            <p>
              <span class="pro_sp2"
                >项目简介 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">text</span>
            </p>
            <p>
              <span class="pro_sp2"
                >项目简介 <el-divider direction="vertical"></el-divider> </span
              ><span class="info">text</span>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-col>
</template>

<script>
export default {

}
</script>

<style>

</style>