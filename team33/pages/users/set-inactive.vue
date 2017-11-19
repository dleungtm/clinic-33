<template>
  <section class="set-inactive-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Toggle User Status</span>
        </div>
        <br>
        <form>
          <div class="form-field">
            <label>User ID:</label>
            <input type="text" v-model="user_id"></input>
          </div>
          <br>
          <div class="form-field">
            <div style="display:inline-block; float: left; min-width: 50px; margin-right: 1em; padding-top 3px; line-height: 34px;">Is Active:</div>
              <select style="" v-model="is_active">
                <option value="true"> True </option>
                <option value="false"> False </option>
              </select>
          </div>
        </form>
        <br>
        <br>
        <button type="button" class="button--default" @click="toggleStatus">Save</button>        
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
    toggleStatus () {
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
