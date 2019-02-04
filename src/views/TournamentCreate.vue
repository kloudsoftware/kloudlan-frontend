<template>
    <div class="flex-col">
        <div class="m-1 flex-col">
            <h1 class="m-1">Welches Spiel möchtest du spielen?</h1>
            <div class="game-list">
                <router-link to="details" v-for="game in $store.getters.getGames"
                             class="card card-hover image-hover-parent game-list-item">
                    <img class="image-normal" :src="game.coverimgbw"/>
                    <img class="image-hover" :src="game.coverimg"/>
                </router-link>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>

<style>
    .game-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .game-list > .card {
        width: 10%;
        margin: 1rem;
    }

    .game-list > .card > img {
        width: 100%;
        border-radius: inherit;
    }
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class TournamentCreate extends Vue {

    }
</script>
