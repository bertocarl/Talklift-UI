<template>
  <div class="edit_response">
    <div class="container">
      <div class="row">
        <div class="col-md-6" v-for="response in responses" :key="response.id">

          <b-card>
            <b-card-text>
              {{response.content.text}}
              </b-card-text>
            
              <b-card-text>
              {{response.content.quick_replies}}
              </b-card-text>
            
            <router-link :to="{name: 'responses_list'}">Back to Responses</router-link>
            

          </b-card>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      responses: [],
      edit_response: {
          content: {
            text: "",
            quick_replies: ""
        }
      }
    };
  },

  created() {
    this.get_response();
  },

  methods: {
    
    get_response: function() {
      let self = this;
      axios
        .get("responses/")
        .then(resp => {
          this.responses = resp.data;
          console.log("success");
        })
        .catch(err => {
          console.log("Error", err);
        });
    },

    edit_response: function() {
        let self = this;
        axios
        .put("responses/" + this.edit_response.id + "/", this.edit_response )
        .then(resp => {
            self.$router.push( { name: "response_details" })
        })
        .catch(err => {
            console.log("Error", err)
        })
    }
  }
};
</script>

<style>
</style>
