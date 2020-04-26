<template>
  <div class="header-type">
    <div v-for='(item,index) in info' :key='item.id' class="item" :class='{"active":target === index}' @click='fn1(item, index)'>{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTypeList',

  data () {
    return {
      target: 0
    }
  },

  props: {
    info: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    fn1 (type, index) {
      this.target = index
      this.$emit('click', { type, index })
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/mixin.scss";
.header-type {
  @include border-bottom;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  .item {
    width: 20%;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #000;
    &.active {
      color: #e7370c;
    }
  }
}
</style>
