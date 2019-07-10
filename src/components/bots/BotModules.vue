<template>
    <div class="bot-modules">
        <b-breadcrumb :items="breadcrumbs" />
        <div class="row">
            <div class="col-12 col-md-3 my-2" v-for="module in bot.modules" :key="module.id">
                <router-link class="card" :to="{name: 'module_details', params: {id: module.id}}">
                    <div class="card-body">
                        <h5>{{module.name}}</h5>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bot: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            breadcrumbs: [{text: 'Modules', active: true}]
        }
    },
}
</script>

<style>

</style>
