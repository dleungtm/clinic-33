<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Users</span>
        </div>

        <form id="search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input name="query" v-model="searchQuery" >
          <nuxt-link class="button--default" style="margin-left: 1em; margin-right: 20px;" to="/users/add">Add User</nuxt-link>
          <nuxt-link class="button--default" style="margin-right: 20px;" to="/users/assign">Edit User Roles</nuxt-link>
          <nuxt-link class="button--default" to="/users/set-inactive">Set Inactive</nuxt-link>
        </form>
        <br>
        <grid
          :data="users"
          :columns="gridColumns"
          :filter-key="searchQuery">
        </grid>

      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      searchQuery: '',
      gridColumns: [
        { key: 'user_id', displayName: 'User ID' },
        { key: 'first_name', displayName: 'First Name' },
        { key: 'last_name', displayName: 'Last Name' },
        { key: 'role_name', displayName: 'User Role' }
      ],
      users: []
    }
  },

  mounted () {
    axios.get('/api/users/').then(response => {
      this.users = response.data
    })
  },

  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style lang="stylus" scoped>

.users-view
  padding-top 0

</style>