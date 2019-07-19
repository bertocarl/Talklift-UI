<template>
    <div class="subnav pt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div style="display: flex">
                        <a href="javascript:;" v-show="!$store.getters.canShowNav" @click="toggleNav" class="mr-4 menu-icon">
                            <i class="fa fa-bars"></i>
                        </a>
                        <h1>{{title}}</h1>
                    </div>
                </div>
                <div class="col-12 col-md-6 text-right">
                    <ul class="list-inline" v-if="actions">
                        <li class="list-inline-item" v-for="action in actions" :key="action.href">
                            <a :href="action.href" :class="'btn btn-'+action.type" v-if="action">
                                <span v-if="action.icon"><i :class="action.icon"></i>&nbsp;</span>{{action.label}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        },
        actions: {
            required: false,
            type: Array
        }
    },
    methods: {
        toggleNav() {
            this.$store.commit('toggleNav');
        }
    }
}
</script>

<style scoped>
    .subnav {
        background: #dfdfdf;
        min-height: 57px;
    }
    h1 {
        font-size: 1.4em;
    }
</style>
