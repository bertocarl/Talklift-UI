<template>
  <div class="profile-details">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-12 my-4">
          <div class="cards">
            <b-card
              header="Profile"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="dark"
              footer="()"
              footer-tag="footer"
              footer-bg-variant="success"
              footer-border-variant="white"
              title="Avatar"
              style="max-width: 20rem;"
            >
              <b-card-text>User Profile</b-card-text>
            </b-card>
          </div>
        </div>

        <div class="col-md-10 col-12 my-4">
          <div class="cards">
            <div class="card-body">
              <div class="card-title">
                <h3>Profile</h3>
              </div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" action="javascript:;">
                <b-form-group label="User Name:">
                  <b-form-input
                    v-model="form.username"
                    type="text"
                    required
                    placeholder="User Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Last Name:">
                  <b-form-input
                    v-model="form.lastname"
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
        lastname: "",
        email: "",
        username: ""
      },
      show: true
    };
  },
  methods: {}
};
</script>

<style>
</style>




