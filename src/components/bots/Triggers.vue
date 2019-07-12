<template>
  <div class="triggers">

    {{triggers}}
    
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-3">
          <form @submit="trigger" action="javascript:;">
            <div class="form-group">
              <label class="control-label">Trigger</label>
              <input
                name="trigger_field"
                class="form-control"
                required
                v-model="form.trigger_field"
                placeholder="Enter a trigger"
              />
            </div>
            <div class="form-group">
              <label class="control-label">Module</label>
              <input
                name="module_id"
                class="form-control"
                required
                v-model="form.module_id"
                placeholder="Enter a module"
              />
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import store from './../../store'

export default {

  props: {
    triggers: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      form: {
        trigger_field: "",
        module_id: ""
      }
    };
  },

  methods: {
    trigger: function() {
      let self = this;
      let config = {headers: {token: store.getters.getAccessToken}};
      axios
        .post("triggers/", this.form, config)
        .then(resp => {
          store.commit('setAccessToken', resp.data.token);
          self.$router.push({ name: "index" });
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
