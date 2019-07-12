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
    this.getBot();
  },
  methods: {
    getBot() {
      this.bot = {
        modules: [
          {id: 1, name: 'Greeting'},
          {id: 2, name: 'Contacts'},
          {id: 3, name: 'Ordering'},
          {id: 4, name: 'Address'},
          {id: 5, name: 'Account Details'},
          {id: 6, name: 'Product Available'},
          {id: 7, name: 'Price'},
          {id: 8, name: 'Final Response'}
        ]
      }
    }
  }
}
</script>

<style>

</style>
