
<template>
  <div class="add-contacts">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-12 col-md-6">
          <form action="javascript:;" @submit="updatecontacts">
            <div class="form-group">
              <label for="first name">First Name</label>
              <input 
                name="first name"
                type="text"
                class="form-control"
                required
                v-model="contacts.first_name"
                placeholder="first name"
              />
            </div>
            <div class="form-group">
              <label for="last name">Last Name</label>
              <input 
                name="last name"
                type="text"
                class="form-control"
                required
                v-model="contacts.last_name"
                placeholder="Last Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                name="email"
                type="text"
                class="form-control"
                required
                v-model="contacts.email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="mebership_number">Membership Number</label>
              <input
                type="text"
                class="form-control"
                required 
                name="membership_number" 
                v-model="contacts.membership_number"
                placeholder="Membership Number"
              />
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-primary">Update Contacts</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from './../store';

export default {
data () {
  return {
    contacts: {
      first_name: "",
      last_name: "",
      email: "",
      membership_number: ""
    }
  };
},
created() {
  this.getContacts();
},
methods: {
  getContacts(){
    let self = this;
    console.log(store)
    let config = {headers: {token: store.getters.getAccessToken}}
    axios
    .get("contacts/", config)
    .then(resp => {
      if (resp.data) {
        if (resp.data.length > 0) {
          self.contacts = resp.data[0];
        }
      }
    })
    .catch(err => {
      console.log("Error", err);
    });
  },
  updatecontacts(){
    let self = this;
    let config = {headers: {token: store.getters.getAccessToken}}
    axios
    .put("contacts/"+this.contacts.id+"/", this.contacts, config)
    .then(resp => {
      self.$router.push({first_name:'index'});
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