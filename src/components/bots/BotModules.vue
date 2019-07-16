<template>
  <div class="bot-modules">
    <b-breadcrumb :items="breadcrumbs" />
    <b-button href="/#/newmodule/" variant="outline-primary">Create A Module</b-button>

    <div class="row">
      <div class="col-12 col-md-3 my-2" v-for="module in modules" :key="module.id">
        <router-link class="card" :to="{name: 'module_details', params: {id: module.id}}">
          <div class="card-body">
            <h5>{{module.name}}</h5>

            <button class="btn btn-primary btn-xs" v-on:click="getModules(modules)">Edit Module</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {},
  data() {
    return {
      breadcrumbs: [{ text: "Modules", active: true }],
      modules: []
    };
  },

  created() {
    this.getModules();
  },

  methods: {
    getModules() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .get("modules/")
        .then(resp => {
          this.modules = resp.data;
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
        });
    },

    editModules() {
      let self = this;
      let loader = self.$loading.show()
      axios
        .put("modules/" + this.modules.id + "/", this.modules)
        .then(resp => {
          self.$router.push({ name: "index" });
          loader.hide()
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide()
        });
    }
  }
};
</script>

<style>
</style>
