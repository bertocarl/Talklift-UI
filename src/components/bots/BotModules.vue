<template>
  <div class="bot-modules">
    <sub-nav title="Modules" :actions="nav_actions" />

    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 my-2" v-for="module in modules" :key="module.id">
            <router-link class="card box-shadow" :to="{name: 'module_details', params: {id: module.id}}">
              <div class="card-body">
                <h5>{{module.name}}</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

import SubNav from './../SubNav';

export default {
  props: {},
  components: {
    SubNav
  },
  data() {
    return {
      nav_actions: [{label: 'Create Module', href:'/#/build/new/', type: 'primary', icon: 'fa fa-plus'}],
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
    }
  }
};
</script>

<style scoped>
  .card {
    min-height: 89px;
  }
  h5 {
    font-size: 1.1em;
  }
</style>
