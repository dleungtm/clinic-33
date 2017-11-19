<template>
    <section class="fill-prescription-view">
        <div class="content">
            <div class="subsection">
                <div style="margin: 25px 10px;">
                    <span class="subsection-title" style="vertical-align: middle;">Fill Prescription</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    data () {
      return {
        prescription: []
      }
    },
    mounted () {
      axios.get('/api/prescriptions/get', {params: this.$route.query})
        .then(response => {
          this.prescription = response.data
        })
    },
    methods: {
      submitUpdate () {
        axios.post('/api/medications/update', {
          headers:
            {
              'Content-Type': 'application/json'
            },
          data:
            {
              originalName: this.originalMedicationName,
              name: this.medicationName,
              inventory: this.medicationInventory,
              unit_price: this.medicationPrice
            }
        })
          .then((response) => {
            if (response.data.message === 'Medication Updated.') {
              this.$nuxt.$router.replace({path: '/pharmacy/'})
            } else {
              alert('Error updating medication. Note that medication names must be unique. Please try again.')
            }
          })
      }
    },
    head () {
      return {
        title: 'Fill A Prescription'
      }
    }
  }
</script>

