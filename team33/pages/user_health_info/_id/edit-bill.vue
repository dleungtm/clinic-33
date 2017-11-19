<template>
    <div class="container">
        <div class="span12">
            <h2>Edit Bill Amount</h2>
            <br>
            <form @submit.prevent="editAmount">
                <p v-if="statusMessage">{{ statusMessage }}</p>
                <div class="form-field">
                    <label for="newAmount">New Amount:</label>
                    <input type="number" v-model="formNewAmount" name="newAmount" />
                </div>
                <br>
                <br>
                <div class="form-field">
                    <button type="submit" class="button--default">Submit</button>
                    <nuxt-link class="button--default" style="margin-left:10px;" :to="{ path:'/user_health_info/' + $route.params.id }">Back</nuxt-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      statusMessage: null,
      formNewAmount: ''
    }
  },
  methods: {
    editAmount () {
      axios.post('/api/billings/update_amount', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            patient_id: this.$route.params.id,
            appointment_id: this.$route.query.appointment_id,
            new_bill_amount: this.formNewAmount
          }
      })
        .then((res) => {
          this.statusMessage = 'Bill amount was successfully changed.'
          this.formNewAmount = ''
        })
        .catch((e) => {
          this.statusMessage = e.response.data.err
        })
    }
  }
}
</script>

<style>
label 
{
    display:inline-block;
    width:125px;
}
</style>