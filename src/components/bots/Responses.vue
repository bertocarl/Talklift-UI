<template>
  <div class="responses">
    
    <div class="responses">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-3">
                    <form @submit="submitForm" action="javascript:;">
                        <div class="form-group">
                            <label class="control-label">Order Number</label>
                            <input
                                name="order"
                                class="form-control"
                                required
                                v-model="form.order"
                                placeholder="Enter a response"
                            />
                            <label class="control-label">Order Number</label>
                            <input
                                name="order"
                                class="form-control"
                                required
                                v-model="form.order"
                                placeholder="Enter a response"
                            />
                        </div>
                        <div class="action">
                            <button type="submit" class="btn btn-primary">
                                Create a response
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    responses: {
      required: true,
      type: Array
    }
  },

  computed: { 
      module_id() {
          return this.$route.params.id
      }
  },
  data() {
      return {
          form: {
              text: ""
          }
      }
  },

  methods: {
      submitForm: function() {
          let self = this;
          let payload = this.form;
          payload["module_id"] = this.module_id;
          axios
          .post("responses/", payload)
          .then(resp => {
              self.$router.push({ name: "responses_list" });
          })
          .catch(err => {
          console.log("Error", err)
          });
      }
  }
};

</script>

<style>
</style>
