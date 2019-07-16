<template>
  <div class="module-details">
    <sub-nav :title="'Manage '+module.name" />
    <div class="my-4">
      <div class="container">
        <responses />
        <triggers />
      </div>
    </div>
  </div>
</template>

<script>


import SubNav from './../SubNav';
import Responses from "./Responses";
import Triggers from "./Triggers";

export default {
  components: {
    SubNav,
    Responses,
    Triggers
  },
  data() {
    return {
      module: {
        triggers: [],
        responses: []
      }
    };
  }
};
</script>

<style>

</style>
