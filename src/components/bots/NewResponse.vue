<template>
    <b-modal v-model="show" hide-footer title="New Response" @hidden="hideModal">
        <form @submit="submitForm" action="javascript:;">
            <div class="form-group">
              <label class="control-label">Text Content</label>
              <input
                name="text"
                class="form-control"
                v-validate="'required|text'"
                type="text"
                v-model="form.content.text"
                placeholder="Enter text content"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('text') }}</span>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Quick Replies Content</label>
              <input
                name="quick replies"
                class="form-control"
                v-validate="'required|text'"
                type="text"
                v-model="form.content.quick_replies"
                placeholder="Enter a quick reply"
              />
              <div class="help-block text-danger">
                <span>{{ errors.first('quick_replies') }}</span>
              </div>
            </div>
            
            <div class="action">
              <button type="submit" class="btn btn-primary">Create Response</button>
            </div>
          </form>
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            form: {
                content: {
                text: "",
                quick_replies: ""
                }
            }
        }
    },
    computed: {
        module_id() {
            return this.$route.params.id;
        }
    },
    methods: {
        hideModal() {
            this.show = false;
            this.$router.push({name: 'module_details', params: {id: this.module_id}});
        },
        submitForm() {
            let self = this;
            let payload = this.form;
            let loader = self.$loading.show();
            payload["module_id"] = this.module_id;
            axios.post("responses/", payload)
                .then(resp => {
                    self.$router.push({ name: "responses_list" });
                    loader.hide();
                })
                .catch(err => {
                    loader.hide();
                    console.log("Error", err);
                    self.$notify({
                        group: "default",
                        type: "error",
                        title: err,
                        text: err.response.data
                    });
                });
        }
    }
}
</script>

<style>

</style>
