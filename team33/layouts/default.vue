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

.fa
  padding 0.5em

a
  color #34495e
  text-decoration none

.view
  max-width 1000px
  margin 0 auto
  position relative

.container
  flex 1 1 1
  margin-top 8vh
  text-align left

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .subsection-title
    margin 25px 10px
    font-size 26px
    font-weight 500
  .user-username
    font-size 24px
    font-weight 500
    color #707070
  .user-password
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration none

.title
  font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif /* 1 */
  display block
  font-weight 300
  font-size 50px
  color #35495e
  letter-spacing 2px
  text-transform uppercase

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px

@media (max-width 860px)
  .title
    font-size 64px
  .subtitle
    font-size 32px

@media (max-width 860px)
  .links
    .link
      width 50%
      margin-bottom 15px
      display relative

.form-field
  display inline-block
  margin 0 auto

  input
    float left
    font-size 14px
    padding 2px

  label
    float left
    min-width 80px
    padding-top 3px // to make the label vertically inline with the input element
    
#search
  width inherit
  input
    width 300px

select
  -webkit-appearance menulist-button
  -webkit-user-select none
  border 1px solid #35495e
  color #35495e
  height 34px
  width 300px
  overflow hidden
  text-overflow ellipsis
  
.button--default
  display inline-block
  border-radius 4px
  border 1px solid #35495e
  background-color: #fff
  color #35495e
  padding .5em 2em
  text-decoration none

.button--default:hover
  color #fff
  background-color #35495e
  cursor pointer

.page-enter-active, .page-leave-active
  transition opacity .2s

.page-enter, .page-leave-active
  opacity 0
</style>
