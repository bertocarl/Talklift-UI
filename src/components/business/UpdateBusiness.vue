
<template>
  <div class="add-business">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-12 col-md-6">
          <form action="javascript:;" @submit="updatebusiness">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                name="name"
                type="text"
                class="form-control"
                required
                v-model="business.name"
                placeholder="name"
              />
            </div>
            <div class="form-group">
              <label for="contact_phone_number">Contact Phone Number</label>
              <input
                type="text"
                class="form-control"
                required
                name="contact_phone_number"
                v-model="business.contact_phone_number"
                placeholder="Phone Number"
              />
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary">Update Business</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      business: {
        name: "",
        contact_phone_number: ""
      }
    };
  },
  created() {
    this.getBusiness();
  },
  methods: {
    getBusiness() {
      let self = this;
      let loader = self.$loading.show();
      axios.get("businesses/", {}).then(resp => {
        if (resp.data) {
          if (resp.data.length > 0) {
            self.business = resp.data[0];
            loader.hide()
          }
        }
      }).catch(err => {
        console.log("Error", err);
        loader.hide()
      });
    },
    updatebusiness() {
      let self = this;
      let loader = self.$loading.show();
      axios.put("businesses/" + this.business.id + "/", this.business, config)
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

<style>
</style>