<template>
  <div class="page-ranking">
   <HeaderType title="排行榜"></HeaderType>
   <HeaderTypeList :info='type' @click='onChangeList'></HeaderTypeList>

   <div class="ranking-main">
     <CartoonList :info='cartoonList' :isRanking=true></CartoonList>
   </div>
  </div>
</template>

<script>
import { HeaderType, HeaderTypeList } from '@/components/Header'
import CartoonList from '@/components/CartoonList'
import { getList } from '@/api/ranking'
import { unformat } from '@/tools/apiHeader'
export default {
  name: 'Ranking',

  data () {
    return {
      type: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ],
      list: []
    }
  },

  methods: {
    getList (ranktype) {
      getList(ranktype).then(res => {
        const info = JSON.parse(unformat(res.info)).ranklist
        this.list = info
      })
    },

    onChangeList (payload) {
      const ranktype = payload.type.ranktype
      this.getList(ranktype)
    }
  },

  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.bigbookid,
          author: item.author,
          coverurl: item.coverurl,
          name: item.name,
          view: item.sales
        }
      })
    }
  },
  components: {
    HeaderType,
    HeaderTypeList,
    CartoonList
  },

  created () {
    this.getList(this.type[0].ranktype)
  }
}
</script>

<style lang='scss' scoped>
.page-ranking {
  height: 100%;
  display: flex;
  flex-direction: column;
  .ranking-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
