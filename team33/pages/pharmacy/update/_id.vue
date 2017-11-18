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
                    <input v-money="money" v-model.lazy="medicationPrice">
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
  import {VMoney} from 'v-money'

  export default {
    directives: {money: VMoney},
    data () {
      return {
        medicationName: 'WubbaLubbDub',
        medicationInventory: null,
        medicationPrice: null,
        money: {
          decimal: '.',
          thousands: ',',
          prefix: '$ ',
          suffix: '',
          precision: 2,
          masked: false /* doesn't work with directive */
        }
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

