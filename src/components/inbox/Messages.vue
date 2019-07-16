<template>
    <div class="messages">
        <div class="threads">
            <ul class="list-unstyled">
                <li class="list-item" v-for="message in messages" :key="message.id">
                    {{message.created_at}} {{message.text}}
                </li>
            </ul>
        </div>
        <div class="action">
            <form action="javascript:;" @submit="sendMessage">
                <div class="row">
                    <div class="col-9">
                        <input type="text" class="form-control" v-model="new_message.text" placeholder="Type your message">
                    </div>
                    <div class="col-3 text-right">
                        <button class="btn btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            new_message: {
                text: ''
            },
            messages: []
        }
    },
    computed: {
        contact_id() {
            return this.$route.params.contact_id
        }
    },
    created() {
        this.getMessages() 
    },
    methods: {
        sendMessage: function() {
            let self = this;
            let payload = this.new_message;
            payload['sender'] = 'SUPPORT';
            payload['contact_id'] = this.contact_id;
            payload['platform'] = 'SMS';

            axios.post("messages/", payload)
                .then(resp => {
                self.$router.push({ name: "inbox" });
                })
                .catch(err => {
                console.log("Error", err);
                });
        },
        getMessages: function() {
            let self = this;
            axios.get("messages/", {params: {contact_id: this.contact_id}})
            .then(resp => {
                this.messages = resp.data;
            })
            .catch(err => {
                console.log("Error", err);
            });
        }
    }
}
</script>

<style>

</style>
