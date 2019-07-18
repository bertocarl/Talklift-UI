<template>
  <div class="triggers">
    <div class="row">
      <div class="col-12">
        <multiselect
          v-model="triggers"
          tag-placeholder="Add this as new trigger"
          placeholder="Search or add a trigger"
          label="text"
          track-by="id"
          :options="triggers"
          :multiple="true"
          :taggable="true"
          @tag="addTrigger"
          @remove="removeTrigger"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  computed: {
    module_id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      triggers: [],
      form: {
        text: ""
      }
    };
  },

  created() {
    this.getTriggers();
  },

  methods: {
    removeTrigger(trigger) {
      let self = this;
      let loader = self.$loading.show();
      axios
        .delete("triggers/" + trigger.id + "/", {})
        .then(resp => {
          loader.hide();
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
        });
    },
    addTrigger(text) {
      let self = this;
      let payload = this.form;
      let loader = self.$loading.show();
      payload["module_id"] = this.module_id;
      payload["text"] = text;
      axios
        .post("triggers/", payload)
        .then(resp => {
          loader.hide();
          self.triggers.push(resp.data);
        })
        .catch(err => {
          console.log("Error", err);
          loader.hide();
        });
    },
    getTriggers() {
      let self = this;
      let loader = self.$loading.show();
      axios
        .get("triggers/", { params: { module: this.module_id } })
        .then(resp => {
          this.triggers = resp.data;
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
</style>
