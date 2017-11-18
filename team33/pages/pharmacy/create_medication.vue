<!-- TODO: Needs a lookup to make sure we don't insert duplicate medication names -->
<template>
    <section class="create-medication-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Create Medication</span>
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
                <button type="button" class="button--default" @click="submitInsert">Add Medication</button>
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
        medicationName: null,
        medicationInventory: null,
        medicationPrice: '',
        money: {
          decimal: '.',
          thousands: ',',
          prefix: '',
          suffix: '',
          precision: 2,
          masked: false /* doesn't work with directive */
        }
      }
    },
    mounted () {
      axios.get('/api/medication/add').then(response => {
        this.medications = response.data
      })
    },
    head () {
      return {
        title: 'Medications'
      }
    },
    methods: {
      submitInsert () {
        axios.post('/api/medication/add', {
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
            }
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>

    .create-appointment-view
        padding-top 0

</style>
