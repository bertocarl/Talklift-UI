<template>
  <b-modal v-model="show_modal" hide-footer title="Manage response" @hidden="onModalClose">
    <div class="container">
      <div class="row">
       response >>> {{response}}
      </div>
    </div>
  </b-modal>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      show_modal: true,
      response: {
        context: {
          text: '',
          quick_replies: ''
        }
      }
    }
  },
  computed: {
    response_id() {
      return this.$route.params.response_id
    },
    module_id() {
      return this.$route.params.id
    }
  },
  created() {
    this.getResponse();
  },
  methods: {
    getResponse() {
      let self = this;
      axios
        .get("responses/"+this.response_id+'/', {})
        .then(resp => {
          self.response = resp.data;
        })
        .catch(err => {
          console.log("Error", err);
        });
    },
    onModalClose() {
      this.show_modal = false;
      this.$router.push({name: 'module_details', params: {id: this.module_id}});
    }
  }
};
</script>

<style>
</style>
