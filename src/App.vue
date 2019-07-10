<template>
  <div id="app">
    <navbar v-if="show_navbar" />
    <router-view/>
  </div>
</template>

<script>
import store from './store';
import Navbar from './components/NavBar';

export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      show_navbar: false
    }
  },
  created() {
    this.show_navbar = store.getters.getAccessToken;
  }
}
</script>

<style>

</style>
