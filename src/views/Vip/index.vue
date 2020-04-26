<template>
  <div class="page-vip">
    <HeaderType title="VIP专区"></HeaderType>
    <div class="vip-main">
      <CartoonList :info='cartoonList'></CartoonList>
    </div>
  </div>
</template>

<script>
import { HeaderType } from '@/components/Header'
import CartoonList from '@/components/CartoonList'
import { getList } from '@/api/vip'
import { unformat } from '@/tools/apiHeader'
export default {
  name: 'Vip',

  data () {
    return {
      list: []
    }
  },

  components: {
    HeaderType,
    CartoonList
  },

  methods: {
    getList () {
      getList().then(res => {
        const info = JSON.parse(unformat(res.info)).comicsList
        this.list = info
      })
    }
  },

  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          view: item.bigbookview,
          author: item.bigbook_author,
          coverurl: item.coverurl
        }
      })
    }
  },

  created () {
    this.getList()
  }
}
</script>

<style lang='scss' scoped>
.page-vip {
  height: 100%;
  display: flex;
  flex-direction: column;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
