<template>
  <section class="create-appointment-view">

    <!-- ALL APPOINTMENTS -->
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Create Appointment</span>
          <dropdown
            :options="options"
            :selectedOption="selectedOption">
          </dropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  data () {
    return {
      options: [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 },
        { name: 'Option 4', value: 4 }
      ],
      selectedOption: { name: 'Option 1', value: 1 }
    }
  },

  head () {
    return {
      title: 'Appointments'
    }
  }
}
</script>

<style lang="stylus" scoped>

.create-appointment-view
  padding-top 0

</style>
