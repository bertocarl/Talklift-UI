<template>
    
</template>

<script>
import { Promise } from 'q';
export default {
    mounted() {
        let self = this;
        const doLogout = function() {
            return new Promise(function(resolve, reject){
                try {
                    self.$store.commit('removeAccessToken');
                    resolve()
                } catch(e) {
                    reject(e)
                }
            })
        }

        doLogout().then(function(){
            self.$router.push({name: 'login'})
        }).catch(function(err){
            console.log('Logout error', err)
        })
    }
}
</script>

<style>

</style>
