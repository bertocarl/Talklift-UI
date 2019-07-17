<template>
    <div class="response-form" v-if="form">
        <div class="form-group">
            <label class="control-label">Text Content</label>
            <input
                name="text"
                class="form-control"
                v-validate="'required'"
                type="text"
                v-model="form.content.text"
                placeholder="Enter text"/>
            <div class="help-block text-danger">
                <span>{{ errors.first('text') }}</span>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">Quick Replies Content</label>
            <input
                name="quick replies" 
                class="form-control" 
                type="text" 
                v-model="form.content.quick_replies" 
                placeholder="Enter a quick reply"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        form: {
            required: true,
            type: Object
        }
    }
}
</script>

<style>

</style>
