<template>
    <div class="triggers">Triggers
        {{triggers}}
    </div>
</template>

<script>
export default {
    props: {
        triggers: {
            required: true,
            type: Array
        }
    }
}
</script>

<style>

</style>
