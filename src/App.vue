<template>
    <div id="app" class="app">

        <div class="background"></div>

        <nav class="navbar">
            <div class="flex-row flex-items-center h-full">
                <button class="round-button" @click="showMenu = !showMenu">
                    <img class="h-full" src="https://img.icons8.com/ios-glyphs/50/ffffff/menu.png">
                </button>
                <router-link to="/" class="flex-grow title">KloudLAN</router-link>
                <div class="textfield">
                    <input v-model="search" placeholder="Nach Turnieren suchen"/>
                </div>
                <router-link class="round-button" to="/search">
                    <img src="https://img.icons8.com/ios-glyphs/50/ffffff/search.png">
                </router-link>
                <router-link class="round-button" to="/profile">
                    <img src="https://img.icons8.com/ios-glyphs/50/ffffff/name.png">
                </router-link>
            </div>
        </nav>

        <side-menu :show="showMenu" v-on:menu-closed="showMenu = false"></side-menu>

        <div class="flex-col h-full">
            <!--spacer to move content below navbar-->
            <div class="h-32"></div>
            <router-view class="flex-grow p-4"/>
        </div>
    </div>
</template>

<style src="./css/main.css"></style>
<style src="./css/flex.css"></style>
<style src="./css/sizes.css"></style>

<style>

    .app {
        height: 100vh;
    }

    .navbar {
        position: fixed;
        background: rgba(48, 48, 48, 1);
        width: 100%;
        padding: 0.5rem 0;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
        z-index: 1000;
    }

    .title {
        padding-left: 1rem;
        margin-top: auto;
        margin-bottom: auto;

        color: #ffffff;
        font-size: 1.2rem;
        text-align: left;
    }

    .menu-background {
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        animation-name: anim-menu-background;
        animation-duration: 0.1s;
        animation-timing-function: linear;
    }

    @keyframes anim-menu-background {
        from {
            background: rgba(0, 0, 0, 0.0);
        }
        to {
            background: rgba(0, 0, 0, 0.8);
        }
    }

    .menu {
        padding-top: 5rem;
        height: 100%;
        background: rgba(48, 48, 48, 1);
        box-shadow: 0.25rem -0.5rem 0.5rem rgba(0, 0, 0, 0.4);
        width: 20rem;
        z-index: 100;
    }

    @keyframes anim-menu {
        from {
            margin-left: -20rem
        }
        to {
            margin-left: 0
        }
    }

    .open-menu-animation {
        margin-left: 0;
        animation-name: anim-menu;
        animation-duration: 0.1s;
        animation-timing-function: linear;
    }

    .close-menu-animation {
        margin-left: -20rem;
        animation-name: anim-menu;
        animation-duration: 0.1s;
        animation-direction: reverse;
        animation-timing-function: linear;
    }

    .menu-item {
        padding: 0.5rem 2rem;
        display: flex;
        align-items: center;
    }

    .menu-item:hover {
        background: rgba(66, 66, 66, 0.95);
    }

    .menu-item > img {
        height: 1.75rem;
        padding-right: 1.5rem;
    }

    .textfield {
        height: 100%;
        margin-top: auto;
        margin-bottom: auto;
        background: rgba(255, 255, 255, 0.14);
        border-radius: 0.5rem;
    }

    .textfield > input {
        border: none;
        padding: 0.3rem 1rem;
        background: none;
    }
</style>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import SideMenu from './components/SideMenu.vue';

    @Component({
        components: {SideMenu}
    })
    export default class App extends Vue {
        private showMenu = false;
        private search = "";

        private created() {
            this.$store.commit('refreshGames');
            this.$store.commit('refreshTournaments');
        }

        @Watch('$route')
        private onRouteChanged() {
            this.showMenu = false;
        }
    }
</script>