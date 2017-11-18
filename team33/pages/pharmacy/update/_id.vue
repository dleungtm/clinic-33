<!-- TODO: Needs a lookup to make sure we don't insert duplicate medication names -->
<template>
    <section class="create-medication-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Update Medication</span>
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
        title: 'Medication Update Page'
      }
    },
    methods: {
      submitInsert () {
        axios.post('/api/medications/update', {
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
              this.$nuxt.$router.replace({path: '/pharmacy/'})
            }
          })
      }
    }
  }
</script>

