<template>
  <div id="home" class="absolute">
    <el-container class="">
      <el-header style="height: 100px" class="border bg-white text-center mb-4"
        >城市地摊片区规划及地摊线上综合管理系统</el-header
      >
      <el-tabs type="card">
        <el-tab-pane label="地摊片区规划大数据分析服务"
          ><el-container class="">
            <el-container class="">
              <el-main class="bg-white border">Main</el-main>
            </el-container>
            <el-aside width="200px" class="bg-white border pl-2"
              >Aside</el-aside
            >
          </el-container></el-tab-pane
        >
        <el-tab-pane label="地摊线上综合管理系统">
          <el-container class="">
            <el-aside width="200px" class="bg-white border pr-2"
              >Aside</el-aside
            >
            <el-container class="">
              <el-main class="bg-white border">Main</el-main>
            </el-container>
          </el-container>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" >
#home {
  top: 15%;
  left: 15%;
  width: 70%;
  .el-header {
    color: #333;
    line-height: 100px;
    font-size: 25px;
  }
  .el-tabs__nav {
    width: 100%;
    background-color: white;
  }
  .el-tabs__item {
    height: 80px;
    font-size: 22px;
    width: 50%;
    line-height: 80px;
    text-align: center;
  }
}
</style>
