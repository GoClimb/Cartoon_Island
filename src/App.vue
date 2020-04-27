<template>
  <div id="app">
    <transition :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
    <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      enterActiveClass: '',
      leaveActiveClass: ''
    }
  },

  watch: {
    $route (to, from) {
      this.enterActiveClass = to.meta.enterActiveClass
      this.leaveActiveClass = from.meta.leaveActiveClass
    }
  }
}
</script>

<style>

</style>
