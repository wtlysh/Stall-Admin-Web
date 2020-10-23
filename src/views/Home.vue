<template>
  <div id="home" class="absolute">
    <el-container class="">
      <el-header style="height: 100px" class="border bg-info text-center mb-2"
        >城市地摊片区规划及地摊线上综合管理系统</el-header
      >
      <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="地摊片区规划大数据分析服务" name="first">
          <router-view :key="$route.path"></router-view>
        </el-tab-pane>
        <el-tab-pane label="地摊线上综合管理系统" name="second">
          <router-view :key="$route.path"></router-view>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name == "first") {
        this.first();
      } else {
        this.second();
      }
    },
    first() {
      this.$router.push(`/`);
    },
    second() {
      this.$router.push(`/admin`);
    },
  },
};
</script>
<style lang="scss">
#home {
  top: 15%;
  left: 15%;
  width: 70%;
  .el-tabs__item.is-active {
    border-bottom: 4px solid #409eff;
  }
}
</style>
