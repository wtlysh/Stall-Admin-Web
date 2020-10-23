<template>
  <div id="admin">
    <el-container class="">
      <el-aside width="30%" height="100%" class="bg-white border text-black-1"
        ><el-menu
          router
          :default-openeds="['1']"
          unique-opened
          :default-active="$route.path"
          class=""
          style="background-color: rgb(40, 44, 52)"
        >
          <el-menu-item
            class="fs-md text-white pt-2 lh-4"
            v-for="items in list"
            :index="items.url"
            :key="items.title + items.url"
            style="height: 80px"
            ><span class="">{{ items.title }}</span></el-menu-item
          >
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="bg-white text-black">搜索</el-header>
        <el-main class="bg-white mt-1">
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "摊位在线注册认证",
          url: "/admin/stall/register",
        },
        {
          title: "摊位在线缴费情况",
          url: "/admin/stall/pay",
        },
        {
          title: "摊位卫生状况监督",
          url: "/admin/stall/hygiene",
        },
        {
          title: "摊位信息库",
          url: "/admin/stall/news",
        },
        {
          title: "摊位等级评测",
          url: "/admin/stall/judge",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#admin {
  .el-menu-item.is-active {
    color: white;
    background-color: #1890ff !important;
  }
  .el-menu-item:hover {
    background-color: #1890ff !important;
  }
}
</style>
