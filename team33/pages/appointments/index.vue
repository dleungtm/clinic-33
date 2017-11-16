<template>
  <section class="appointments-view">

    <!-- ALL APPOINTMENTS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span v-if="$store.state.isAdmin || $store.state.isReceptionist" class="subsection-title" style="vertical-align: middle;">Appointments</span>
          <span v-if="!$store.state.isAdmin && !$store.state.isReceptionist" class="subsection-title" style="vertical-align: middle;">My Appointments</span>
          <nuxt-link class="button--default" to="/appointments/create">Create Appointment</nuxt-link>
        </div>
        <div v-if="appointments.length > 1">
          <form id="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input name="query" v-model="searchQuery" >
          </form>
          <br>
          <grid
            :data="appointments"
            :columns="gridColumns"
            :filter-key="searchQuery">
          </grid>
        </div>
        <h5 v-if="appointments.length < 1">You do not have any appointments.</h5>

      </div>
    </div>

    <!-- PERSONAL APPOINTMENTS -->
    <!-- <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">My Appointments</span>
        </div>

        <form id="search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input name="query" v-model="searchQuery" >
        </form>
        <br>
        <grid
          :data="appointments"
          :columns="gridColumns"
          :filter-key="searchQuery">
        </grid>

      </div>
    </div> -->
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      searchQuery: '',
      gridColumns: [
        { key: 'date', displayName: 'Date' },
        { key: 'start_time', displayName: 'Time' },
        { key: 'patient_fname', displayName: 'First Name' },
        { key: 'patient_lname', displayName: 'Last Name' },
        { key: 'last_name', displayName: 'Clinician' }
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
