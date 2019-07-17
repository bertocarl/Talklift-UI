<template>
  <b-modal v-model="show_modal" hide-footer title="Manage response" @hidden="onModalClose">
    <form action="javascript:;">
          <div class="action">
              <response-form :form.sync="response" />
              <button type="submit" class="btn btn-light" @click="onModalClose">Cancel</button>
              <button type="submit" class="btn btn-danger" @click="onDelete">Delete</button>
              <button type="submit" class="btn btn-primary" @click="onSubmit">Update</button>
          </div>
      </form>
  </b-modal>
</template>

<script>
import axios from "axios";

import ResponseForm from './ResponseForm'

export default {
  components: {
    ResponseForm,
  },
  data: function() {
    return {
      show_modal: true,
      response: {
        context: {}
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
          self.$notify({
            group: "default",
            type: "error",
            title: err,
            text: err.response.data
          });
        });
    },
    onSubmit() {
      let self = this;
      let loader = self.$loading.show();
      
      axios.put("responses/"+this.response_id+'/', this.response)
        .then(resp => {
          self.response = resp.data;
          loader.hide();
          self.$notify({
            group: "default",
            type: "success",
            title: 'Success',
            text: 'Changes saved.'
          });
        })
        .catch(err => {
          loader.hide();
          console.log("Error", err);
          self.$notify({
            group: "default",
            type: "error",
            title: err,
            text: err.response.data
          });
        });
    },
    onDelete() {
      if (confirm("Are you sure you would like to remove this response? Action cannot be undone!")) {
        let self = this;
        let loader = self.$loading.show();
        axios.delete("responses/"+this.response_id+'/', {})
          .then(resp => {
            loader.hide();
            self.$notify({
              group: "default",
              type: "warn",
              title: 'Deleted',
              text: 'Response removed'
            });
          })
          .catch(err => {
            loader.hide();
            console.log("Error", err);
            self.$notify({
              group: "default",
              type: "error",
              title: err,
              text: err.response.data
            });
          });
      }
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
