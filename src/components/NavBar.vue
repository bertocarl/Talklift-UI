<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="/#/">TalkLift</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/#/get-started/">Get started</b-nav-item>
                    <b-nav-item href="/#/">My Chatbot</b-nav-item>
                    <b-nav-item href="/#/inbox/">Inbox</b-nav-item>
                    <b-nav-item href="/#/contacts/">Contacts</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content">Account</template>
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
