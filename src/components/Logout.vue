<template>
    
</template>

<script>
import store from './../store';

export default {
    created() {
        store.commit('removeAccessToken');
        this.$router.push({name: 'login'})
    }
}
</script>

<style>

</style>
