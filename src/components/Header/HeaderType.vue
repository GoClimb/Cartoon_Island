<template>
  <header class="header-normal">
    <div class="header-back" @click='back' v-if='leftShow'></div>
    <span class="header-title font-32">{{title}}</span>
    <div class="header-search" @click='go' v-if='rightShow'></div>
</header>
</template>

<script>
export default {
  name: 'HeaderType',

  props: {
    title: {
      type: String,
      default: ''
    },
    leftShow: {
      type: Boolean,
      default: true
    },
    rightShow: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    back () {
      this.$router.back()
    },
    go () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/mixin.scss';
.header-normal {
  @include border-bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  .header-back {
    position: absolute;
    top: 50%;
    left: 12px;
    margin-top: -7px;
    width: 24px;
    height: 14px;
    background: url("~@/assets/icon/header-back.png") no-repeat;
    background-size: 100%;
  }
  .header-title {
    max-width: 70%;
    color: #333;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .header-search {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -11px;
    background: url("~@/assets/icon/header-search.png") no-repeat;
    background-size: 100%;
  }
}
</style>
