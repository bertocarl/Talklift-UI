<template>
  <div class="profile-details">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 my-4">
          <div class="cards">
            <div class="card-body">
              <div class="card-title">
                <h3>Profile</h3>
              </div>
              <b-form action="javascript:;">
                <b-form-group label="First Name:">
                  <b-form-input
                    v-model="profile.first_name"
                    type="text"
                    required
                    placeholder="First Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Last Name:">
                  <b-form-input
                    v-model="profile.last_name"
                    type="text"
                    required
                    placeholder="Last name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Email:">
                  <b-form-input
                    v-model="profile.email"
                    type="email"
                    required
                    placeholder="Email address"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Update</b-button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      profile: {}
    };
  },

  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      let self = this;
      let loader = self.$loading.show();
      axios.get('profile/', {})
        .then(resp => {
          if (resp.data) {
            if (resp.data.length > 0) {
              self.profile = resp.data[0]
            }
          }
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
          self.$notify({
            group: "default",
            type: "error",
            title: err,
            text: err.response.data
          });
        });
    }
  }
};
</script>

<style>
</style>




