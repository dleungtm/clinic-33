<template>
  <section class="pharmacy-view">
    <!-- ALL PRESCRIPTIONS -->
    <div class="content">
      <div v-if="!$store.state.isPatient" class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Unfilled Prescriptions Summary</span>
        </div>
        <div v-if="summaryItems.length > 0">
          <form id="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input name="query" v-model="searchQuery1" >
          </form>
          <br>
          <grid
            :data="summaryItems"
            :columns="summaryGridColumns"
            :filter-key="searchQuery1">
          </grid>
        </div>
        <div v-else>
          <h5>No pending prescriptions to summarize.</h5>
        </div>
      </div>
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span v-if="$store.state.isPatient" class="subsection-title" style="vertical-align: middle;">Available Medication</span>
          <span v-if="!$store.state.isPatient" class="subsection-title" style="vertical-align: middle;">Medication Inventory</span>
        </div>
        <div v-if="medications.length > 0">
          <form id="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input name="query" v-model="searchQuery2" >
            <nuxt-link v-if="!$store.state.isPatient" class="button--default" style="margin-left:1em;" to="/pharmacy/add_medication">Add Medication</nuxt-link>
          </form>
          <br>
          <grid
            :data="medications"
            :columns="gridColumns"
            :filter-key="searchQuery2"
            :hasAction1="updateActionEnabled"
            :buttonAction1="updateAction"
            :buttonLabel1="buttonLabel1">
          </grid>
        </div>
        <h5 v-if="medications.length < 1">The pharmacy does not yet stock any medication.</h5>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data () {
      return {
        searchQuery1: '',
        summaryItems: [],
        summaryGridColumns: [
          { key: 'name', displayName: 'Name' },
          { key: 'sum', displayName: 'Units Required' }
        ],
        searchQuery2: '',
        gridColumns: [],
        medications: [],
        updateActionEnabled: null,
        updateAction: function (entry) {
          this.$router.push({ path: `/pharmacy/update/${entry.medication_id}` })
        },
        buttonLabel1: 'Update Medication'
      }
    },
    mounted () {
      if (!this.$store.state.isPatient) {
        axios.get('/api/medications').then(response => {
          this.medications = response.data
          this.gridColumns =
          [
            { key: 'name', displayName: 'Name' },
            { key: 'inventory', displayName: 'Inventory Count' },
            { key: 'unit_price', displayName: 'Price per Unit ($)' }
          ]
          this.updateActionEnabled = function () {
            return true
          }
        })
      } else {
        axios.get('/api/available_medications').then(response => {
          this.medications = response.data
          this.gridColumns =
          [
            { key: 'name', displayName: 'Name' },
            { key: 'unit_price', displayName: 'Price per Unit ($)' }
          ]
        })
      }
      axios.get('/api/medications/pending_prescriptions').then(response => {
        this.summaryItems = response.data
      })
    },
    head () {
      return {
        title: 'Pharmacy'
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .prescriptions-view
    padding-top 0

</style>
