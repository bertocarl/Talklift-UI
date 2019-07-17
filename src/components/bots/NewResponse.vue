<template>
    <b-modal v-model="show_modal" hide-footer title="New Response" @hidden="hideModal">
        <form @submit="submitForm" action="javascript:;">
            <div class="form-group">
              <label class="control-label">Text Content</label>
              <input
                name="text"
                class="form-control"
                v-validate="'required'"
                type="text"
                v-model="form.content.text"
                placeholder="Enter text"/>
              <div class="help-block text-danger">
                <span>{{ errors.first('text') }}</span>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Quick Replies Content</label>
              <input
                name="quick replies" 
                class="form-control" 
                type="text" 
                v-model="form.content.quick_replies" 
                placeholder="Enter a quick reply"
              />
            </div>

            <div class="action">
              <button type="submit" class="btn btn-primary">Create Response</button>
            </div>
          </form>
    </b-modal>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            show_modal: true,
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
            this.$validator.validate().then(valid => {
                if (valid) {
                    let payload = this.form;
                    let loader = self.$loading.show();
                    payload["module_id"] = this.module_id;
                    axios.post("responses/", payload)
                        .then(resp => {
                            loader.hide();
                            self.show_modal = false;
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
            })
        }
    }
}
</script>

<style>

</style>
