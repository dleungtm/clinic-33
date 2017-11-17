<template>
  <section class="availabilities-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Availabilities</span>
        </div>
        <grid
          :data="availabilities"
          :columns="gridColumns"
          :filter-key="searchQuery"
          :hasAction="hasAction"
          :buttonLabel="buttonLabel"
          :buttonAction="buttonAction">
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
      buttonLabel: 'Toggle Availability',
      gridColumns: [
        { key: 'day', displayName: 'Day' },
        { key: 'start_time', displayName: 'Time' },
        { key: 'is_active', displayName: 'Available?' }
      ],
      availabilities: []
    }
  },

  mounted () {
    axios.get('/api/users/' + this.$store.state.authUser.user_id + '/availability/').then(response => {
      var data = response.data.map(function (obj) {
        switch (obj.day) {
          case 0:
            obj.day = 'Sunday'
            break
          case 1:
            obj.day = 'Monday'
            break
          case 2:
            obj.day = 'Tuesday'
            break
          case 3:
            obj.day = 'Wednesday'
            break
          case 4:
            obj.day = 'Thursday'
            break
          case 5:
            obj.day = 'Friday'
            break
          case 6:
            obj.day = 'Saturday'
            break
        } return obj
      })
      this.availabilities = data
    })
  },

  methods: {
    hasAction: function (entry) {
      return true
    },
    buttonAction: function (entry) {
      axios.post('/api/users/' + this.$store.state.authUser.user_id + '/availability/', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            timeblock_id: entry.timeblock_id,
            day_of_week: entry.day_of_week
          }
      }).then(response => {
        axios.get('/api/users/' + this.$store.state.authUser.user_id + '/availability/').then(response => {
          var data = response.data.map(function (obj) {
            switch (obj.day) {
              case 0:
                obj.day = 'Sunday'
                break
              case 1:
                obj.day = 'Monday'
                break
              case 2:
                obj.day = 'Tuesday'
                break
              case 3:
                obj.day = 'Wednesday'
                break
              case 4:
                obj.day = 'Thursday'
                break
              case 5:
                obj.day = 'Friday'
                break
              case 6:
                obj.day = 'Saturday'
                break
            } return obj
          })
          this.availabilities = data
        })
      })
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

</style>