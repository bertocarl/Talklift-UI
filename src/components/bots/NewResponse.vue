<template>
    <b-modal v-model="show_modal" hide-footer title="New Response" @hidden="hideModal">
        <form @submit="submitForm" action="javascript:;">
            <div class="action">
                <response-form :form.sync="form" />
                <button type="submit" class="btn btn-primary">Create Response</button>
            </div>
        </form>
    </b-modal>
</template>

<script>
import axios from 'axios'

import ResponseForm from './ResponseForm'

export default {
    components: {
        ResponseForm
    },
    data() {
        return {
            show_modal: true,
            form: {
                content: {
                    text: '',
                    quick_replies: ''
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
