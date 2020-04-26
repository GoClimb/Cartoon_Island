<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <slot />
    </div>
      <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number
    },
    loop: {
      type: Boolean
    }
  },

  mounted () {
    /* eslint-disable */
    new Swiper(this.$el, {
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,

      loop: this.loop ? this.loop : false,

      pagination: {
      el: '.swiper-pagination',
    }
    })
    /* eslint-unable */
  }
}
</script>

<style lang='scss'>
.swiper-container {
  width: 100%;
  height: 180px;

 .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 3px;
    height: 3px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
}
  .swiper-pagination-bullet-active {
    width: 22px;
    height: 11px;
    margin: 0 5px;
    background: url('~@/assets/icon/dot.png') no-repeat 50%;
    background-size: contain
}
}
</style>
