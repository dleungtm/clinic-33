<template>
  <section class="add-user-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Create New User</span>
        </div>
        <form>
          <h5>User Information</h5>
          <div class="form-field">
            <label>First Name:</label>
            <input type="text" v-model="first_name"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Last Name:</label>
            <input type="text" v-model="last_name"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Username:</label>
            <input type="text" :value="username" v-model="username"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Password:</label>
            <input type="password" v-model="password"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Phone Number:</label>
            <input type="text" v-model="phone_number"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Address:</label>
            <input type="text" v-model="address"></input>
          </div>
          <br>
          <br>
          <h5>User Health Information</h5>
          <div class="form-field">
            <div style="display:inline-block; float: left; min-width: 200px; margin-right: 1em; padding-top 3px">Date of Birth:</div>
            <datepicker style="display: inline-block;" v-model="dob"
              :open-date="default_date">
            </datepicker>
          </div>
          <br>
          <div class="form-field">
            <label>Personal Health Number:</label>
            <input type="text" v-model="phn"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Height (in cm):</label>
            <input type="number" min="0" v-model="height"></input>
          </div>
          <br>
          <div class="form-field">
            <label>Blood Type:</label>
            <select v-model="blood_type">
              <option disabled value="">Blood Type</option>
              <option value="O+"> O+</option>
              <option value="O-"> O-</option>
              <option value="A+"> A+</option>
              <option value="A-"> A-</option>
              <option value="B+"> B+</option>
              <option value="B-"> B-</option>
              <option value="AB+"> AB+</option>
              <option value="AB-"> AB-</option>
              </option>
            </select>
          </div>
          <br>
          <div class="form-field">
            <label>Sex:</label>
            <select v-model="sex">
              <option disabled value="">Sex</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              </option>
            </select>
          </div>
        </form>
        <br>
        <button type="button" class="button--default" @click="submitInsert">Add User</button>
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
      first_name: '',
      last_name: '',
      phone_number: '',
      address: '',
      username: '',
      password: '',
      is_active: true,
      dob: '',
      phn: '',
      height: '',
      blood_type: '',
      sex: '',
      default_date: new Date().setFullYear(1995)
    }
  },

  methods: {
    submitInsert () {
      let self = this

      axios.post('/api/users/add', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            first_name: self.first_name,
            last_name: self.last_name,
            phone_number: self.phone_number,
            address: self.address,
            username: self.username,
            password: self.password,
            is_active: self.is_active,
            dob: self.dob,
            phn: self.phn,
            height: self.height,
            blood_type: self.blood_type,
            sex: self.sex
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
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

.add-user-view
  padding-top 0

.form-field
  display inline-block
  margin 0 auto

  input
    float left
    font-size 14px
    padding 2px
    margin-left 1em

  label
    float left
    min-width 200px
    padding-top 3px // to make the label vertically inline with the input element

</style>
