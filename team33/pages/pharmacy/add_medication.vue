<template>
    <section class="create-medication-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Add Medication</span>
                </div>
                <div class="form-field">
                    <label>Medication Name:</label>
                    <br>
                    <input type="text" v-model="medicationName">
                </div>
                <br>
                <br>
                <div class="form-field">
                    <label>Medication Inventory Count:</label>
                    <br>
                    <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="medicationInventory">
                </div>
                <br>
                <br>
                <div class="form-field">
                    <label>Medication Price Per Unit:</label>
                    <br>
                    <input type="number" v-model="medicationPrice">
                </div>
                <br>
                <br>
                <button type="button" class="button--default" @click="submitInsert">Add Medication</button>
            </div>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data () {
      return {
        nameExists: false,
        medicationName: null,
        medicationInventory: null,
        medicationPrice: null
      }
    },
    mounted () {
      axios.get('/api/medications/').then(response => {
        this.medications = response.data
      })
    },
    head () {
      return {
        title: 'Medications'
      }
    },
    methods: {
      checkNameExists (testName) {
        this.medications.filter(function (medication) {
          return medication.name === testName
        })
      },
      submitInsert () {
        axios.post('/api/medications/add', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              name: this.medicationName,
              inventory: this.medicationInventory,
              unit_price: this.medicationPrice
            }
        })
          .then((response) => {
            if (response.data.message === 'Medication Added.') {
              self.$nuxt.$router.replace({path: '/pharmacy'})
            } else {
              alert('Error adding medication. Note that medication names must be unique. Please try again.')
            }
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>

    .create-medication-view
        padding-top 0

</style>
