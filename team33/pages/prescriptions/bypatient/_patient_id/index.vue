<template>
    <section class="prescriptions-view">
        <!-- ALL PRESCRIPTIONS -->
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Prescriptions for patient</span>
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
                            :filter-key="searchQuery">
                    </grid>
                </div>
                <h5 v-if="($store.state.isAdmin || $store.state.isPharmacist) && prescriptions.length < 1">There are no prescriptions for this patient.</h5>
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
          { key: 'clinician_name', displayName: 'Prescribing Clinician' },
          { key: 'name', displayName: 'Medication' },
          { key: 'date', displayName: 'Date Prescribed' },
          { key: 'dosage', displayName: 'Dosage' },
          { key: 'pharmacist_name', displayName: 'Filled By' }
        ],
        prescriptions: []
      }
    },
    mounted () {
      if (this.$store.state.isAdmin || this.$store.state.isPharmacist) {
        axios.get('/api/prescriptions/patient/' + this.$route.params.patient_id).then(response => {
          this.prescriptions = response.data
        })
      }
    },
    head () {
      return {
        title: 'Patient Prescriptions'
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .prescriptions-view
        padding-top 0
</style>
