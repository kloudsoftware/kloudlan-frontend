<template>
    <div id="app" class="app">
        <nav class="navbar flex-row">
            <button class="navbar-button w-24 h-24">
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/menu.png">
            </button>
            <p class="flex-grow title">KloudLAN</p>
            <div class="textfield">
                <input v-model="search" placeholder="Nach Turnieren suchen"/>
            </div>
            <button class="navbar-button w-24 h-24">
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/search.png">
            </button>
            <button class="navbar-button w-24 h-24">
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/name.png">
            </button>
        </nav>
        <div class="flex-col h-full">
            <!--spacer to move content below navbar-->
            <div class="h-32"></div>
            <router-view class="flex-grow"/>
        </div>
    </div>
</template>

<style src="./css/main.css"></style>
<style src="./css/flex.css"></style>
<style src="./css/sizes.css"></style>

<style>

    .app {
        height: 100vh;
        background: rgba(48, 48, 48, 0.8);
    }

    .navbar {
        background: rgba(48, 48, 48, 0.9);
        width: 100%;
        position: fixed;
        padding: 0.5rem 0;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
    }

    .navbar-button {
        background: none;
        border: none;
        border-radius: 2rem;
        padding: 0.65rem;
        cursor: pointer;
    }

    .navbar-button > img {
        width: 100%;
        height: 100%;
    }

    .navbar-button:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .title {
        padding-left: 1rem;
        margin-top: auto;
        margin-bottom: auto;

        color: #ffffff;
        font-size: 1.2rem;
        text-align: left;
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
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {
        private search = "";
    }
</script>