<template>
  <section class="appointments-view">

    <!-- ALL APPOINTMENTS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span v-if="$store.state.isAdmin || $store.state.isReceptionist" class="subsection-title" style="vertical-align: middle;">All Appointments</span>
          <span v-if="!$store.state.isAdmin && !$store.state.isReceptionist" class="subsection-title" style="vertical-align: middle;">My Upcoming Appointments</span>
          <nuxt-link class="button--default" to="/appointments/create">Create Appointment</nuxt-link>
        </div>
        <div v-if="appointments.length > 0">
          <form id="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input name="query" v-model="searchQuery" >
          </form>
          <br>
          <grid
            :data="appointments"
            :columns="gridColumns"
            :filter-key="searchQuery"
            :hasAction1="hasAction1"
            :buttonLabel1="buttonLabel1"
            :buttonAction1="buttonAction1"
            :hasAction2="hasAction2"
            :buttonLabel2="buttonLabel2"
            :buttonAction2="buttonAction2">
          </grid>
        </div>
        <h5 v-if="($store.state.isAdmin || $store.state.isReceptionist) && appointments.length < 1">No appointments have been booked yet.</h5>
        <h5 v-if="(!$store.state.isAdmin && !$store.state.isReceptionist) && appointments.length < 1">You do not have any appointments.</h5>

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
      buttonLabel1: 'Appointment Record',
      buttonLabel2: 'Cancel',
      gridColumns: [
        { key: 'date', displayName: 'Date' },
        { key: 'start_time', displayName: 'Time' },
        { key: 'patient_name', displayName: 'Patient' },
        { key: 'clinician_name', displayName: 'Clinician' }
      ],
      appointments: []
    }
  },

  mounted () {
    if (this.$store.state.isAdmin || this.$store.state.isReceptionist) {
      axios.get('/api/appointments/').then(response => {
        this.appointments = response.data
      })
    } else {
      axios.get('/api/appointments/user/' + this.$store.state.authUser.user_id).then(response => {
        this.appointments = response.data
      })
    }
  },

  methods: {
    hasAction1: function (entry) {
      return true
    },
    buttonAction1: function (entry) {
      this.$router.push({ path: `/appointment_records/${entry.appointment_id}` })
    },
    hasAction2: function (entry) {
      return (new Date(entry.date) >= new Date())
    },
    buttonAction2: function (entry) {
      if (this.$store.state.isAdmin || this.$store.state.isReceptionist) {
        axios.post('/api/appointments/delete/', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              appointment_id: entry.appointment_id
            }
        }).then(response => {
          axios.get('/api/appointments/').then(response => {
            this.appointments = response.data
          })
        })
      } else {
        axios.post('/api/appointments/delete/', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              appointment_id: entry.appointment_id
            }
        }).then(response => {
          axios.get('/api/appointments/user/' + this.$store.state.authUser.user_id).then(response => {
            this.appointments = response.data
          })
        })
      }
    }
  },

  head () {
    return {
      title: 'Appointments'
    }
  }
}
</script>

<style lang="stylus" scoped>

.appointments-view
  padding-top 0

</style>
