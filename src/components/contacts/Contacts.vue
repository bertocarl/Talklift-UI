<template>
  <div class="contacts">
    <sub-nav title="Contacts" :actions="[{label: 'Add Contact', href:'/#/contacts/new/', type:'primary', icon: 'fa fa-plus'}]" />
    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card" v-for="contact in contacts" :key="contact.id">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-md-4">
                    {{contact.first_name}} {{contact.last_name}}
                  </div>
                  <div class="col-12 col-md-4">
                    {{contact.email}} {{contact.phone_number}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import SubNav from './../SubNav'

export default {
  components: {
    SubNav
  },
  data() {
    return {
      contacts: []
    }
  },
  created() {
    this.getContacts()
  },
  methods: {
    getContacts() {
      var self = this;
      let loader = self.$loading.show();
      axios.get("contacts/")
        .then(resp => {
          self.contacts = resp.data;
          loader.hide();
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
}
</script>

<style>

</style>
