<template>
  <div class="inbox">
    <sub-nav title="Inbox" :actions="[]" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-3">
            <inbox-contacts />
          </div>
          <div class="col-12 col-md-9">
            <router-view />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SubNav from "./../SubNav";
import InboxContacts from "./InboxContacts"

export default {
  components: {
    SubNav,
    InboxContacts
  }
};
</script>

<style>
</style>
