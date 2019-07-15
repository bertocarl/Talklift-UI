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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {

  props: {
    triggers: {
      required: true,
      type: Array
    }
  },
  computed: {
    module_id() {
      return this.$route.params.id
    }
  },
  data() {
    return {
      form: {
        text: ""
      }
    };
  },

  methods: {
    submitForm: function() {
      let self = this;
      let payload = this.form;
      payload['module_id'] = this.module_id
      axios
        .post("triggers/", payload)
        .then(resp => {
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
