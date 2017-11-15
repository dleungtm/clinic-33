<template>
  <section class="personal-health-info-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Your Record</span>
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
          <span style="vertical-align: middle;"><b>Gender:</b> {{gender}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Height:</b> {{height}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Blood Type:</b> {{bloodType}}</span>
        </div>
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Your Prescriptions</span>
        </div>
        <grid
          :data="items"
          :columns="gridColumns">
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
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      personalHealthNumber: 0,
      gender: '',
      height: 0,
      bloodType: '',
      items: [],
      gridColumns: [
        { key: 'name', displayName: 'Medication Name' },
        { key: 'dosage', displayName: 'Dosage' },
        { key: 'cln', displayName: 'Prescribed by' },
        { key: 'date_prescribed', displayName: 'Date Prescribed' }
      ]
    }
  },
  mounted () {
    axios.get('/api/users/all_info/' + this.$store.state.authUser.user_id).then(response => {
      this.firstName = response.data.first_name
      this.lastName = response.data.last_name
      this.dateOfBirth = response.data.dob
      this.personalHealthNumber = response.data.phn
      this.gender = response.data.sex
      this.height = response.data.height
      this.bloodType = response.data.blood_type
    })
    axios.get('/api/prescriptions/' + this.$store.state.authUser.user_id).then(response => {
      this.items = response.data
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>