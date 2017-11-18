<template>
  <section class="user-view">
    <div class="content">
      <div class="subsection">
        <form style="margin: 15px 15px;">
            <div style="margin: 10px 0;">
              <span class="user-username">Username: </span>
              <input type="text" :value="user.username" v-model="user.username"></input>
            </div>
            <div style="margin: 10px 0;">
              <span class="user-password">Password: </span>
              <input type="password" v-model="user.password"></input>
            </div>
        </form>
        <button type="button" class="button--default" @click="submitUpdate">Update</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  asyncData ({ params, error }) {
    return axios.get('/api/users/' + params.username)
      .then((res) => {
        return { user: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },

  data () {
    return {}
  },

  methods: {
    submitUpdate () {
      let self = this

      axios.post('/api/users/update', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            user_id: self.user.user_id,
            username: self.user.username,
            password: self.user.password
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
      title: `Update User: ${this.user.username}`
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
