<template>
  <section class="appointment-record-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Appointment Record</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Patient:</b> {{patientName}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Attending Clinician:</b> {{clinicianName}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Date:</b> {{date}}</span>
        </div>
        <div style="margin: 25px;">
          <span style="vertical-align: middle;"><b>Time:</b> {{start_time}}</span>
        </div>
        <div style="margin: 25px;">
          <textarea v-bind:disabled="!$store.state.isClinician && !$store.state.isAdmin" v-model="notes" rows="4" cols="50">{{notes}}</textarea>
        </div>
        <button v-if="$store.state.isClinician || $store.state.isAdmin" type="button" class="button--default" @click="saveNotes">Save Notes</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      patientName: '',
      clinicianName: '',
      date: null,
      start_time: null,
      notes: ''
    }
  },
  mounted () {
    axios.get('/api/appointment_records/id/' + this.$route.params.id).then(response => {
      this.patientName = response.data.patient_name
      this.clinicianName = response.data.clinician_name
      this.date = response.data.date
      this.start_time = response.data.start_time
      this.notes = response.data.notes
    })
  },
  methods: {
    saveNotes () {
      axios.post('/api/appointment_records/update', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            appointment_id: this.$route.params.id,
            notes: this.notes
          }
      })
        .then((response) => {
          if (response.data.message === 'Appointment Record Updated.') {
            alert('Appointment Record successfully updated.')
          } else {
            alert('Error updating appointment record. Please try again later.')
          }
        })
    }
  },
  head () {
    return {
      title: 'Appointment Record'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>