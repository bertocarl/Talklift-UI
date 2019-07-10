<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <form @submit="login" action="javascript:;">
            <h1>Sign in</h1>
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
              <button type="submit" class="btn btn-primary">Login</button>
              <div class="my-2">
                Don't have an account?
                <router-link :to="{name: 'signup'}">Sign Up</router-link>
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

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login: function() {
      axios
        .post("authenticate/", this.form)
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('user-token', token)
          console.log("Success", resp.data);
        })
        .catch(err => {
          localStorage.removeItem('user-token')
          console.log("Error", err);
        });
    }
  }
};
</script>

<style scoped>
</style>