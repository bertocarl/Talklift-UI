<template>
  <div class="inbox-contacts">
    <router-link
      class="card"
      :to="{name: 'messages', params: {contact_id: contact.id}}"
      v-for="contact in contacts"
      :key="contact.id"
    >
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-4">{{contact.first_name}} {{contact.last_name}}</div>
          <div class="col-12 col-md-4">{{contact.email}} {{contact.phone_number}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contacts: []
    };
  },
  created() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .get("contacts/")
        .then(resp => {
          self.contacts = resp.data;
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
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
