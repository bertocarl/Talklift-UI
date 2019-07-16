<template>
    <div class="subnav pt-3">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1>{{title}}</h1>
                </div>
                <div class="col-12 col-md-6 text-right">
                    <ul class="list-inline">
                        <li class="list-inline-item" v-for="action in actions" :key="action.href">
                            <a :href="action.href" :class="'btn btn-sm btn-'+action.type">
                                {{action.label}}
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
    }
}
</script>

<style scoped>
    .subnav {
        background: #dfdfdf;
        margin-top: 55px;
    }
    h1 {
        font-size: 1.4em;
    }
</style>
