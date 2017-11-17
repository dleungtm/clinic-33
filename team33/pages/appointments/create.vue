<template>
  <section class="create-appointment-view">

    <!-- ALL APPOINTMENTS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Create Appointment</span>
        </div>
        <div v-if="$store.state.isAdmin || $store.state.isReceptionist" class="form-field">
          <label>Select Patient: </label>
          <br>
          <select v-model="selectedPatientId">
            <option disabled value="">Please Select One</option>
            <option v-for="patient in patients" :value="patient.user_id">
            {{ patient.name }}
            </option>
          </select>
          {{ selectedPatientId }}
        </div>
        <br>
        <br>
        <div class="form-field">
          <label>Select Clinician: </label>
          <br>
          <select v-model="selectedClinicianId">
            <option disabled value="">Please Select One</option>
            <option v-for="clinician in clinicians" :value="clinician.user_id">
            {{ clinician.name }}
            </option>
          </select>
            {{ selectedClinicianId }}
        </div>
        <br>
        <br>
        <div class="form-field">
          <label>Select Date: </label>
          <br>
          <p style="visibility: hidden">{{ disabledDays }}</p>
          <datepicker v-model="state.date"
            :disabled="state.disabled">
          </datepicker>
        </div>
        <p v-if="state.date">{{ state.date.toDateString() }}</p>
        <br>
        <br>
        <div class="form-field">
          <label>Select Time: </label>
          <br>
          <p style="visibility: hidden">{{ computedTimeblocks }}</p>
          <select v-model="selectedTimeblockId">
            <option disabled value="">Please Select One</option>
            <option v-for="timeblock in timeblocks" :value="timeblock.timeblock_id">
            {{ timeblock.start_time }}
            </option>
          </select>
          {{ selectedTimeblockId }}
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
      clinicians: [],
      selectedClinicianId: null,
      patients: [],
      selectedPatientId: null,
      timeblocks: [],
      selectedTimeblockId: null,
      allDays: [0, 1, 2, 3, 4, 5, 6],
      state: {
        date: null,
        disabled: {
          days: []
        }
      }
    }
  },

  mounted () {
    axios.get('/api/users/clinicians').then(response => {
      this.clinicians = response.data
    })
    axios.get('/api/users/patients').then(response => {
      this.patients = response.data
    })
  },

  computed: {
    disabledDays: function () {
      if (this.selectedClinicianId !== null) {
        axios.get('/api/users/' + this.selectedClinicianId + '/availability').then(response => {
          var data = response.data
          var activeAvailabilities = data.filter((obj) => {
            return (obj.is_active === true)
          })
          var activeDays = Array.from(new Set(activeAvailabilities.map((obj) => {
            return obj.day_of_week
          })))
          this.state.disabled.days = this.allDays.filter(x => activeDays.indexOf(x) === -1)
        })
      }
    },
    computedTimeblocks: function () {
      if (this.selectedClinicianId !== null && this.state.date !== null) {
        axios.get('/api/users/' + this.selectedClinicianId + '/availability').then(response => {
          var data = response.data
          var availableTimes = data.filter((obj) => {
            return (obj.is_active === true && obj.day_of_week === this.state.date.getDay())
          })
          this.timeblocks = availableTimes
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

.create-appointment-view
  padding-top 0

</style>
