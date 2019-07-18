<template>
  <div class="settings">
    <div class="container">
      <b-alert show variant="secondary">Bot Settings</b-alert>
      <div class="row">
        <div class="col-md-6">
          <form action="javascript:;" @submit="updateSettings">
            <div class="form-group">
              <label class="settings">Bot Name</label>
              <input
                name="bot_name"
                class="form-control"
                required
                v-model="form.bot_name"
                type="text"
                placeholder="Bot Name"
              />
            </div>

            <div class="form-group">
              <label class="settings">Description</label>
              <textarea
                name="description"
                class="form-control"
                v-model="form.description"
                type="text"
                placeholder="Bot Description"
                rows="3"
              >
              </textarea>
            </div>

            <div class="form-group">
              <label class="settings">Category</label>
              <input
                name="categories"
                class="form-control"
                v-model="form.categories"
                type="text"
                placeholder="Category"
              />
            </div>

            <div class="form-group">
              <label class="settings">Avatar</label>
              <input
                name="avatar"
                class="form-control"
                v-model="form.avatar"
                type="text"
                placeholder="avatar"
              />
            </div>

            <div class="action">
              <button type="submit" class="btn btn-primary">Update Settings</button>
            </div>
            
          </form>

        </div>

        <div class="col-md-6">
            <h1>{{form.bot_name}}</h1>
            <h1>Bot Settings </h1>
          </div>

          
      </div>
      <br>
      <br>
      <br>


      <b-alert show variant="secondary">Teams</b-alert>
      <!-- teams -->
      <div class="row">
        
          <div class="col-md-5 float-left">
               <router-link :to="{name: 'teams'}" class="btn btn-primary btn-block">
                <i class="fa fa-plus">New Teams</i>
        </router-link>
           
        </div>

        <div class="col-md-7" v-for="team in get_teams" :key="team.id">
          <div class="card">
          <div class="card-body float-right">
            <h1>{{get_teams.roles}}</h1>
            <h1>{{get_teams.user_id}}</h1>
            {{get_teams}}
          </div>
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <!-- Business Settings -->
      <b-alert show variant="secondary">Business Settings</b-alert>

      <div class="row">
        <div class="col-12 ">

              <Business />
          
      </div>
    </div>


  </div>
  </div>
</template>

<script>
import axios from "axios";
import Business from './../settings/Business'

export default {

  components: {
    Business
  },

  data() {
    return {
      form: {
        bot_name: "",
        description: "",
        categories: ""
      },
      get_teams: []
    };
  },

  created() {
    this.getTeams()
  },

  methods: {

    updateSettings: function() {
      axios.post("botsettings/", this.form)
      .then(resp => {
        console.log("Settings Updated")
      })
      .catch(err => {
        console.log("Error", err)
      })
    },

    getTeams: function() {
      let self = this;
      axios.get("/team/")
      .then(resp => {
        self.get_teams = resp.data;
        console.log("Received")
      })
      .catch(err => {
        console.log("Error", err)
      })
    }
  }
};
</script>

<style>
</style>