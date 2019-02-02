<template>
    <div class="flex-col">
        <div class="m-1 flex-col">
            <h1 class="m-1">Welches Spiel möchtest du spielen?</h1>
            <div class="game-list">
                <router-link to="details" v-for="i in 20" class="card card-hover image-hover-parent game-list-item">
                    <img class="image-normal" src="../../public/games/lol/cover-bw.jpg"/>
                    <img class="image-hover" src="../../public/games/lol/cover.jpg"/>
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
