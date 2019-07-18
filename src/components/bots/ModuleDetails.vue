<template>
  <div class="module-details">
    <sub-nav :title="title" />
    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <h5>Module Triggers</h5>
            <div>
              <i class="fa fa-info-circle"></i> What user's says to trigger the module
            </div>
            <div class="my-4">
              <triggers />
            </div>
          </div>
          
          <div class="col-12 col-md-7">
            <h5>Responses</h5>
            <div>
              <i class="fa fa-info-circle"></i> What your bot send back
            </div>
            <div class="my-4">
              <responses />
            </div>
          </div>
        </div>
      </div>

      <!-- Inject children modals -->
      <router-view />
      <!-- End modals injection -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import SubNav from './../SubNav';
import Responses from './Responses';
import Triggers from './Triggers';

export default {
  components: {
    SubNav,
    Responses,
    Triggers
  },
  computed: {
    module_id() {
      return this.$route.params.id;
    },
    title() {
      if (this.module.name) {
        return 'Manage '+this.module.name
      } 
      return 'Manage'
    }
  },
  data() {
    return {
      module: {}
    };
  },
  created() {
    this.getModule();
  },
  methods: {
    getModule() {
      let self = this;
      let loader = self.$loading.show();
      axios.get("modules/"+this.module_id+'/', {})
        .then(resp => {
          self.module = resp.data;
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          self.$notify({
            group: "default",
            type: "error",
            title: err,
            text: err.response.data
          });
          loader.hide();
        });
    }
  }
};
</script>

<style>

</style>
