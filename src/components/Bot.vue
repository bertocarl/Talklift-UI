<template>
  <div class="bot">
    <div class="container">
      <new-bot v-if="!bot" />
      <bot-modules v-if="bot" :bot.sync="bot" />
    </div>
  </div>
</template>

<script>
import BotModules from './bots/BotModules';
import NewBot from './bots/NewBot';

export default {
  components: {
    BotModules,
    NewBot 
  },
  data() {
    return {
      bot: null
    }
  },
  created() {
    // this.getBot();
  },
  methods: {
    getBot() {
      this.bot = {
        modules: [
          {id: 1, name: 'Greeting'},
          {id: 2, name: 'Contacts'},
          {id: 3, name: 'Ordering'},
        ]
      }
    }
  }
}
</script>

<style>

</style>
