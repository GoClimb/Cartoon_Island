<template>
  <nav class="index-nav">
    <router-link to="/classify">
      <div class="nav-item">
        <div class="nav-pic pic-1"></div>
        <p class="nav-text font-24">分类</p>
      </div>
    </router-link>
    <router-link to="/ranking">
      <div class="nav-item">
        <div class="nav-pic pic-2"></div>
        <p class="nav-text font-24">排行</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div class="nav-item">
        <div class="nav-pic pic-3"></div>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </router-link>
    <router-link to="/history">
      <div class="nav-item">
        <div class="nav-pic pic-4"></div>
        <p class="nav-text font-24">历史</p>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang='scss' scoped>
.index-nav {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .nav-item {
    .nav-pic {
      width: 60px;
      height: 60px;
      background-size: contain;
    }

    .nav-text {
      color: #8d8d8d;
      font-weight: 500;
      text-align: center;
    }
  }
  .pic-1 {
    background: url("~@/assets/icon/classify.png") no-repeat;
  }
  .pic-2 {
    background: url("~@/assets/icon/ranking.png") no-repeat;
  }
  .pic-3 {
    background: url("~@/assets/icon/vip.png") no-repeat;
  }
  .pic-4 {
    background: url("~@/assets/icon/history.png") no-repeat;
  }
}
</style>
