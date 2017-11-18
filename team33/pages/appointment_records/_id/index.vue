<template>
  <section class="appointment-record-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Appointment Record</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>First Name:</b> {{firstName}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Last Name:</b> {{lastName}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  mounted () {

  }

}
</script>

<style lang="stylus" scoped>

</style>