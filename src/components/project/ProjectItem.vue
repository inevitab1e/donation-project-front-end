<template>
  <!-- <li class="pro_li">
    <div class="pro_li_img">
      <a href="detail.htm?id=210226" target="_blank">
        <img
          src="//imgcdn.gongyi.qq.com/gongyi/466b62421ce358766b8139d65ad14af10bbdf2ff7d35de582fd15b7dda4dcb51/500"
          height="120"
          border="0"
        />
      </a>
    </div>
    <div class="pro_li_cen">
      <div class="pro_sp1 font_bl">
        <a href="detail.htm?id=210226" target="_blank" class="titless"
          >暖暖夕阳微孝一餐</a
        >
        <div class="clearFix"></div>
      </div>
      <div class="pro_cen_p">
        <div class="pro_list_cen_left"><p class="pro_sp2">项目简介 |</p></div>
        <div class="pro_cen_right">
          <p class="pro_sp4">让留守老人有餐、有爱、有陪伴，建立互助守望社区</p>
        </div>
        <div class="clearFix"></div>
      </div>

      <p>
        <span class="pro_sp2">筹款目标 |</span><b class="money-s">10000000</b>元
      </p>
      <p>
        <span class="pro_sp2">筹款时间 |</span
        ><span class="time-s">2019-01-29</span> 至
        <span class="time-s">2023-12-31</span>
      </p>
      <p>
        <span class="pro_sp2 sp_block">执 行 方 | </span>
        <span class="pro_sp4 sp_block">浙江省微笑明天慈善基金会</span>
      </p>
      <div class="clearFix"></div>
    </div>
    <div class="pro_li_jin pro_list_stat">
      <p class="pro_jindu_2">项目状态:募款中</p>
      <p class="pro-donate-stat">
        已筹：<span>5369341.91</span>元&nbsp;&nbsp;<span>602736</span>人次捐款
      </p>
      <div class="pro_tiao_2">
        <div class="jindu_xm_2">
          <p class="jindu_xm_p_2">
            <span style="width: 53%" class="istrue"></span>
          </p>
        </div>
        <div class="pro_dis_2">53%</div>
      </div>
      <div class="wol_bto">
        <a
          class="wol_btoa"
          href="javascript:void(0);"
          pname="暖暖夕阳微孝一餐"
          pid="210226"
          fid="undefined"
          onclick="toDonate(this);"
          >我要捐款</a
        >
      </div>
    </div>
    <div class="clearFix"></div>
  </li> -->
  <li class="project-list-item">
    <div class="card-container">
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
        <el-col :span="6">
          <!-- 文本说明 -->
          <div class="card-text">
            <p>
              <span class="pro_sp2">项目状态：</span>
              <span class="info">text</span>
            </p>
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
            <br>
            <el-button type="primary" size="mini" class="donation-btn"
              >我要捐款</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </li>
</template>

<script>
export default {};
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