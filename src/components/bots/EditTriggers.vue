<template>
  <div class="edit_trigger">
    <div class="container">
      <div class="row">
        <div class="col-md-6" v-for="trigger in triggers" :key="trigger.id">
          <b-card>
            <b-card-text>{{trigger.text}}</b-card-text>

            <router-link :to="{name: 'triggers_list'}">Back to Triggers</router-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      triggers: [],
      edit_trigger: {
        text: ""
      }
    };
  },

  created() {
    this.get_trigger();
  },

  computed: {
    trigger_id() {
      return this.$router.params.trigger_id;
    }
  },

  methods: {
    get_trigger: function() {
      let self = this;
      axios
        .get("triggers/")
        .then(resp => {
          this.triggers = resp.data;
          console.log("successnu");
        })
        .catch(err => {
          console.log("Error", err);
        });
    },

    edit_triggers: function() {
      let self = this;
      axios
        .put("triggers/" + this.trigger_id + "/", this.edit_trigger)
        .then(resp => {
          self.$router.push({ name: "response_details" });
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
