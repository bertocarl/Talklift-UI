<template>
<div id="get_contacts">
  <form action="javascript:;" @submit="get_contacts">  
  <h1>All Contacts</h1>
  
  <div class="sorting">
    <label for="filtercontacts">Find your contacts:</label>
    <input v-model="contacts" id="filtername" type="text" />
  </div>
  <div class="actions">
    <button type="submit" class="btn btn-primary">Get Contacts</button>
  </div>
  
  <ul>
    <li v-for="contact in filteredContacts">
      {{ contact }}
    </li>
  </ul>
  </form>
</div>
   
</template>

<script>
import axios from "axios"
import store from './../../store'

export default {
  data() {
    return {
        search:'',
        form: []
    };
  },

  methods: {
    get_contacts: function() {
      let self = this;
      let config = {headers: {token: store.getters.getAccessToken}}
      axios
        .get("contacts/", this.form, config)
        .then(resp => {
          store.commit('setAccessToken', resp.data.token);
          self.$router.push({ name: "index" });
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  },
  computed: {
  filteredContacts() {
    let filter = new RegExp(this.search, 'i')
    return this.contacts.filter(el => el.match(filter))
  }
 }
}
</script>

<style scoped>
</style>