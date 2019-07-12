<template>
  <div class="bot-modules">
    <b-breadcrumb :items="breadcrumbs" />
    <b-button href="/#/newmodule/" variant="outline-primary">Create A Module</b-button>
    <div class="row">
      <div class="col-12 col-md-3 my-2" v-for="module in bot.modules" :key="module.id">
        <router-link class="card" :to="{name: 'module_details', params: {id: module.id}}">
          <div class="card-body">
            <h5>{{module.name}}</h5>
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-3 my-2" v-for="modul in modules" :key="modul.id">
          <router-link class="card" :to="{name: 'module_details', params: {id: modul.id}}">
          <div class="card-body">
            <h5>{{modul.name}}</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "./../../store";

export default {
  props: {
    bot: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      breadcrumbs: [{ text: "Modules", active: true }],
      modules: []
    };
  },

  created() { 
    this.getModule();
  },

  methods: {
    getModule() {
      let self = this;
      let config = {headers: {token: store.getters.getAccessToken}};
      axios
        .get("modules/", config)
        .then(resp => {
          this.modules = resp.data
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }
};
</script>

<style>
</style>
