<template>
  <div class="responses">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-3">
          <form @submit="submitForm" action="javascript:;">
            <div class="form-group">
              <label class="control-label">Text Content</label>
              <input
                name="text"
                class="form-control"
                v-validate="'required|text'"
                type="text"
                v-model="form.content.text"
                placeholder="Enter text content"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('text') }}</span>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Quick Replies Content</label>
              <input
                name="quick replies"
                class="form-control"
                v-validate="'required|text'"
                type="text"
                v-model="form.content.quick_replies"
                placeholder="Enter a quick reply"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('quick_replies') }}</span>
              </div>
            </div>

            <div class="action">
              <button type="submit" class="btn btn-primary">Create Response</button>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-md-3" v-for="response in responses" :key="response.id">
          <router-link :to="{name: 'edit_response', params: {response_id: response.id, id: module_id} }">
            <div class="card">
              <div class="card-body">
                <h4>{{response.content.text}}</h4>
                <h6>{{response.content.quick_replies}}</h6>
              </div>
            </div>
          </router-link>
        </div>
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
      responses: [],
      form: {
        content: {
          text: "",
          quick_replies: ""
        }
      }
    };
  },

  created() {
    this.getResponses();
  },

  methods: {
    submitForm: function() {
      let self = this;
      let payload = this.form;
      let loader = self.$loading.show();
      payload["module_id"] = this.module_id;
      axios
        .post("responses/", payload)
        .then(resp => {
          self.$router.push({ name: "responses_list" });
          loader.hide();
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

    getResponses: function() {
      let self = this;
      axios
        .get("responses/", {params: {module_id: this.module_id}})
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
