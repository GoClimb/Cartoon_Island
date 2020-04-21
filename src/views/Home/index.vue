<template>
  <div class="page-home">
   <header class="index-header">
     <router-link to='/mine'>
       <div class="header-user">
          <div class="user-btn"></div>
       </div>
    </router-link>

    <div class="header-logo"></div>

    <router-link to='/search'>
      <div class="header-search"></div>
    </router-link>
</header>
  <Swiper :loop='true'>
    <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
  </Swiper>
  <Swiper :loop='true'>
    <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
  </Swiper>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from '@/components/Swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang='scss' scoped>
 .page-home {
   display: flex;
   flex-direction: column;
   height: 100%;

   .index-header {
     height: 49px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 20px;
     box-sizing:border-box;

     .user-btn{
       width: 27px;
       height: 27px;
       background: url('../../assets/icon/header-left.png') no-repeat;
       background-size: 100%;
     }

     .header-logo {
       width: 102px;
       height: 30px;
       background: url('../../assets/icon/header-logo.png') no-repeat;
       background-size: 100%;
     }

     .header-search {
       width: 27px;
       height: 27px;
       background: url('../../assets/icon/header-right.png') no-repeat;
       background-size: 100%;
     }
   }
}
</style>
