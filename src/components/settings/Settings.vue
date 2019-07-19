<template>
  <div class="settings">
    <sub-nav title="Settings" />
    <div class="my-4">
      <div class="container-fluid">
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
