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
    console.log(this)
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
}
</style>
