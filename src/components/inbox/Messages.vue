<template>
<div class="message-container p-4">
    <div class="message-header" v-if="contact">
        <avatar :username="contact|getAvatar"></avatar>
        {{contact}}
    </div>
    <div class="messages">
        <div class="threads" v-chat-scroll="{always: false, smooth: true}">
            <div class="message" :class="{'message-in': message.sender == 'CONTACT', 'message-out': message.sender != 'CONTACT'}" v-for="message in messages" :key="message.id">
                <div class="mb-2 message-content">
                    <div class="message-text">{{message.text}}</div>
                        <div class="meta">
                            <div class="date"><small>{{message.created_at}}</small></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="action">
        <form action="javascript:;" class="action-form">
            <div class="message-input">
                <textarea rows="1" class="form-control" v-on:keyup.enter="sendMessage" v-model="new_message.text" placeholder="Type your message"></textarea>
            </div>
            <div class="action-buttons">
                <button class="btn attach-btn">
                    <i class="fa fa-paperclip"></i>
                </button>
                <button class="btn btn-primary send-btn" type="submit" @click="sendMessage">
                    <i class="fa fa-paper-plane"></i>
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import axios from "axios";
import Avatar from 'vue-avatar'

export default {
    components: {
        Avatar
    },
    computed:{
        contact_id() {
            return this.$route.params.contact_id
        }
    },
    data() {
        return {
            new_message: {
                text: ''
            },
            messages: [],
            contact: {}
        }
    },
    watch: {
        contact_id(newVal, oldVal) {
            if (newVal) {
                this.getContact();
                this.getMessages();
            }
        }
    },
    filters: {
        getAvatar(contact) {
            if (contact.avatar) return contact.avatar
            return contact.first_name +' '+contact.last_name
        }
    },
    created() {
        this.getContact();
        this.getMessages();
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
        },
        getContact: function() {
            let self = this;
            axios.get("contacts/"+this.contact_id+'/', {})
            .then(resp => {
                self.contact = resp.data;
            })
            .catch(err => {
                console.log("Error", err);
            });
        }
    }
  };
</script>

<style scoped>
.message-container {
    background: #efefef;
}
.threads {
    overflow:auto;
    height: 54vh;
}
.message {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.5px;
    font-size: 14px;
}

.message-in {
    align-self: flex-start;
    justify-content: flex-start;
    display: flex;
}

.message-out {
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
}

.message-content {
    max-width: 70%;
    padding: 11px;
    border-radius: 10px;
}

.message-out .message-content {
    background: #fafafa;
}

.message-in .message-content {
    background: rgb(66, 133, 244);
    color: #efefef;
    align-self: flex-start;
}

/* Message actions */
.action-form {
    display: flex;
    flex-direction: row;
    align-content: space-between;
}
.message-input {
    flex: 1;
}
.attach-btn, .send-btn {
    border-radius: 0 !important;
}
.attach-btn {
    background: none;
}
.message-input .form-control {
    background: #fff;
    border: none;
    border-radius: 0 !important;
    outline: none !important;
    box-shadow: none !important;
    resize: none;
}
</style>
