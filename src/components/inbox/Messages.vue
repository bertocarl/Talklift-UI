<template>
<div class="card">
    <div class="card-body">
        <div class="message-header">
            <div class="message-header-img">
                <img src="/home/k19/Desktop/code/talkLift/talklift-ui/src/assets/Norbert.png"/>
            </div>
            <div class="active">
                <h5>Noel</h5>
            </div>
            <div class="header-icons">
                <i class="fa fa-phone"></i>
                <i class="fa fa-video-camera"></i>
                <i class="fa fa-info-circle"></i>
            </div>
            </div>
        <p class="text-secondary nomessages" v-if="messages.length==0">
            [Loading...]
        </p>
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
import axios from "axios";

export default {
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
  };
</script>

<style scoped>
.threads {
    overflow:auto;
    height: 70vh;
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
    background: #efefef;
}


.message-in .message-content {
    background: rgb(66, 133, 244);
    color: #efefef;
    align-self: flex-start;
}
.message-header{
border: 1px solid #ccc;
width: 100%;
height: 10%;
border-bottom: none;
display: inline-block;
background-color: rgb(66, 133, 244);
}
.img{
    max-width: 100%;
    border-radius: 50%;
}
.message-header-img{
    border-radius: 50%;
    width: 40px;
    margin-left: 5%;
    margin-top: 12px;
    float: left;
}
.active{
    width: 120px;
    float: left;
    margin-top: 10px;
}
.active h5{
    font-size: 15px;
    margin-left: 10px;
    color: #fff;
}
.active h6{
    font-size: 10px;
    margin-left: 10px;
    line-height: 2px;
    color: #fff;
}
.header-icons{
    width: 120px;
    float: right;
    margin-top: 12px;
    margin-right: 10px;
}
.header-icons .fa{
    color: #fff;
    cursor: pointer;
    margin: 10px;
}
</style>
