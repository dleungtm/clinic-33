<template>
  <div class="container">
    <div class="row-fluid">
  <div class="span9">
    <h1>Pharmacy</h1>
  </div>
  <div class="span3">
    This is the pharmacy page.
  </div>
</div>
  </div>
</template>


<style lang="stylus" scoped>
.container
  min-height 90vh
  display flex
  //justify-content center
  margin-top 30px
  //align-items center
  text-align left

@media (min-height 1080px)
  .container
    margin-top -200px

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
</style>
