<template>
  <div class="header">
    <div class="inner">
      <nav class="navbar__menu">
        <router-link to="/" exact>
         <span class="home">Dashboard</span>
        </router-link>
        <span v-if="$store.state.authUser">
          <nuxt-link v-if="$store.state.isAdmin" to="/users">Users</nuxt-link>
          <nuxt-link v-if="!$store.state.isAdmin && !$store.state.isReceptionist" to="/appointments">My Appointments</nuxt-link>
          <nuxt-link v-if="$store.state.isAdmin || $store.state.isReceptionist" to="/appointments">Appointments</nuxt-link>
          <nuxt-link v-if="!$store.state.isAdmin && !$store.state.isReceptionist" to="/prescriptions">My Prescriptions</nuxt-link>
          <nuxt-link v-if="$store.state.isAdmin || $store.state.isPharmacist" to="/prescriptions">Prescriptions</nuxt-link>
          <nuxt-link v-if="$store.state.isAdmin || $store.state.isPharmacist" to="/pharmacy">Pharmacy</nuxt-link>
          <nuxt-link v-if="$store.state.isPatient" to="/personal_health_info">Your Record</nuxt-link>
          <nuxt-link v-if="$store.state.isAdmin || $store.state.isReceptionist" to="/user_health_info">Medical Records</nuxt-link>
          <nuxt-link v-if="$store.state.isClinician" to="/users/availabilities">My Availability</nuxt-link>
          <nuxt-link v-if="$store.state.authUser" style="float: right" to="/" @click.native="logout">Log Out</nuxt-link>
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  background-color #2d3e50
  position fixed
  z-index 999
  height 8vh
  top 0
  left 0
  right 0
  .inner
    max-width 1000px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 400
      letter-spacing .075em
      margin-right 1.8em
      text-decoration none
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400
      &:nth-child(6)
        margin-right 0
    .github
      font-size .9em
      margin 0
      float right

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
      a
        margin-right 1em
</style>
