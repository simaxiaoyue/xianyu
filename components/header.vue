<template>
  <div class="container">
    <el-row type="flex" class="main" justify="space-between">
      <a href class="logo">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
      </a>
      <el-row type="flex" class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <div class="login">
        <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.container {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 2px 2px #ddd;
  .main {
    width: 1000px;
    margin: 0 auto;
    .logo {
      padding-top: 9px;
      img {
        width: 156px;
        height: 42px;
        display: block;
      }
    }
    .nav {
      flex: 1;
      margin: 0 20px;
      a {
        display: block;
        padding: 0 20px;
        height: 60px;
        box-sizing: border-box;
        &:hover {
          color: #409eff;
          border-bottom: 5px solid #409eff;
        }
      }
      .nuxt-link-exact-active {
        color: #fff;
        background-color: #409eff;
          &:hover {
          color: #fff;
        }
      }
    }
    .login{
        a {
          &:hover{
          color: #409eff;
          }
        }
    }
  }
}
</style>