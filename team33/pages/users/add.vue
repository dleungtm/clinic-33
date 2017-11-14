<template>
  <section class="user-view">
  <div class="content">
    <div class="subsection">
    <form style="margin: 15px 15px;">
    <div style="margin: 10px 0;">
        <span class="user-password">User ID: </span>
        <input type="text" v-model="user_id"></input>
      </div>
      <div style="margin: 10px 0;">
        <span class="user-password">First Name: </span>
        <input type="text" v-model="first_name"></input>
      </div>
      <div style="margin: 10px 0;">
        <span class="user-password">Last Name: </span>
        <input type="text" v-model="last_name"></input>
      </div>
      <div style="margin: 10px 0;">
        <span class="user-username">Username: </span>
        <input type="text" :value="username" v-model="username"></input>
      </div>
      <div style="margin: 10px 0;">
        <span class="user-password">Password: </span>
        <input type="password" v-model="password"></input>
      </div>
      <div style="margin: 10px 0;">
        <span class="user-password">Phone: </span>
        <input type="text" v-model="phone_number"></input>
      </div>
        <div style="margin: 10px 0;">
        <span class="user-password">address: </span>
        <input type="text" v-model="address"></input>
      </div>
        <div style="margin: 10px 0;">
        <span class="user-password">active: </span>
        <input type="text" v-model="is_active"></input>
      </div>
      
    </form>
    <button type="button" class="button--default" @click="submitInsert">Add User</button>
    </div>
  </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      user_id: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      address: '',
      username: '',
      password: '',
      is_active: true
    }
  },

  methods: {
    submitInsert () {
      let self = this

      axios.post('/api/users/add', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          { user_id: self.user_id,
            first_name: self.first_name,
            last_name: self.last_name,
            phone_number: self.phone_number,
            address: self.address,
            username: self.username,
            password: self.password,
            is_active: self.is_active
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          self.$nuxt.$router.replace({ path: res.data })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Add New User`
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  padding-top 0

.content
  position absolute
  width 100%

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
    text-decoration underline
  &:hover
    color #fff

</style>
