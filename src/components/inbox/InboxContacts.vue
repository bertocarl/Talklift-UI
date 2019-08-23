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
          <div class="col-md-3">
            <avatar :username="contact|getAvatar" :size="avatar_size"></avatar>
          </div>
          <div class="col-md-9">
            {{contact.first_name}} {{contact.last_name}}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios"

import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar
  },
  data() {
    return {
      avatar_size: 34,
      contacts: []
    };
  },
  created() {
    this.getContacts();
  },
  filters: {
    getAvatar(contact) {
        if (contact.avatar) return contact.avatar
        return contact.first_name +' '+contact.last_name
    }
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
