<template>
  <header class="index-header">
    <router-link to="/mine">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </router-link>

    <div class="header-logo"></div>

    <router-link to="/search">
      <div class="header-search"></div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/mixin.scss";
.index-header {
  @include border-bottom;
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  .user-btn {
    width: 27px;
    height: 27px;
    background: url("~@/assets/icon/header-left.png") no-repeat;
    background-size: 100%;
  }

  .header-logo {
    width: 102px;
    height: 30px;
    background: url("~@/assets/icon/header-logo.png") no-repeat;
    background-size: 100%;
  }

  .header-search {
    width: 27px;
    height: 27px;
    background: url("~@/assets/icon/header-right.png") no-repeat;
    background-size: 100%;
  }
}
</style>
