<template>
  <div class="page-classify">
    <HeaderType title="分类"></HeaderType>

    <HeaderTypeList :info="type" @click="onChangeList"></HeaderTypeList>

    <div class="classify-main">
      <CartoonList :info="cartoonList"></CartoonList>
    </div>
  </div>
</template>

<script>
import { HeaderType, HeaderTypeList } from '@/components/Header'
import CartoonList from '@/components/CartoonList/'
import { getType, getList } from '@/api/classify'
import { unformat } from '@/tools/apiHeader'
export default {
  name: 'Classify',

  data () {
    return {
      type: [],
      list: []
    }
  },

  components: {
    HeaderType,
    HeaderTypeList,
    CartoonList
  },

  methods: {
    getType () {
      return getType().then(res => {
        this.type = res.info
      })
    },

    getList (subject) {
      getList(subject).then(res => {
        const info = JSON.parse(unformat(res.info)).comicsList
        // console.log(info)
        this.list = info
      })
    },

    onChangeList (payload) {
      const subject = payload.type.targetargument
      this.getList(subject)
    }
  },
  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.coverurl,
          view: item.bigbookview
        }
      })
    }
  },

  async created () {
    await this.getType()
    this.getList(this.type[0].targetargument)
  }
}
</script>

<style lang='scss' scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
