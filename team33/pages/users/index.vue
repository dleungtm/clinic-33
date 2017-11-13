<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Clinic Staff</span>
        </div>

        <form id="search">
          Search <input name="query" v-model="searchQuery">
          <nuxt-link class="button--default" style="padding: 5px 20px; text-decoration: none;" to="/users/add">Add User</nuxt-link>
          <nuxt-link class="button--default" style="padding: 5px 20px; text-decoration: none;" to="/users/roles">User Roles</nuxt-link>
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

  async asyncData () {
    let { data } = await axios.get('/api/users/staff')
    return {
      searchQuery: '',
      gridColumns: [
        { key: 'user_id', displayName: 'User ID' },
        { key: 'first_name', displayName: 'First Name' },
        { key: 'last_name', displayName: 'Last Name' }
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