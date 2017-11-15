<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Users</span>
          <nuxt-link class="button--default" to="/users/add">Add User</nuxt-link>
        </div>

        <form id="search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input name="query" v-model="searchQuery" >
          <nuxt-link class="button--default" style="margin-left: 1em" to="/users/roles">Edit User Roles</nuxt-link>
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

  async asyncData ({store}) {
    let { data } = await axios.get('/api/users/')
    return {
      searchQuery: '',
      gridColumns: [
        { key: 'user_id', displayName: 'User ID' },
        { key: 'first_name', displayName: 'First Name' },
        { key: 'last_name', displayName: 'Last Name' },
        { key: 'role_name', displayName: 'User Role' }
      ],
      users: data
    }
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