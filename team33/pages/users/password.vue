<template>
    <div class="container">
        <div class="span12">
            <h2>Change your password</h2>
            <br>
            <form @submit.prevent="changePassword">
                <p v-if="statusMessage">{{ statusMessage }}</p>
                <div class="form-field">
                    <label for="oldPassword">Old Password:</label>
                    <input type="password" v-model="formOldPassword" name="oldPassword" />
                </div>
                <br>
                <div class="form-field">
                    <label for="newPassword">New Password:</label>
                    <input type="password" v-model="formNewPassword" name="newPassword" />
                </div>
                <br>
                <br>
                <div class="form-field">
                    <button type="submit" class="button--default">Submit</button>
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
      formOldPassword: '',
      formNewPassword: ''
    }
  },
  methods: {
    changePassword () {
      axios.post('/api/users/get_by_id_and_pass', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            userId: this.$store.state.authUser.user_id,
            password: this.formOldPassword
          }
      })
        .then((res) => {
          axios.post('/api/users/update_password', {
            headers:
            {
              'Content-Type': 'application/json'
            },
            data:
            {
              userId: this.$store.state.authUser.user_id,
              newPassword: this.formNewPassword
            }
          })
            .then((res) => {
              this.statusMessage = 'Your password was successfully changed.'
              this.formOldPassword = ''
              this.formNewPassword = ''
            })
            .catch((e) => {
              this.statusMessage = e
            })
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