<template>



  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <form @submit="signup" action="javascript:;">
            <h1>Register</h1>
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
              <button type="submit" class="btn btn-primary">Sign Up</button>
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
      axios
        .post("register/", this.form)
        .then(function(result) {
          console.log("Success", result.data);
        })
        .catch(function(err) {
          console.log("Error", err);
        });
    }
  }
};


</script>

<style scoped>

</style>
