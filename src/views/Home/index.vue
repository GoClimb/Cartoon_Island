<template>
  <div class="page-home" ref='aa'>
    <IndexHeader></IndexHeader>
    <p>当前城市:{{cityName}}</p>
    <div class="index-main">
      <Swiper class="index-swiper" :loop="true" :autoplay='4000' v-if="bannerList.length > 0">
        <SwiperSlide v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt />
        </SwiperSlide>
      </Swiper>

      <IndexNav></IndexNav>

      <IndexMain v-for='item in mainList' :key='item.specialid' :info='item'></IndexMain>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from '@/components/Swiper'
import { getBanner, getMain } from '@/api/index.js'
import {
  IndexHeader,
  IndexNav,
  IndexMain
} from './Components/indexComponents.js'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      mainList: []
    }
  },

  methods: {
    getBanner () {
      getBanner().then(res => {
        this.bannerList = res.info
      })
    },

    getMain () {
      getMain().then(res => {
        this.mainList = res.info
      })
    }
    // handleScroll (e) {
    //   var aa = this.$refs.aa.scrollTop
    //   console.log(aa)
    //   this.num = aa
    // }
  },

  computed: {
    ...mapGetters('city', ['cityName'])
  },

  components: {
    Swiper,
    SwiperSlide,
    IndexHeader,
    IndexNav,
    IndexMain
  },

  created () {
    this.getBanner()
    this.getMain()
  }

  // mounted () {
  //   window.addEventListener('scroll', this.handleScroll, true)
  // }
}
</script>
<style lang='scss' scoped>
@import "@/assets/style/mixin.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .index-swiper img {
    width: 100%;
    height: 100%;
  }

  .index-recommend .recommend-divide {
    height: 11px;
    background-color: #f4f4f4;
  }
}
</style>
