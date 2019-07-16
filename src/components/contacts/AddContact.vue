<template>
  <div class="add_contact">
    <sub-nav title="Add Contact" :actions="[]" />
    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form action="javascript:;" @submit="add_contact">
              <h1>Add Contacts</h1>
              <div class="form-group">
                <label class="control-label">First Name</label>
                <input
                  name="first_name"
                  class="form-control"
                  required
                  v-model="form.first_name"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div class="form-group">
                <label class="control-label">Last Name</label>
                <input
                  name="last_name"
                  class="form-control"
                  required
                  v-model="form.last_name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div class="form-group">
                <label class="control-label">Avatar</label>
                <input
                  name="avatar"
                  class="form-control"
                  required
                  v-model="form.avatar"
                  type="avatar"
                  placeholder="Avatar"
                />
              </div>

              <div class="form-group">
                <label class="control-label">Email</label>
                <input
                  name="email"
                  class="form-control"
                  required
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <label class="control-label">Membership Number</label>
                <input
                  name="membership_number"
                  class="form-control"
                  required
                  v-model="form.membership_number"
                  type="membership_number"
                  placeholder="Membership Number"
                />
              </div>

              <div class="actions">
                <button type="submit" class="btn btn-primary">Add Contact</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

import SubNav from './../SubNav'

export default {
  components: {
    SubNav
  },
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        avatar: "",
        email: "",
        membership_number: ""
      }
    };
  },

  methods: {
    add_contact: function() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .post("contacts/", this.form)
        .then(resp => {
          loader.hide();
          self.$notify({
            group: "default",
            type: "success",
            title: 'Success',
            text: 'Contact added'
          });
          self.$router.push({ name: "contacts" });
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
    }
  }
};
</script>

<style scoped>
</style>