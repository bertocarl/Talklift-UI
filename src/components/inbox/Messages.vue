<template>
    <div class="messages">
        contact_id > {{contact_id}}
    </div>
</template>

<script>
export default {
    computed: {
        contact_id() {
            return this.$route.params.contact_id
        }
    }
}
</script>

<style>

</style>
