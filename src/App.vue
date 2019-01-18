<template>
    <div id="app" class="h-screen">
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
    .navbar {
        background: rgba(0, 0, 0, 0.6);
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