<template>
<div class="card">
    <div class="card-body">
        <p class="text-secondary nomessages" v-if="messages.length==0">
            [No messages yet!]
        </p>
        <div class="messages">
        <div class="threads"  v-chat-scroll="{always: false, smooth: true}" colour='success' :class="className">
            <ul class="list-unstyled">
                <li class="list-item" v-for="message in messages" :key="message.id">
                    <div class="mb-2">
                        {{message.text}}
                        <small class="badge float-right" :class="badgeClass">{{message.sender}}{{message.created_at}}</small>
                    </div>
                </li>
            </ul>
        </div>
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
</div>
</template>

<script>
import axios from 'axios'

export default {
    props:[
        'colour'
    ],
    computed:{
        contact_id() {
            return this.$route.params.contact_id
        },
        className(){
            let class_name = {}
            class_name['list-unstyled'+this.colour] = true
            return
        },
        badgeClass(){
            let class_name = {}
            class_name['badge'+this.colour] = true
            return class_name
        }
    },
    data() {
        return {
            new_message: {
                text: ''
            },
            messages: []
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
                    self.messages.push(resp.data);
                    self.new_message = {
                        text: ''
                    };
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

<style scoped>
.threads {
    overflow:auto;
    height: 70vh;
}
</style>
