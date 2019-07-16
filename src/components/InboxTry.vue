<template>
    <div id="app">
       <label>
        Search Details:
        <input v-model="query"/>
      </label>
      <table style="width: 100%">
        <thead>
          <th>first_name</th>
          <th>last_name</th>
          <th>avatar</th>
          <th>email</th>
          <th>membership_number</th>
        </thead>
        <tbody>
          <tr v-for="result of queryResults">
            <td>{{first_name}}</td>
            <td>{{last_name}}</td>
            <td>{{avatar}}</td>
            <td>{{email}}</td>
            <td>{{membership_number}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  var st = new vue ({
      el: '#app',
      data:{
          status:''
      },
      created: function(){
          this.loadcontacts();
      },
      methods: {
          loadcontacts:function(){
              this.status = 'Loading...';
              var st = this;
              axios.get('https://api.talklift.com/contacts/:id/')
              .then(function (response){
                  st.status = response.data[0];
              })
              .catch(function(error){
                  st.status = 'An error occurred.'+error;
              });
          }
      }
  });
          
  </script>
  
  <style>
  
  </style>