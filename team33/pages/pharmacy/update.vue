<template>
    <section class="update-medication-view">
        <div class="content">
            <form id='medicationUpdateForm' style="margin: 15px 15px;">
                <br>
                <div class="form-field">
                    <label>Dosage (Numbers only): </label>
                    <br>
                    <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="dosage">
                </div>
            </form>
            <button type="button" class="button--default" @click="submitInsert">Update Medication</button>
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
