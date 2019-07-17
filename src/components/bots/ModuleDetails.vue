<template>
  <div class="module-details">
    <sub-nav :title="'Manage '+module.name" />
    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7">
            <h5>Responses</h5>
            <div class="my-4">
              <responses />
            </div>
          </div>
          <div class="col-12 col-md-5">
            <h5>Triggers</h5>
            <div class="my-4">
              <triggers />
            </div>
          </div>
        </div>
      </div>

      <!-- Inject children modals -->
      <router-view />

    </div>
  </div>
</template>

<script>


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
    }
  },
  data() {
    return {
      module: {}
    };
  }
};
</script>

<style>

</style>
