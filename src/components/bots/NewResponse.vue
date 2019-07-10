<template>
    <b-modal v-model="show" hide-footer title="New Response" @hidden="hideModal">
        New response create form
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    computed: {
        module_id() {
            return this.$route.params.id;
        }
    },
    methods: {
        hideModal() {
            this.show = false;
            this.$router.push({name: 'module_details', params: {id: this.module_id}});
        }
    }
}
</script>

<style>

</style>
