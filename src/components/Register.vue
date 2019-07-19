<template>
  <div class="register">
    <div class="container-fluid full-height">
      <div class="row full-height">
        <div class="col-12 col-md-4 full-height valign">
          <form @submit="signup" action="javascript:;">
            <h1 class="text-center py-4">Sign Up</h1>
            <div class="form-group">
              <label class="control-label">Email</label>
              <input
                name="email"
                class="form-control"
                v-validate="'required|email'"
                v-model="form.username"
                type="email"
                placeholder="Email address"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('email') }}</span>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Password</label>
              <input
                name="password"
                class="form-control"
                v-validate="'required'"
                v-model="form.password"
                type="password"
                placeholder="Password"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('password') }}</span>
              </div>
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary btn-block">Get Started</button>
              <div class="my-2">
                Already have an account?
                <router-link :to="{name: 'login'}">Log In</router-link>
              </div>
            </div>
          </form>
        </div>
        <div class="cover signup-cover col-md-8 align-text-bottom">
          <div class="row">
            <div class="col-8">
              <h2>Start something new by joining 500+ businesses like yours</h2>
              <p>Conversation management can be complicated. Simplify it with TalkLift AI.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import store from "./../store";

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
      this.$validator.validate().then(valid => {
        if (valid) {
          let loader = self.$loading.show();
          axios
            .post("register/", this.form)
            .then(function(resp) {
              store.commit("setAccessToken", resp.data.token);
              self.$router.push({ name: "update_business" });
              loader.hide();
            })
            .catch(function(err) {
              loader.hide();
              console.log("Error", err);
            });
        }
      })
    }
  }
};
</script>

<style src="./../assets/css/auth.css"></style>
<style scoped>
.register {
  min-height: 100vh;
}
</style>
