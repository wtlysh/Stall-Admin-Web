<template>
  <div id="login">
    <div class="login-title right relative">
      <h1 class="mb-6">Welcome to</h1>
      <h2>城市地摊片区规划及地摊线上综合管理系统 ! !</h2>
    </div>
    <el-card header="登录" class="login-card absolute text-center fs-xl">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            native-type="submit"
            class="fs-xl"
            style="width: 90%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      // sessionStorage.token = res.data.token
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登录成功",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  background-image: url(../assets/images/3b46b228d731f848afdb340816692c7f.jpg);
  width: 100%;
  height: 100%;
  position: fixed;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 100% 100%;
  font-size: 30upx;
  .login-card {
    width: 500px;
    height: 600px;
    top: 18rem;
    right: 28rem;
  }
  .login-title {
    font-size: 20px;
    right: 20rem;
    top: 6rem;
  }
}
</style>
