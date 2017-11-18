<template>
  <div class="container">
    <div class="row-fluid">
      <div class="span12">
        <div v-if="!$store.state.authUser">
          <h1>Welcome!</h1>
          <h5>Please login to continue.</h5>
        </div>
        <h1 v-if="$store.state.authUser"> Hello, {{ $store.state.authUser.username }}!</h1>
        <br>
      </div>
      <div class="span12">
        <form v-if="!$store.state.authUser" @submit.prevent="login">
          <p class="error" v-if="formError">{{ formError }}</p>
          <div class="form-field">
            <label for="username">Username:</label>
            <input type="text" v-model="formUsername" style="margin-left: 1em;" name="username" />
          </div>
          <br>
          <div class="form-field">
            <label for="password">Password:</label>
            <input type="password" v-model="formPassword" style="margin-left: 1em;" name="password" />
          </div>
          <br>
          <div class="form-field">
            <button type="submit" class="button--default">Login</button>
          </div>
        </form>
        <div v-else>
          <h5>This account is associated with the following roles:</h5>
          <ul>
            <li v-if="$store.state.isAdmin">Administrator</li>
            <li v-if="$store.state.isClinician">Clinician</li>
            <li v-if="$store.state.isReceptionist">Receptionist</li>
            <li v-if="$store.state.isPharmacist">Pharmacist</li>
            <li v-if="$store.state.isPatient">Patient</li>
          </ul>
        </div>
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

</style>
