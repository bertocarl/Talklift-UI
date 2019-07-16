<template>
  <div class="inbox">
    <sub-nav title="Inbox" :actions="[]" />
    <router-view />
    <!-- <form @submit="create_message" action="javascript:;">
      <div class="form-group">
        <label class>contact_id</label>
        <input name="contact" class="form-control" v-model="form.contact_id" placeholder="platform" />
      </div>

      <div class="form-group">
        <label class="platform">Platform</label>
        <input
          name="platform"
          class="form-control"
          v-model="form.platform_id"
          placeholder="platform"
        />
      </div>

      <div class="form-group">
        <label class="status">status</label>
        <input
          name="status"
          class="form-control"
          v-model="form.status"
          placeholder="status detaisls"
        />
      </div>

      <div class="form-group">
        <label class="text">text message</label>
        <input name="text" class="form-control" v-model="form.text" placeholder="text message " />
      </div>

      <div class="form-group">
        <label class="sender">Sender details</label>
        <input name="text" class="form-control" v-model="form.sender" placeholder="sender details" />
      </div>

      <div class="action">
        <button type="submit">Create Message</button>
      </div>
    </form>
    {{messages}} -->
  </div>
</template>

<script>
// import axios from "axios";

import SubNav from './../SubNav';

export default {
  components: {
    SubNav
  },
  data() {
    return {
      // form: {
      //   contact_id: "",
      //   platform_id: "",
      //   status: "",
      //   text: "",
      //   sender: ""
      // },
      // messages: []
    };
  },

  created() {
    // this.view_messages();
  },

  methods: {
  //   create_message: function() {
  //     let self = this;
  //     axios
  //       .post("messages/", this.form)
  //       .then(resp => {
  //         self.$router.push({ name: "inbox" });
  //       })
  //       .catch(err => {
  //         console.log("Error", err);
  //       });
  //   },

  // view_messages: function() {
  //   let self = this;
  //   axios
  //     .get("messages/")
  //     .then(resp => {
  //       this.messages = resp.data;
  //       self.$router.push({ name: "inbox" });
  //       console.log("SUCCESS");
  //     })
  //     .catch(err => {
  //       console.log("Error", err);
  //     });
  // }
}
};
</script>

<style>
</style>
