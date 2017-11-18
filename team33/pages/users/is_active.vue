<template>
  <section class="add-user-view">
  <div class="content">
    <div class="subsection">
    <form style="margin: 15px 15px;">
      <h1> Set Inactive Users </h1>
        <div class="form-field">
          <label>User ID</label>
          <input type="text" v-model="user_id"></input>
        </div>
        <div>
        <span style="margin-right: 5px">Set Active </span>
        <select v-model="is_active">
        <option value="true"> True </option>
        <option value="false"> False </option>
        </select>
      </div>
      <hr/>
    </form>
    <button type="button" class="button--default" @click="submitInsert">Update</button>
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
      is_active: true
    }
  },

  methods: {
    submitInsert () {
      let self = this

      axios.post('/api/users/is_active', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            user_id: self.user_id,
            is_active: self.is_active
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

</style>
