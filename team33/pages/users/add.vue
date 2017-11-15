<template>
  <section class="add-user-view">
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

.add-user-view
  padding-top 0

</style>
