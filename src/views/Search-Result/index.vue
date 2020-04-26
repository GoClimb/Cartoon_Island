<template>
  <div class="page-search-result">
    <HeaderType :title="title" :rightShow="false"></HeaderType>
    <CartoonList :info='cartoonList'></CartoonList>
  </div>
</template>

<script>
import { HeaderType } from '@/components/Header'
import CartoonList from '@/components/CartoonList'
import { getList } from '@/api/search-result'
export default {
  name: 'SearchResult',

  data () {
    return {
      title: this.$route.query.keyword,
      list: []
    }
  },

  created () {
    this.getList(this.title)
  },

  methods: {
    getList (title) {
      getList(title).then(res => {
        this.list = res.info
      })
    }
  },

  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          author: item.author,
          view: item.lastpartname,
          coverurl: item.coverurl
        }
      })
    }
  },

  components: {
    HeaderType,
    CartoonList
  }
}
</script>

<style>
</style>
