<template>
  <section class="user-view">
    <div class="content">
      <div class="subsection">
        <span class="user-username" style="padding: 10px 0 10px 10px; margin: 10px 0 10px 0;">{{ user.username }}</span>
        <span class="user-password" style="padding: 10px 10px; margin: 10px 0 10px 0;">{{ `(${user.password})` }}</span>
        <nuxt-link :to="{ path: `/users/${user.username}/update`, params: { username: user.username }}">Update</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'username',
  asyncData ({ params, error }) {
    return axios.get('/api/users/' + params.username)
      .then((res) => {
        return { user: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  head () {
    return {
      title: `User: ${this.user.username}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  padding-top 0

</style>
