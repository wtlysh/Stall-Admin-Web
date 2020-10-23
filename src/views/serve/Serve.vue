<template>
  <div id="serve">
    <el-container>
      <el-container>
        <el-header class="bg-white border text-center">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="显示所有现在摊位"></el-checkbox>
            <el-checkbox label="显示所有推荐摊位"></el-checkbox>
          </el-checkbox-group>
        </el-header>
        <el-main class="bg-white"></el-main>
      </el-container>
      <el-aside class="bg-white border">
        <div class="">
          <div class="mt-2 text-center fs-md">数据显示</div>
        </div>
        <div style="height: 100px">
          <div class="mt-2 text-center fs-md">推荐位置</div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
#serve {
  height: 500px;
  .el-checkbox {
    bottom: 20px;
  }
}
</style>
