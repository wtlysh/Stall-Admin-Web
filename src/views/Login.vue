<template>
  <div id="login">
    <div class="title relative right">
      <h1 class="mb-6">Welcome to</h1>
      <h2>城市地摊片区规划及地摊线上综合管理系统 ! !</h2>
    </div>
    <el-form class="login-card absolute" label-position="left">
      <h3 class="login-title fs-md">登录</h3>
      <el-form-item label="用户名">
        <el-input
          type="text"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" class="pb-2 pt-1">
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%; background: #505458; border: none"
          v-on:click="login"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      responseResult: [],
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/login", {
          username: this.loginForm.username,
          password: this.loginForm.password,
        })
        .then((successResponse) => {
          if (successResponse.data.code === 200) {
            this.$router.replace({ path: "/" });
          }
        })
        .catch((failResponse) => {});
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
  .title {
    font-size: 20px;
    right: 10rem;
    top: 6rem;
  }
  .login-card {
    border-radius: 15px;
    background-clip: padding-box;
    top: 20rem;
    right: 22rem;
    width: 450px;
    height: 500px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .login-title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
  }
}
</style>
