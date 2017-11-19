<template>
    <section class="update-medication-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Fill Prescription</span>
                </div>
                <div class="form-field">
                    <label>Prescription Name:</label>
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
                <button type="button" class="button--default" @click="submitUpdate">Update Medication</button>
            </div>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data () {
      return {
        originalMedicationName: null,
        medicationName: null,
        medicationInventory: null,
        medicationPrice: null
      }
    },

    mounted () {
      axios.get('/api/prescriptions/' + this.$route.params.prescription_id)
        .then(response => {
          this.originalMedicationName = response.data.name
          this.medicationName = response.data.name
          this.medicationInventory = response.data.inventory
          this.medicationPrice = response.data.unit_price
        }).then(axios.get('/api/medications/'))
      axios.get()
    },
    methods: {
      submitUpdate () {
        axios.post('/api/medications/update', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              originalName: this.originalMedicationName,
              name: this.medicationName,
              inventory: this.medicationInventory,
              unit_price: this.medicationPrice
            }
        })
          .then((response) => {
            if (response.data.message === 'Medication Updated.') {
              this.$nuxt.$router.replace({path: '/pharmacy/'})
            } else {
              alert('Error updating medication. Note that medication names must be unique. Please try again.')
            }
          })
      }
    },
    head () {
      return {
        title: 'Medication Update Page'
      }
    }
  }
</script>

