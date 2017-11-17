<template>
  <section class="create-appointment-view">

    <!-- ALL APPOINTMENTS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Create Appointment</span>
        </div>
        <div class="form-field">
          <label>Select Clinician: </label>
          <br>
          <select v-model="selectedClinicianId">
            <option disabled value="">Please Select One</option>
            <option v-for="clinician in clinicians" :value="clinician.user_id">
            {{ clinician.name }}
            </option>
          </select>
        </div>
        <br>
        <br>
        <div class="form-field">
          <label>Select Date: </label>
          <br>
          <p style="visibility: hidden">{{ disabledDays }}</p>
          <datepicker
            :disabled="state.disabled">
          </datepicker>
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
      state: {
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
  },

  computed: {
    disabledDays: function () {
      if (this.selectedClinicianId !== null) {
        var inactiveAvailabilities
        var inactiveDays
        axios.get('/api/users/' + this.selectedClinicianId + '/availability').then(response => {
          var data = response.data
          inactiveAvailabilities = data.filter(function (obj) {
            return (obj.is_active === false)
          })
          inactiveDays = Array.from(new Set(inactiveAvailabilities.map(
            function (obj) {
              return obj.day_of_week
            })
          ))
          this.state.disabled.days = inactiveDays
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
