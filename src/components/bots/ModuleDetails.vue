<template>
  <div class="module-details">
    <b-breadcrumb :items="breadcrumbs" />

    <b-tabs>
      <b-tab title="Responses">
        <responses />
      </b-tab>
      <b-tab title="Triggers">
        <triggers />
      </b-tab>
    </b-tabs>

    <!-- Action buttons -->
    <router-link class="floating-btn" :to="{name: 'new_response', params: {id: module.id}}"></router-link>
  </div>
</template>

<script>
import Responses from "./Responses";
import Triggers from "./Triggers";

export default {
  components: {
    Responses,
    Triggers
  },
  data() {
    return {
      module: {
        id: 1,
        name: "Ordering",
        triggers: [],
        responses: [
          { id: 1, message: "Response 1", id: 2, message: "Response 2" }
        ]
      }
    };
  },
  computed: {
    breadcrumbs() {
      return [
        { text: "module", href: "/#/" },
        { text: this.module.name, active: true }
      ];
    }
  }
};
</script>

<style>
.floating-btn {
  background: blue;
  color: #fff;
  position: absolute;
  bottom: 21px;
  right: 21px;
  padding: 34px;
  height: 54px;
  width: 54px;
  border-radius: 50%;
}
</style>
