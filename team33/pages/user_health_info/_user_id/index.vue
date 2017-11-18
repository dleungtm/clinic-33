<template>
  <section class="personal-health-info-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">{{titleName}} Record</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>First Name:</b> {{firstName}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Last Name:</b> {{lastName}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Date of Birth:</b> {{dateOfBirth}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Personal Health Number:</b> {{personalHealthNumber}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Sex:</b> {{sex}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Height:</b> {{height}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Blood Type:</b> {{bloodType}}</span>
        </div>
        <div>
          <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Prescriptions</span>
          </div>
          <grid
            :data="prescriptionItems"
            :columns="prescriptionGridColumns">
          </grid>
        </div>
        <div>
          <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Past Appointments</span>
          </div>
          <grid
            :data="pastAppointmentItems"
            :columns="pastAppointmentGridColumns">
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
      titleName: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      personalHealthNumber: 0,
      sex: '',
      height: 0,
      bloodType: '',
      prescriptionItems: [],
      prescriptionGridColumns: [
        { key: 'date', displayName: 'Date' },
        { key: 'name', displayName: 'Medication Name' },
        { key: 'dosage', displayName: 'Dosage' },
        { key: 'clinician_name', displayName: 'Prescribed by' },
        { key: 'pharmacist_name', displayName: 'Filled by' }
      ],
      pastAppointmentItems: [],
      pastAppointmentGridColumns: [
        { key: 'date', displayName: 'Date' },
        { key: 'start_time', displayName: 'Time' },
        { key: 'clinician_name', displayName: 'Attended to by' },
        { key: 'notes', displayName: 'Notes' }
      ]
    }
  },
  mounted () {
    axios.get('/api/users/all_info/' + this.$route.params.user_id).then(response => {
      if (this.$route.params.user_id === this.$store.state.authUser.user_id) {
        this.titleName = 'Your'
      } else {
        this.titleName = response.data.first_name + "'s"
      }
      this.firstName = response.data.first_name
      this.lastName = response.data.last_name
      this.dateOfBirth = response.data.dob
      this.personalHealthNumber = response.data.phn
      this.sex = response.data.sex
      this.height = response.data.height
      this.bloodType = response.data.blood_type
    })
    axios.get('/api/prescriptions/' + this.$route.params.user_id).then(response => {
      this.prescriptionItems = response.data
    })
    axios.get('/api/appointment_records/' + this.$route.params.user_id).then(response => {
      this.pastAppointmentItems = response.data
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>