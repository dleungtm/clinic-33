<template>
  <section class="personal-health-info-view">
    <div class="content">
      <div class="subsection">
        <div v-if="isViewingSelf()">
          <div style="margin: 25px 10px 0px;">
            <span class="subsection-title" style="vertical-align: middle;">Your Record Details</span>
          </div>
        </div>
        <div v-else>
          <div style="margin: 25px 10px 0px;">
            <span class="subsection-title" style="vertical-align: middle;">{{firstName}}'s Record Details</span>
          </div>
        </div>
        <div class="row">
          <div class="column">
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
          </div>
          <div class="column">
            <div style="margin: 25px;">
              <span style="vertical-align: middle;"><b>Sex:</b> {{sex}}</span>
            </div>
            <div style="margin: 25px;">
              <span style="vertical-align: middle;"><b>Height:</b> {{height}}</span>
            </div>
            <div style="margin: 25px;">
              <span style="vertical-align: middle;"><b>Blood Type:</b> {{bloodType}}</span>
            </div>
            <div style="margin: 25px;" v-if="$store.state.isClinician">
              <nuxt-link class="button--default" :to="{ path: `/user_health_info/${this.$route.params.id}/edit-info`, query: { first_name: firstName, last_name: lastName, height: height } }">Edit Record</nuxt-link>
            </div>
          </div>
        </div>
        <div>
          <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Prescriptions</span>
          </div>
          <grid
            v-if="prescriptionItems.length > 0"
            :data="prescriptionItems"
            :columns="prescriptionGridColumns">
          </grid>
          <h5 v-if="prescriptionItems.length < 1">No prescriptions records available.</h5>
        </div>
        <div>
          <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Past Appointments</span>
          </div>
          <grid
            v-if="pastAppointmentItems.length > 0"
            :data="pastAppointmentItems"
            :columns="pastAppointmentGridColumns">
          </grid>
          <h5 v-if="pastAppointmentItems.length < 1">No appointment records available.</h5>
        </div>
        <div v-if="$store.state.isAdmin || $store.state.isReceptionist || isViewingSelf()">
          <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Billing History</span>
          </div>
          <grid
            v-if="billingItems.length > 0"
            :data="billingItems"
            :columns="billingGridColumns"
            :filter-key="searchQuery"
            :hasAction1="displayButton"
            :buttonLabel1="buttonLabel1"
            :buttonAction1="editBill"
            :hasAction2="displayButton"
            :buttonLabel2="buttonLabel2"
            :buttonAction2="updateBill">
          </grid>
          <h5 v-if="billingItems.length < 1">No billing history records available.</h5>
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
      buttonLabel1: 'Edit Amount',
      buttonLabel2: 'Set as Paid',
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
      ],
      billingItems: [],
      billingGridColumns: [
        { key: 'date_billed', displayName: 'Date Billed' },
        { key: 'amount', displayName: 'Amount Owed' },
        { key: 'date_paid', displayName: 'Date Paid' }
      ]
    }
  },
  mounted () {
    axios.get('/api/users/all_info/' + this.$route.params.id).then(response => {
      this.firstName = response.data.first_name
      this.lastName = response.data.last_name
      this.dateOfBirth = response.data.dob
      this.personalHealthNumber = response.data.phn
      this.sex = response.data.sex
      this.height = response.data.height
      this.bloodType = response.data.blood_type
    })
    axios.get('/api/prescriptions/patient/' + this.$route.params.id).then(response => {
      this.prescriptionItems = response.data
    })
    axios.get('/api/appointment_records/' + this.$route.params.id).then(response => {
      this.pastAppointmentItems = response.data
    })
    if (this.$store.state.isAdmin || this.$store.state.isReceptionist || this.isViewingSelf()) {
      axios.get('/api/billings/' + this.$route.params.id).then(response => {
        this.billingItems = response.data
      })
    }
  },
  methods: {
    isViewingSelf: function () {
      return this.$store.state.authUser.user_id === parseInt(this.$route.params.id)
    },
    displayButton: function (entry) {
      return (this.$store.state.isAdmin || this.$store.state.isReceptionist) && !entry.date_paid
    },
    editBill: function (entry) {
      this.$router.push({ path: `/user_health_info/${this.$route.params.id}/edit-bill`, query: { appointment_id: entry.appointment_id } })
    },
    updateBill: function (entry) {
      if (this.$store.state.isAdmin || this.$store.state.isReceptionist) {
        axios.post('/api/billings/update', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              patient_id: entry.patient_id,
              appointment_id: entry.appointment_id,
              date_paid: new Date()
            }
        }).then(response => {
          axios.get('/api/billings/' + this.$route.params.id).then(response => {
            this.billingItems = response.data
          })
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.column {
    float: left;
    width: 50%;
}
</style>