<template>
  <div class="settings">
    <div class="container">
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
              <input
                name="description"
                class="form-control"
                v-model="form.description"
                type="text"
                placeholder="Bot Description"
              />
            </div>

            <div class="form-group">
              <label class="settings">Category</label>
              <input
                name="category"
                class="form-control"
                v-model="form.category"
                type="text"
                placeholder="Category"
              />
            </div>

            <div class="form-group">
              <label class="settings">Published</label>
              <input
                name="published"
                class="form-control"
                v-model="form.published"
                type="text"
                placeholder="Published"
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

          <div class="dropdown-divider"></div>

      </div>
      <br>
      <br>
      <br>

      <!-- teams -->
      <div class="row">
        
          <div class="col-md-3">
               <router-link :to="{name: 'teams'}" class="btn btn-primary btn-block">
                <i class="fa fa-plus">New Teams</i>
        </router-link>
           
        </div>

        <div class="col-md-6">
          <div class="float-right">
            <h1>Hello </h1>
            {{get_teams}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Teams from './../settings/Teams';

export default {

  components: {
    Teams
  },

  data() {
    return {
      form: {
        bot_name: "",
        description: "",
        category: "",
        published: ""
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
      axios.get("teams/")
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