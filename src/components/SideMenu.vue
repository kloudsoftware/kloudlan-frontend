<template>
    <div v-if="show" class="menu-background" @click="hide()">
        <div class="menu open-menu-animation flex-col" @click.stop="">
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
</template>

<style>
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
</style>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component({})
    export default class SideMenu extends Vue {

        @Prop({default: 'false'})
        private show = false;

        @Watch('$route')
        private onRouteChanged() {
            this.hide();
        }

        private hide() {
            this.$emit('menu-closed');
        }
    }
</script>