<template>
  <section class="availabilities-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">My Availability</span>
        </div>
        <grid
          v-if="availabilities.length > 0"
          :data="availabilities"
          :columns="gridColumns"
          :filter-key="searchQuery"
          :hasAction1="hasAction1"
          :buttonLabel1="buttonLabel1"
          :buttonAction1="buttonAction1">
        </grid>
        <br>
        <h5 v-if="availabilities.length < 1">You have not set up your availability yet.</h5>
        <h5 v-if="availabilities.length < 1">Click the button below to initialize your availability.</h5>

        <button v-if="availabilities.length < 1" type="button" class="button--default" @click="initAvailabilities">Initialize</button>
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
      buttonLabel1: 'Toggle Availability',
      gridColumns: [
        { key: 'day', displayName: 'Day' },
        { key: 'start_time', displayName: 'Time' },
        { key: 'is_active', displayName: 'Available?' }
      ],
      availabilities: []
    }
  },

  mounted () {
    axios.get('/api/users/' + this.$store.state.authUser.user_id + '/availability').then(response => {
      var data = response.data.map(function (obj) {
        switch (obj.day_of_week) {
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
    initAvailabilities () {
      axios.post('/api/users/availability/init', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            user_id: this.$store.state.authUser.user_id
          }
      }).then((res) => {
        axios.get('/api/users/' + this.$store.state.authUser.user_id + '/availability').then(response => {
          var data = response.data.map(function (obj) {
            switch (obj.day_of_week) {
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
        .catch((e) => {
          console.log(e)
          alert('Error setting up availabilities. Please try again later.')
        })
    },
    hasAction1: function (entry) {
      return true
    },
    // toggling availability
    buttonAction1: function (entry) {
      axios.post('/api/users/' + this.$store.state.authUser.user_id + '/availability', {
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
        axios.get('/api/users/' + this.$store.state.authUser.user_id + '/availability').then(response => {
          var data = response.data.map(function (obj) {
            switch (obj.day_of_week) {
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