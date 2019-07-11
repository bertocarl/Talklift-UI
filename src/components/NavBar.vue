<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="/#/">TalkLift</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                <b-nav-item v-b-popover.hover="'Documentation on how to get started'"href="/#/get-started/">Get started</b-nav-item>
                <b-navbar-nav class="ml-auto" v-b-popover.hover="'Chatbot configurations'">
                    <b-nav-item-dropdown left>
                    <template slot="button-content"><em>Chat Bot</em></template>
                    <b-dropdown-item href="/#/bot_modules/">Bot Modules</b-dropdown-item>
                    <b-dropdown-item href="/#/module_details/">Module Details</b-dropdown-item>
                    <b-dropdown-item href="/#/new_bot/">New Bot</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-nav-item v-b-popover.hover="'Check Inbox messages'"href="/#/inbox/">Inbox</b-nav-item>
                <b-nav-item-dropdown v-b-popover.hover="'Contacts list and creations'">
                    <template slot="button-content"><em>Contacts </em></template>
                    <b-dropdown-item href="/#/create_contacts/">Create Contacts</b-dropdown-item>
                    <b-dropdown-item href="/#/get_contacts/">Get Contacts</b-dropdown-item>
                    <b-dropdown-item href="/#/update_contacts/">Update Contacts</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav><b-navbar-nav class="ml-auto" >
                    <b-nav-item-dropdown right>
                    <template slot="button-content"><em>Account</em></template>
                    <b-dropdown-item href="/#/profile/">Profile</b-dropdown-item>
                    <b-dropdown-item href="/#/settings/">Settings</b-dropdown-item>
                    <b-dropdown-item href="/#/billing/">Billing</b-dropdown-item>
                    <b-dropdown-item href="/#/logout/">Log Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
