<template>
    <div class="container">
        <div class="span12">
            <h2>Edit Patient Info</h2>
            <br>
            <form @submit.prevent="changeInfo">
                <p v-if="statusMessage">{{ statusMessage }}</p>
                <div class="form-field">
                    <label for="newFirstName">First Name:</label>
                    <input type="text" v-model="formNewFirstName" name="newFirstName" />
                </div>
                <br>
                <div class="form-field">
                    <label for="newLastName">Last Name:</label>
                    <input type="text" v-model="formNewLastName" name="newLastName" />
                </div>
                <br>
                <div class="form-field">
                    <label for="newHeight">Height:</label>
                    <input type="number" v-model="formNewHeight" name="newHeight" />
                </div>
                <br>
                <br>
                <div class="form-field">
                    <button type="submit" class="button--default">Save</button>
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
      formNewFirstName: this.$route.query.first_name,
      formNewLastName: this.$route.query.last_name,
      formNewHeight: this.$route.query.height
    }
  },
  methods: {
    changeInfo () {
      if (this.$store.state.isClinician) {
        axios.post('/api/users/update_first_and_last_names', {
          headers:
          {
            'Content-Type': 'application/json'
          },
          data:
          {
            user_id: this.$route.params.id,
            first_name: this.formNewFirstName,
            last_name: this.formNewLastName
          }
        })
          .then((res) => {
            axios.post('/api/userhealthinfo/update', {
              headers:
              {
                'Content-Type': 'application/json'
              },
              data:
              {
                user_id: this.$route.params.id,
                height: this.formNewHeight
              }
            })
              .then((res) => {
                this.statusMessage = 'Patient record was successfully updated.'
              })
              .catch((e) => {
                this.statusMessage = e.response.data.err
              })
          })
          .catch((e) => {
            this.statusMessage = e.response.data.err
          })
      } else {
        this.statusMessage = 'Insufficient permissions to update.'
      }
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