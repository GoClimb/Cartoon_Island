<template>
  <div class="page-city">
    <HeaderType :rightShow="false" :title="`当前城市:${cityName}`"></HeaderType>
    <div class="city-main">
      <div class="left" ref="scrollLeft">
        <div>
          <div class="city-list" v-for="item in cityList" :key="item.py" :ref="`cityBox${item.py}`">
            <p>{{ item.py }}</p>
            <ul>
              <li
                v-for="itemChild in item.list"
                :key="itemChild.cityId"
                @click="fn2(itemChild)"
              >{{ itemChild.name }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="right">
        <ul>
          <li v-for="item in cityIndex" :key="item" @click="fn1(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import HeaderType from '@/components/Header/HeaderType'
import { getCity } from '@/api/city'
import BScroll from 'better-scroll'

export default {
  name: 'City',

  data () {
    return {
      cities: []
    }
  },

  computed: {
    ...mapGetters('city', ['cityName']),
    cityList () {
      const tmp = []
      this.cities.forEach(item => {
        const py = item.pinyin.substr(0, 1).toUpperCase()
        const index = tmp.findIndex(item => item.py === py)
        if (index > -1) {
          tmp[index].list.push(item)
        } else {
          tmp.push({
            py,
            list: [item]
          })
        }
      })
      return tmp.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },

    cityIndex () {
      return this.cityList.map(item => item.py)
    }
  },

  components: {
    HeaderType
  },

  methods: {
    ...mapMutations('city', ['set_cityName']),

    fn2 (payload) {
      this.set_cityName(payload)
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
      console.log(this.$router)
    },

    getCity () {
      getCity()
        .then(res => {
          const data = res.data
          if (data.status === 0) {
            this.cities = data.data.cities
          } else {
            alert(data.msg)
          }
        })
        .catch(error => {
          console.log(error)
          console.log('网络异常，请稍后再试')
        })
    },

    fn1 (py) {
      const targetElm = this.$refs[`cityBox${py}`][0]
      const offsetTop = targetElm.offsetTop
      // this.$refs.scrollLeft.scrollTop = offsetTop
      this.scroll.scrollTo(0, -offsetTop, 1000)
    }
  },

  created () {
    this.getCity()
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.scrollLeft, {
      click: true
    })
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/mixin.scss";
.page-city {
  height: 100%;
  display: flex;
  flex-direction: column;

  .city-main {
    height: 100%;
    display: flex;
    overflow: hidden;
    position: relative;

    .left {
      height: 100%;
      flex: 1;
      overflow-y: auto;
      // padding-left: 20px;
      // box-sizing: border-box;

      p {
        padding-left: 15px;
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        background: #f4f4f4;
      }

      ul {
        padding-left: 20px;
        li {
          @include border-bottom;
          height: 40px;
          line-height: 40px;
          font-size: 13px;
        }
      }
    }
    .right {
      width: 20px;
      height: 100%;
      // background: green;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        font-size: 13px;
        height: 15px;
        line-height: 15px;
        color: #191a1b;
      }
    }
  }
}
</style>
