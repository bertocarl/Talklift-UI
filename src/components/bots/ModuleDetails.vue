<template>
  <div class="module-details">
    <sub-nav :title="'Manage '+module.name" />
    <div class="my-4">
      <div class="container">
        <router-link :to="{name: 'triggers_list', params: {id: module_id}}">Triggers</router-link>
        <br />
        <router-link :to="{name: 'responses_list', params: {id: module_id}}">Responses</router-link>

        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>


import SubNav from './../SubNav';

export default {
  components: {
    SubNav
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
