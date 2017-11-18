<template>
  <section class="pharmacy-view">
    <!-- ALL PRESCRIPTIONS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Medication Inventory</span>
          <!-- TODO: NOT CORRECT. I WANT TO HAVE A WAY TO GOTO UPDATE Page BY CLICKING ITEM ON TABLE -->
          <nuxt-link class="button--default" to="/medications/update">Update Medications</nuxt-link>
          <!-- TODO: implement "popup" window that comes up -->
          <nuxt-link class="button--default" @click="getUnfilled">Unfilled Medications</nuxt-link>
        </div>
        <div v-if="medications.length > 0">
          <form id="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input name="query" v-model="searchQuery" >
          </form>
          <br>
          <grid
            :data="medications"
            :columns="gridColumns"
            :filter-key="searchQuery">
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
        searchQuery: '',
        gridColumns: [
          { key: 'name', displayName: 'Name' },
          { key: 'inventory', displayName: 'Inventory Count' },
          { key: 'unit_price', displayName: 'Price per Unit ($)' }
        ],
        medications: []
      }
    },
    mounted () {
      axios.get('/api/medications/').then(response => {
        this.medications = response.data
      })
    },
    methods: {
      getUnfilled () {
        console.log('not yet implemented')
      }
    },
    head () {
      return {
        title: 'Medications'
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .prescriptions-view
    padding-top 0

</style>
