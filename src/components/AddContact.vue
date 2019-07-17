<template>
  <div class="add_contact">
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
</template>

<script>
import axios from "axios";
import store from "./../store";

export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        membership_number: ""
      }
    };
  },

  methods: {
    add_contact: function() {
      let self = this;
      axios
        .post("contacts/", this.form)
        .then(resp => {
          self.$router.push({ name: "index" });
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
        });
    }
  }
};
</script>

<style scoped>
</style>
