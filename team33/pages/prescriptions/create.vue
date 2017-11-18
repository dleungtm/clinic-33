<template>
  <section class="create-prescription-view">
      <div class="content">
        <div class="subsection">
          <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Create Prescription</span>
          </div>
          <form id='prescriptionForm' style="margin: 25px 10px;">
            <label>Select Patient:</label>
            <br>
            <select v-model="selectedPatientID">
              <option disabled value="">Select A Patient</option>
              <option v-for="patient in patients" :value="patient.user_id">
                  {{ patient.name }}
              </option>
            </select>
            <br>
            <br>
            <label>Select Medication:</label>
            <br>
            <select v-model="selectedMedicationID">
              <option disabled value="">Medication</option>
              <option v-for="medication in medications" :value="medication.id">
                  {{ medication.name }}
              </option>
            </select>
            <br>
            <br>
            <div class="form-field">
              <label>Date Prescribed:</label>
              <br>
              <datepicker 
                v-model="state.date_prescribed"
                :disabled="state.disabled"
                :disabled-picker="true">
              </datepicker>
            </div>
            <br>
            <br>
            <div class="form-field">
              <label>Dosage (Units of Medication Being Prescribed):</label>
              <br>
              <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="dosage">
            </div>
            <br>
            <br>
          <button type="button" class="button--default" @click="submitInsert">Add Prescription</button>
        </form>
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
        selectedClinicianID: null,
        patients: [],
        selectedPatientID: null,
        medications: [],
        selectedMedicationID: null,
        state: {
          date_prescribed: new Date()
        },
        dosage: null,
        filledBy: null
      }
    },
    mounted () {
      axios.get('/api/users/patients').then(response => {
        this.patients = response.data
      })
      axios.get('/api/users/clinicians').then(response => {
        this.clinicians = response.data
      })
      axios.get('/api/medications').then(response => {
        this.medications = response.data
      })
    },
    head () {
      return {
        title: 'Appointments'
      }
    },
    methods: {
      submitInsert () {
        axios.post('/api/prescriptions/create', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              patient_id: this.selectedPatientID,
              clinician_id: this.selectedClinicianID,
              medication_id: this.selectedMedicationID,
              date_prescribed: this.state.date_prescribed,
              dosage: this.dosage,
              filled_by: null
            }})
          .then((res) => {
            // res.data should contain the url for redirecting... bad practice
            self.$nuxt.$router.replace({ path: res.data })
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>

    .create-appointment-view
        padding-top 0

</style>
