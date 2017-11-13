<template>
  <div class="container">
    <div class="row-fluid">
      <div class="span12">
        <h1> Welcome! Please login to continue.</h1>
      </div>
      <div class="span12">
      <form v-if="!$store.state.authUser" @submit.prevent="login">
        <p class="error" v-if="formError">{{ formError }}</p>
        <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
        <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
        <button type="submit" class="button--default">Login</button>
      </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the user is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button  @click="logout">Logout</button>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

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
