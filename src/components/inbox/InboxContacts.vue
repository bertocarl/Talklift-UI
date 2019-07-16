<template>
    <div class="inbox-contacts">
        {{contacts}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            contacts: []
        }
    },
    created() {
        this.getContacts();
    },
    methods: {
        getContacts() {
            let self = this;
            let loader = self.$loading.show();
            axios
                .get("contacts/")
                .then(resp => {
                    self.contacts = resp.data;
                    loader.hide();
                })
                .catch(err => {
                    console.log("Error", err);
                    loader.hide();
                });
        }
    }
}
</script>

<style>

</style>
