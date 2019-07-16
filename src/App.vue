<template>
  <div id="app">
    <navbar v-if="show_navbar" />
    <div class="notification-bar">
        <notifications group="default" position="top center" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/NavBar';

export default {
  name: 'app',
  components: {
    Navbar,
    
  },
  data() {
    return {
      
    }
  },
  computed: {
    show_navbar() {
      return this.$store.getters.getAccessToken;
    }
  }
}
</script>

<style>

</style>
