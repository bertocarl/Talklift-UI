<template>
  <div class="inbox">
    <sub-nav title="Inbox" :actions="[]" />
    <div class="my-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubNav from "./../SubNav";

export default {
  components: {
    SubNav
  }
};
</script>

<style>
</style>
