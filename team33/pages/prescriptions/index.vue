<template>
  <section class="prescriptions-view">
    <!-- ALL PRESCRIPTIONS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span v-if="$store.state.isAdmin || $store.state.isPharmacist" class="subsection-title" style="vertical-align: middle;">Prescriptions</span>
          <span v-if="!$store.state.isAdmin && !$store.state.isPharmacist" class="subsection-title" style="vertical-align: middle;">My Prescriptions</span>
          <nuxt-link class="button--default" to="/prescriptions/create">Create Prescription</nuxt-link>
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
        <h5 v-if="($store.state.isAdmin || $store.state.isPharmacist) && prescriptions.length < 1">There are no prescriptions</h5>
        <h5 v-if="(!$store.state.isAdmin && !$store.state.isPharmacist) && prescriptions.length < 1">You do not have any appointments.</h5>
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
          { key: 'medication_name', displayName: 'Medication' },
          { key: 'date_prescribed', displayName: 'Date Prescribed' },
          { key: 'dosage', displayName: 'Dosage' },
          { key: 'filled_by_name', displayName: 'Filled By' }
        ],
        prescriptions: []
      }
    },

    mounted () {
      if (this.$store.state.isAdmin || this.$store.state.isPharmacist) {
        axios.get('/api/prescriptions/').then(response => {
          this.prescriptions = response.data
        })
      } else {
        axios.get('/api/prescriptions/user/' + this.$store.state.authUser.user_id).then(response => {
          this.prescriptions = response.data
        })
      }
    },

    head () {
      return {
        title: 'Prescriptions'
      }
    }
  }
</script>

<style lang="stylus" scoped>

.prescriptions-view
  padding-top 0

</style>
