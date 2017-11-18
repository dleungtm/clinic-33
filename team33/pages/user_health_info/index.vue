<template>
  <section class="user-health-info-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Patient Medical Records</span>
        </div>
        <form id="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input name="query" v-model="searchQuery" >
        </form>
        <br>
        <div>
          <grid
            :data="recordItems"
            :columns="recordGridColumns"
            :filter-key="searchQuery"
            :hasAction="hasAction"
            :buttonLabel="buttonLabel"
            :buttonAction="buttonAction">
          </grid>
        </div>
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
      buttonLabel: 'Details',
      recordItems: [],
      recordGridColumns: [
        { key: 'last_name', displayName: 'Last Name' },
        { key: 'first_name', displayName: 'First Name' },
        { key: 'phn', displayName: 'Personal Health Number' },
        { key: 'sex', displayName: 'Sex' },
        { key: 'dob', displayName: 'Date of Birth' }
      ]
    }
  },
  mounted () {
    axios.get('/api/users/all_info').then(response => {
      this.recordItems = response.data
    })
  },
  methods: {
    hasAction: function (entry) {
      return true
    },
    buttonAction: function (entry) {
      this.$router.push({ path: `/user_health_info/${entry.user_id}` })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
