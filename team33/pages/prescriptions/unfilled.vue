<template>
    <section class="unfilled-prescriptions-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Unfilled Prescriptions</span>
                </div>
                <div v-if="prescriptions.length > 0">
                    <form id="search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input name="query" v-model="searchQuery" >
                    </form>
                    <br>
                    <grid
                      :data="prescriptions"
                      :columns="gridColumns"
                      :filter-key="searchQuery"
                      :hasAction1="fillPrescriptionEnabled"
                      :buttonAction1="fillPrescription"
                      :buttonLabel1="buttonLabel1">
                    </grid>
                </div>
                <h5 v-if="prescriptions.length < 1">No unfilled prescriptions.</h5>
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
        gridColumns: [
          { key: 'patient_name', displayName: 'Patient' },
          { key: 'clinician_name', displayName: 'Prescribing Clinician' },
          { key: 'name', displayName: 'Medication' },
          { key: 'date', displayName: 'Date Prescribed' },
          { key: 'dosage', displayName: 'Dosage' }
        ],
        prescriptions: [],
        buttonLabel1: 'Fill Prescription'
      }
    },
    mounted () {
      axios.get('/api/prescriptions/unfilled').then(response => {
        this.prescriptions = response.data
      })
    },
    methods: {
      fillPrescriptionEnabled: function () {
        return true
      },
      fillPrescription: function (entry) {
        axios.post('/api/prescriptions/fill', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              pharmacist_id: this.$store.state.authUser.user_id,
              patient_id: entry.patient_id,
              clinician_id: entry.clinician_id,
              medication_id: entry.medication_id,
              date_prescribed: entry.date_prescribed.split('T')[0],
              dosage: entry.dosage
            }
        }).then(response => {
          if (response.data.message === 'Prescription Filled.') {
            axios.get('/api/prescriptions/unfilled').then(response => {
              this.prescriptions = response.data
              alert('The selected prescription was successfully filled.')
            })
          } else {
            alert('There is insufficient inventory of the requested medication. Please restock before reattempting to fill this prescription.')
          }
        })
      }
    },
    head () {
      return {
        title: 'Unfilled Prescriptions'
      }
    }
  }
</script>

<style lang="stylus" scoped>

    .prescriptions-view
        padding-top 0

</style>