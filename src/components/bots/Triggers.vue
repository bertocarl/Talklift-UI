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
                required
                v-model="form.text"
                placeholder="Enter a trigger"
              />
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary">Create A Trigger</button>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-md-3 my-2" v-for="trigger in triggers_l" :key="trigger.id">
          <router-link class="card" :to="{name: 'trigger_details', params: {id: trigger.id}}">
            <div class="card-body">
              <h5>{{trigger.text}}</h5>
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
  props: {
    triggers: {
      required: true,
      type: Array
    }
  },
  computed: {
    module_id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      form: {
        text: ""
      },
      triggers_l: []
    };
  },

  methods: {
    submitForm: function() {
      let self = this;
      let payload = this.form;
      payload["module_id"] = this.module_id;
      axios
        .post("triggers/", payload)
        .then(resp => {
          self.$router.push({ name: "triggers_list" });
        })
        .catch(err => {
          console.log("Error", err);
        });
    },

    getTriggers: function() {
      let self = this;
      axios
        .get("triggers/")
        .then(resp => {
          this.triggers = resp.data;
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }
};
</script>

<style scoped>
</style>
