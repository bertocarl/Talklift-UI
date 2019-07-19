<template>
  <div class="profile-details">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-12 my-4">
          <div class="cards">
            <div class="card-body" v-for="profile in get_profile" :key="profile.id">
              <div>{{profile.first_name}}</div>
              <div>{{profile.last_name}}</div>
              <div>{{profile.email}}</div>
            </div>
          </div>
        </div>

        <div class="col-md-10 col-12 my-4">
          <div class="cards">
            <div class="card-body">
              <div class="card-title">
                <h3>Profile</h3>
              </div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" action="javascript:;">
                <b-form-group label="First Name:">
                  <b-form-input
                    v-model="form.firstname"
                    type="text"
                    required
                    placeholder="First Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Last Name:">
                  <b-form-input
                    v-model="form.last_name"
                    type="text"
                    required
                    placeholder="Last name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Email:">
                  <b-form-input
                    v-model="form.email"
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
export default {
  data() {
    return {
      form: {
        last_name: "",
        email: "",
        first_name: ""
      },
      show: true,
      get_profile: []
    };
  },

  created() {
    this.get_profile();
  },

  methods: {
    createProfile() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .post("profile/", this.form)
        .then(resp => {
          loader.hide();
          console.log("Profile created");
        })

        .catch(err => {
          console.log("Error", err);
          loader.hide();
        });
    },

    getProfile() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .post("/profile/")
        .next(resp => {
          self.get_profile = resp.data;
          loader.hide();
          console.log("Profile gotten");
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




