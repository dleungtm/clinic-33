<template>
  <div>
    <navbar />
      <div class="container view">
        <div class="row-fluid">
          <h1>Oops! An unexpected error has occurred.</h1>
          <h5>You are likely not authenticated properly, please re-login to the app.</h5>
          <br>
          <a class="button--default" href="/">Login</a>
        </div>
      </div>
    <footer-component />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    FooterComponent
  },
  props: ['error']
}
</script>

<style scoped>
</style>
