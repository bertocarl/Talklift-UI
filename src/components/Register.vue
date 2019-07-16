<template>
  <div class="register valign">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <form @submit="signup" action="javascript:;">
            <h1 class="text-center py-4">Sign Up</h1>
            <div class="form-group">
              <label class="control-label">Email</label>
              <input
                name="email"
                class="form-control"
                required
                v-model="form.username"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <label class="control-label">Password</label>
              <input
                name="password"
                class="form-control"
                required
                v-model="form.password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
              <div class="my-2">
                Already have an account?
                <router-link :to="{name: 'login'}">Log In</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import store from './../store';

export default {
  name: "Signup",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signup() {
      let self = this;
      axios
        .post("register/", this.form)
        .then(function(resp) {
          store.commit('setAccessToken', resp.data.token);
          self.$router.push({name: 'update_business'});
        })
        .catch(function(err) {
          console.log("Error", err);
        });
    }
  }
};


</script>

<style scoped>
.register {
  min-height: 100vh;
}
</style>
