<template>
  <div class="responses">
    <div class="row">
      <div class="col-12" v-for="response in responses" :key="response.id">
        <router-link
          class="card mb-2"
          :to="{name: 'edit_response', params: {response_id: response.id, id: module_id} }"
        >
          <div class="card-body">
            <div>{{response.content.text}}</div>
            <div>{{response.content.quick_replies}}</div>
          </div>
        </router-link>
      </div>

      <div class="actions my-4">
        <router-link
          :to="{name: 'new_response', params: {id: module_id}}"
          class="btn btn-primary btn-block"
        >
          <i class="fa fa-plus">New Response</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    module_id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      responses: []
    };
  },

  created() {
    this.getResponses();
  },

  methods: {
    getResponses: function() {
      let self = this;
      axios
        .get("responses/", { params: { module: this.module_id } })
        .then(resp => {
          this.responses = resp.data;
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
