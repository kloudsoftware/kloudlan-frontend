<template>
    <div class="flex-col p-4">
        <div class="h-full flex-grow flex-row flex-items-stretch">
            <router-link to="details" v-for="i in 4" class="w-64 flex-grow card m-1 card-hover flex-col">
                <img class="dashboard-image-bw" src="../../public/games/csgo/csgo_square_bw.jpg"/>
                <img class="dashboard-image-color" src="../../public/games/csgo/csgo_square.jpg"/>
                <div class="p-1">
                    <div class="flex-row flex-items-center">
                        <h3>Counter Strike Go</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <h3>{{ i }} / 10 Teilnehmer</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <h3>in {{ i }} Minute(n)</h3>
                    </div>
                </div>
            </router-link>
            <div class="w-128 p-1 flex-grow">
                <div class="card flex-col h-full">
                    <div v-for="i in 7" class="card-hover dashboard-list-item">
                        <img src="../../public/games/csgo/csgo_square_bw.jpg"/>
                        <p class="flex-grow">Counter Strike Go</p>
                        <p>in {{ i }} Minuten</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>

<style>
    .dashboard-image-bw {
        width: 100%;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
    }

    .dashboard-image-color {
        width: 100%;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        display: none;
    }

    .card:hover .dashboard-image-bw {
        display: none;
    }

    .card:hover .dashboard-image-color {
        display: block;
    }

    .dashboard-list-item {
        height: 5rem;
        margin: 0.5rem 0;
        display: flex;
        align-items: center;
        flex-grow: 1;
    }

    .dashboard-list-item > img {
        margin-left: 1rem;
        align-self: stretch;
        /*border-top-left-radius: 0.3rem;*/
        /*border-bottom-left-radius: 0.3rem;*/
        height: 100%;
    }

    .dashboard-list-item > p {
        margin: 0 0.5rem;
    }

    .timer {
        font-size: 3rem;
        color: white;
    }
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Dashboard extends Vue {

    }
</script>
