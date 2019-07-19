<template>
    <div class="nav">
        <div class="nav-wrapper">
            <div class="profile">
                <div class="avatar"></div>
                <div class="name">
                    Cheruiyot Felix
                </div>
            </div>

            <div class="links">
                <ul class="list-unstyled">
                    <li class="list-item">
                        <router-link :to="{name: 'index'}">
                            <i class="fa fa-home"></i>&nbsp;
                            <span>Get started</span>
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'index'}">
                            <i class="fab fa-codepen"></i>&nbsp;
                            <span>Build</span>
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'inbox'}">
                            <i class="fa fa-inbox"></i>&nbsp;
                            <span>Inbox</span>
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'contacts'}">
                            <i class="fa fa-user"></i>&nbsp;
                            <span>Contacts</span>
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link :to="{name: 'inbox'}">
                            <i class="fa fa-cog"></i>&nbsp;
                            <span>Settings</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <b-navbar toggleable="lg" type="light" variant="light" class="box-shadow" fixed="top">
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
        </b-navbar> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background: url(../assets/img/dashboard-cover.jpeg);
        width: 200px;
        height: 100vh;
    }
    .nav-wrapper {
        height: 100vh;
        height: inherit;
        background: rgba(5, 76, 143, 0.7);
        width: 100%;
        overflow-y: auto;
    }

    .profile {
        padding: 34px 11px;
        text-align: center;
        color: #efefef;
    }
    
    .links li{
        display: flex;
    }

    li a {
        color: #efefef;
        display: block;
        padding: 11px 11px;
        width: 100%;
    }

    li a:hover, li a:focus {
        color: #fff;
        background: rgb(5, 76, 143);
    }

</style>
