<template>
  <section class="assign-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
            <span class="subsection-title" style="vertical-align: middle;">Assign User Role</span>
        </div>
        <form>
          <div class="form-field">
            <label>User ID:</label>
            <input type="text" v-model="user_id"></input>
          </div>
          <br>
          <div class="form-field">
          <label>Role ID:</label>
            <!-- <input type="text" v-model="role_id"></input>
            -->
            <select v-model="role_id">
              <option disabled value="">Please Select One</option>
              <option value="1"> Administrator</option>
              <option value="2"> Clinician</option>
              <option value="3"> Receptionist</option>
              <option value="4"> Pharmacist</option>
              <option value="5"> Patient</option>
              </option>
            </select>
          </div>
        </form>
        <br>
        <nuxt-link class="button--default" to="/user/roles" @click.native="submitInsert">Update User</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      user_id: '',
      role_id: ''
    }
  },

  methods: {
    submitInsert () {
      let self = this

      axios.post('/api/user_roles/update', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            user_id: self.user_id,
            role_id: self.role_id
          }})
        .then((res) => {
          console.log(res.data)
          self.$nuxt.$router.replace({ path: res.data })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Add New User`
    }
  }
}
</script>

<style lang="stylus" scoped>

.assign-view
  padding-top 0

</style>
