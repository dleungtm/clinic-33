<template>
  <section class="roles-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">User Roles</span>
          <nuxt-link class="button--default" style="padding: 5px 20px; text-decoration: none;" to="/users/assign">Assign User Role</nuxt-link>
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

  async asyncData () {
    let { data } = await axios.get('/api/user_roles')
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
.roles-view
  padding-top 0

.content
  position absolute
  width 100%
  padding 0 0 8vh 0

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .subsection-title
    font-size 26px
    font-weight 500
  .title
    font-size 18px
    font-weight 500
  a
    text-decoration underline
    &:hover
      color #fff

</style>