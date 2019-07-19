<template>
  <div class="login">
    <div class="container-fluid full-height">
      <div class="row full-height">
        <div class="col-12 col-md-4 bg-light full-height valign overflow-y">
          <form @submit="doLogin" action="javascript:;">
            <div class="header text-center">
              <img src="./../assets/img/logo.png" class="logo" />
              <h1 class="my-4">Welcome Back!</h1>
            </div>
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
              <button type="submit" class="btn btn-primary btn-block">Login</button>
              <div class="my-2">
                Don't have an account?
                <router-link :to="{name: 'signup'}">Sign Up</router-link>
              </div>
            </div>
          </form>
        </div>
        <div class="cover login-cover col-md-8 align-text-bottom" v-responsive.lg.xl>
          <!-- Display cover image -->
          <div class="row">
            <div class="col-8">
              <h2>Customer engagement simplified</h2>
              <p>Easily manage conversations across multiple platforms. Boostrap a SMS/USSD campaign in minutes. Publish a chatbot on Telegram, Messenger, and many more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Promise } from 'q';

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin: function() {
      let self = this;
      this.$validator.validate().then(valid => {
        if (valid) {
          let loader = self.$loading.show();
          const performLogin  = function(form) {
            return new Promise(function(resolve, reject) {
              axios
                .post("authenticate/", form)
                .then(resp => {          
                  loader.hide()
                  resolve(resp)
                })
                .catch(err => {
                  loader.hide()
                  self.$notify({
                      group: 'default',
                      type: 'error',
                      title: err,
                      text: 'Wrong email or password'
                  });
                  reject(err)
                });
            })
          }

          const setToken = function() {
            return new Promise(function(resolve, reject){
              performLogin(self.form).then(function(resp){
                self.$store.commit('setAccessToken', resp.data.token);
                resolve()
              }).catch(function(err){
                console.log('Set token error', err)
                reject(err)
              }) 
            })
          }

          // Redirect after setting token
          setToken().then(function(){
            self.$router.push({name:'index'});
          }).catch(function(err){
            console.log('redirect erorr', err)
          })    
        }
      })
    }
  }
}
</script>

<style src="./../assets/css/auth.css"></style>
<style scoped>
.login {
  min-height: 100vh;
}

</style>