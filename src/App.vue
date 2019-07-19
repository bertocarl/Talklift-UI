<template>
  <div id="app">
    <!-- Show notification messages -->
    <div class="notification-bar">
      <notifications group="default" position="top center" />
    </div>
    
    <!-- Show dashboard only -->
    <div v-if="show_dashboard" class="dashboard">
      <navbar />
      <div class="content" :class="{'full-width-content': !$store.getters.canShowNav}">
        <router-view/>
      </div>
    </div>

    <!-- Show other views -->
    <div v-if="!show_dashboard">
      <router-view/>
    </div>
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
    show_dashboard() {
      return this.$store.getters.getAccessToken;
    }
  }
}
</script>

<style scoped>
  .dashboard {
    display: flex;
    flex-direction: row;
  }
  .content {
    flex: 1;
    margin-left: 200px;
  }
  .full-width-content {
    margin-left: 0;
  }
</style>
