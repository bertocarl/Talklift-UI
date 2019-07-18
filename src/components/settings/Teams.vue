<template>
  <div class="container">
    <div class="row">
      <b-modal v-model="show_modal" hide-footer title="New Team" @hidden="hideModal">
        <form @submit="createTeam" action="javascript:;">
          <div class="form-group">
            <label class="control-label">User Id</label>
            <input
              name="user_id"
              class="form-control"
              v-validate="'required'"
              type="text"
              v-model="forms.user_id"
              placeholder="Enter user identification"
            />

            <div class="help-block text-danger">
              <span>{{ errors.first('user_id') }}</span>
            </div>
          </div>

          <!-- <div class="form-group">
            <label class="control-label">User Role</label>
            <input
              name="roles"
              class="form-control"
              type="text"
              v-model="forms.roles"
              placeholder="Enter a user role"
            />
          </div> -->
          
          <div class="form-group">
            <label class="control-label">User Role</label>
            <select class="form-control form-control-sm">
              <option value="Agent">Agent</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div class="action">
            <button type="submit" class="btn btn-primary">Create Team</button>
          </div>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show_modal: true,
      forms: {
        user_id: "",
        roles: ""
      }
    };
  },
  methods: {
    hideModal() {
      this.show = false;
      this.$router.push({ name: "settings_update" });
    },
    createTeam() {
      let self = this;
      let loader = vself.$laoding.show();
      axios
        .post("/team/", this.form)
        .then(resp => {
          loader.hide();
          console.log("SUccess");
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
  }
};
</script>

<style>
</style>
