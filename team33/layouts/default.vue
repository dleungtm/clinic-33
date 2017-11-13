<template>
  <div>
    <navbar />
    <nuxt class="view"></nuxt>
    <footer-component />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    FooterComponent
  }
}
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  font-size 15px
  padding 8vh
  color #34495e
  overflow-y scroll

*, *:before, *:after
  box-sizing border-box
  margin 0

a
  color #34495e
  text-decoration none

.view
  max-width 800px
  margin 0 auto
  position relative

.button--default
  display inline-block
  border-radius 4px
  border 1px solid #35495e
  background-color: #fff
  color #35495e
  text-decoration none
  padding 10px 30px
  margin-left 15px

.button--default:hover
  color #fff
  background-color #35495e
  cursor pointer

.page-enter-active, .page-leave-active
  transition opacity .2s

.page-enter, .page-leave-active
  opacity 0
</style>
