<template>
  <div class="row">
    <div class="col-md-6">
      <form action="javascript:;" @submit="updateBusiness">
        <div class="form-group">
          <label class="settings">Business Name</label>
          <input
            name="name"
            class="form-control"
            required
            v-model="form.name"
            type="text"
            placeholder="Business Name"
          />
        </div>

        <div class="form-group">
          <label class="settings">Address of the Business</label>
          <textarea
            name="address"
            class="form-control"
            v-model="form.address"
            type="text"
            placeholder="Business Address"
            rows="2"
          ></textarea>
        </div>

        <div class="form-group">
          <label class="settings">Contact Person Name</label>
          <input
            name="contact_name"
            class="form-control"
            v-model="form.contact_name"
            type="text"
            placeholder="Contact Name"
          />
        </div>

        <div class="form-group">
          <label class="settings">Contact person phone number</label>
          <input
            name="contact_phone_number"
            class="form-control"
            v-model="form.contact_phone_number"
            type="text"
            placeholder="contact phone number "
          />
        </div>

        <div class="form-group">
          <label class="settings">User who created Business</label>
          <input
            name="owner_id"
            class="form-control"
            v-model="form.owner_id"
            type="text"
            placeholder="Business creator"
          />
        </div>

        <div class="action">
          <button type="submit" class="btn btn-primary">Update Business</button>
        </div>
      </form>
    </div>

    <div class="col-md-6">
      <h1>{{form.name}}</h1>
      <h1>Business Settings</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        address: "",
        contact_name: "",
        contact_phone_number: "",
        owner_id: ""
      }
    };
  },

  methods: {

    updateBusiness: function() {
       let self = this;
       let loader = self.$loading.show();
      axios
        .post("businesses/", this.form)
        .then(resp => {
          loader.hide();
          console.log("Business Updated");
        })
        .catch(err => {
            loader.hide()
          console.log("Error", err);
        });
    }
  }
};
</script>

<style>
</style>
