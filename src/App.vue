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

        <div v-if="showMenu" class="menu-background" @click="showMenu = false">
            <div class="menu flex-col" @click.stop="">
                <router-link class="menu-item" to="/">
                    <img src="https://img.icons8.com/ios/50/ffffff/home-page.png">
                    <p>Startseite</p>
                </router-link>
                <router-link class="menu-item" to="/create">
                    <img src="https://img.icons8.com/ios/50/ffffff/plus.png">
                    <p>Turnier erstellen</p>
                </router-link>
                <router-link class="menu-item" to="/search">
                    <img src="https://img.icons8.com/ios/50/ffffff/search.png">
                    <p>Turniere suchen</p>
                </router-link>
                <router-link class="menu-item" to="/search">
                    <img src="https://img.icons8.com/ios/50/ffffff/trophy.png">
                    <p>Meine Turniere</p>
                </router-link>
                <router-link class="menu-item" to="/profile">
                    <img src="https://img.icons8.com/ios/50/ffffff/user-male-circle.png">
                    <p>Mein Profil</p>
                </router-link>
                <router-link class="menu-item" to="/stats">
                    <img src="https://img.icons8.com/ios/50/ffffff/pie-chart.png">
                    <p>Statistiken</p>
                </router-link>
                <router-link class="menu-item" to="/settings">
                    <img src="https://img.icons8.com/ios/50/ffffff/settings.png">
                    <p>Einstellungen</p>
                </router-link>
                <router-link class="menu-item" to="/about">
                    <img src="https://img.icons8.com/ios/50/ffffff/about.png">
                    <p>Über KloudLAN</p>
                </router-link>
            </div>
        </div>

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

    .background {
        width: 100%;
        height: 100%;
        background: rgba(48, 48, 48, 0.8);
        position: fixed;
        z-index: -1;
    }

    .navbar {
        position: fixed;
        background: rgba(48, 48, 48, 1);
        width: 100%;
        padding: 0.5rem 0;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
        z-index: 100;
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
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .menu {
        padding-top: 5rem;
        height: 100%;
        background: rgba(48, 48, 48, 1);
        box-shadow: 0.25rem -0.5rem 0.5rem rgba(0, 0, 0, 0.4);
        width: 20rem;
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

    @Component({})
    export default class App extends Vue {
        private showMenu = false;
        private search = "";

        @Watch('$route')
        private onRouteChanged() {
            this.showMenu = false;
        }
    }
</script>