<template>
  <div class="container">
    <div class="row-fluid">
      <div class="span12">
        <div v-if="!$store.state.authUser">
          <h5>Please login to continue.</h5>
          <br>
          <form @submit.prevent="login">
            <p class="error" v-if="formError">{{ formError }}</p>
            <div class="form-field">
              <label for="username">Username:</label>
              <input type="text" v-model="formUsername" name="username" />
            </div>
            <br>
            <div class="form-field">
              <label for="password">Password:</label>
              <input type="password" v-model="formPassword" name="password" />
            </div>
            <br>
            <br>
            <div class="form-field">
              <button type="submit" class="button--default">Login</button>
            </div>
          </form>
        </div>
        <div v-else>
          <h1>Welcome, {{ $store.state.authUser.full_name }}.</h1>
          <br>
          <h5>Here are your account details:</h5>
          <div style="margin:20px">
            <label><b>Username: </b></label>
            {{ $store.state.authUser.username }}
          </div>
          <div style="margin:20px">
            <label><b>Password: </b></label>
            <nuxt-link class="button--default" style="text-decoration: none;" to="/users/password">Change your password</nuxt-link>
          </div>
          <div style="margin:20px">
            <label><b>Role: </b></label>
            <span v-if="$store.state.isAdmin">Administrator</span>
            <span v-if="$store.state.isClinician">Clinician</span>
            <span v-if="$store.state.isReceptionist">Receptionist</span>
            <span v-if="$store.state.isPharmacist">Pharmacist</span>
            <span v-if="$store.state.isPatient">Patient</span>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        await this.$store.dispatch('getRoles')
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
label {
  margin-bottom:0px;
  display:inline-block;
  width:100px;
}
</style>
