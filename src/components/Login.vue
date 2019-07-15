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
    login: function() {
      let self = this;
      const performLogin  = function(form) {
        return new Promise(function(resolve, reject) {
          axios
            .post("authenticate/", form)
            .then(resp => {          
              resolve(resp)
            })
            .catch(err => {
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
  }
}
</script>

<style scoped>
</style>