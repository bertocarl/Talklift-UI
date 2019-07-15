<template>
  <div class="module">
    <b-jumbotron header="Create Module"></b-jumbotron>
    <form action="javascript:;" @submit="create_module">
      <div class="row">
        <div class="col-md-9 col-12">
          <div class="form-group">
            <input
              name="name"
              class="form-control"
              required
              v-model="form.name"
              type="name"
              placeholder="Create Module Here"
            />
          </div>
        </div>
        <div class="col-md-3 col-12">
          <div class="actions">
            <button type="submit" class="btn btn-primary">Create Module</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    create_module: function() {
      let self = this;
      axios
        .post("modules/", this.form)
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

<style>
</style>
