<template>
  <div class="module">
    <sub-nav title="Create Module" :actions="[]" />
    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <form action="javascript:;" @submit="createModule">
              <div class="form-group">
                <label class="control-label">Module Name</label>
                <input
                  name="name"
                  class="form-control"
                  v-validate="'required'" 
                  v-model="form.name"
                  type="name"
                  placeholder="Enter new module name"
                />
                <div class="help-block text-danger">
                  <span>{{ errors.first('name') }}</span>
                </div>
              </div>
              <div class="actions">
                <button type="submit" class="btn btn-primary btn-block">Create Module</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import SubNav from "./../SubNav";

export default {
  components: {
    SubNav
  },
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    createModule: function() {
      let self = this;
      this.$validator.validate().then(valid => {
        if (valid) {
          let loader = self.$loading.show();
          axios.post("modules/", this.form)
            .then(resp => {
              self.$router.push({ name: "index" });
              loader.hide()
            })
            .catch(err => {
              console.log("Error", err);
              loader.hide()
            });
        }
      });
    }
  }
};
</script>

<style>
</style>
