<template>
    <div class="nav" :class="{'hide_menu': !$store.getters.canShowNav}">
        <div class="nav-wrapper">
            <div class="pr-3 pt-3 text-right">
                <a href="javascript:;" class="menu-icon" v-show="$store.getters.canShowNav" @click="toggleMenu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div class="profile">
                <div class="avatar mb-2">
                    <avatar username="Cheruiyot Felix" :size="avatar_size"></avatar>
                </div>
                <div class="name">
                    <b-dropdown size="sm" class="name-dropdown">
                        <template slot="button-content">Felix Cheruiyot</template>
                        <b-dropdown-item href="/#/profile/">Profile</b-dropdown-item>
                        <b-dropdown-item href="/#/logout/">Log Out</b-dropdown-item>
                    </b-dropdown>
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
                        <router-link :to="{name: 'settings_update'}">
                            <i class="fa fa-cog"></i>&nbsp;
                            <span>Settings</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
    components: {
        Avatar
    },
    data() {
        return {
            avatar_size: 89
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleNav');
        }
    }
}
</script>

<style scoped>
    .menu-icon {
        color: #efefef !important;
    } 
    .hide_menu {
        display: none !important;
    }
    .nav {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background: url(../assets/img/dashboard-cover.jpeg) no-repeat center center fixed;
        width: 200px;
        height: 100vh;
        position: fixed;
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
        display: flex;
        align-items: center; 
        justify-content: center; 
        text-align: center;
        color: #efefef;
        flex-direction: column;
    }

    .name-dropdown {
        background: none !important;
        border: none !important;   
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
