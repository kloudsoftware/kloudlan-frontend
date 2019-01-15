<template>
    <div id="app">
        <nav class="navbar flex-row">
            <button class="kloud-button w-24 h-24">
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/menu.png">
            </button>
            <p class="flex-grow title">KloudLAN</p>
            <button class="kloud-button w-24 h-24">
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/search.png">
            </button>
            <button class="kloud-button w-24 h-24">
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/name.png">
            </button>
        </nav>
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
        <router-view/>
    </div>
</template>

<style src="./css/main.css"></style>
<style src="./css/flex.css"></style>
<style src="./css/sizes.css"></style>

<style>
    .navbar {
        background: #49494a;
        width: 100%;
        position: fixed;
    }

    .title {
        padding-left: 1rem;
        margin-top: auto;
        margin-bottom: auto;

        color: #ffffff;
        font-size: 1.2rem;
        text-align: left;
    }

</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {

    }
</script>