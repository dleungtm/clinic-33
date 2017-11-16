<template>
  <section class="roles-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">User Roles</span>
          <nuxt-link class="button--default" to="/users/assign">Assign User Role</nuxt-link>
        </div>
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

.roles-view
  padding-top 0

</style>