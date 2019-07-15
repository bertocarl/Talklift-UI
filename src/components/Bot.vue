<template>
  <div class="bot">
    <div class="container">
      <bot-modules />
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
  }
}
</script>

<style>

</style>
