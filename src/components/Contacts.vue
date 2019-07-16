<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-xs-9 col-lg-9 col-md-9 col-sm-9"></div>
        <div class="col-xs-3 col-lg-3 col-md-3 col-sm-3">
          <div class="card">
            <b-button href="/#/addcontact/" variant="primary">
                Add Contact</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    methods: {
        addcontact: function() {
            this.router.$push({name: "addcontacts"});
        }
    }
};
</script>


<style>
</style>
