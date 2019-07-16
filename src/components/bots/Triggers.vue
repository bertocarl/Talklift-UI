<template>
  <div class="triggers">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-3">
          <form @submit="submitForm" action="javascript:;">
            <div class="form-group">
              <label class="control-label">Trigger</label>
              <input
                name="text"
                class="form-control"
                v-validate="'required|text'"
                v-model="form.text"
                placeholder="Enter a trigger"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('text') }}</span>
              </div>
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary">Create A Trigger</button>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-md-3 my-2" v-for="trigger in triggers" :key="trigger.id">
          <router-link
           :to="{name: 'edit_trigger', params: {trigger_id: trigger.id, id: module_id }}">
          <div class="card">
            <div class="card-body">
              <h5>{{trigger.text}}</h5>
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
      triggers: [],
      form: {
        text: ""
      }
    };
  },

  created() {
    this.getTriggers();
  },

  methods: {
    submitForm: function() {
      let self = this;
      let payload = this.form;
      let loader = self.$loading.show();
      payload["module_id"] = this.module_id;
      axios
        .post("triggers/", payload)
        .then(resp => {
          self.$router.push({ name: "triggers_list" });
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
        });
    },

    getTriggers: function() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .get("triggers/")
        .then(resp => {
          this.triggers = resp.data;
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
          self.$notify({
            group: "default",
            type: "error",
            title: err,
            text: err.response.data
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
