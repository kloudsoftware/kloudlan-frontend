<template>
    <div class="flex-col p-4">
        <div class="h-full flex-grow flex-row flex-items-stretch">
            <div v-for="i in 4" class="w-64 flex-grow card m-1 card-hover flex-col">
                <img class="dashboard-image-bw" src="../../public/games/csgo/csgo_square_bw.jpg"/>
                <img class="dashboard-image-color" src="../../public/games/csgo/csgo_square.jpg"/>
                <div class="p-1">
                    <div class="flex-row flex-items-center">
                        <!--<img class="icon" src="https://img.icons8.com/ios-glyphs/50/ffffff/controller.png">-->
                        <h3>Counter Strike Go</h3>
                    </div>
                    <!--<div class="flex-row flex-items-center">-->
                    <!--<img class="icon" src="https://img.icons8.com/ios-glyphs/50/ffffff/trophy.png">-->
                    <!--<h3>Turnier</h3>-->
                    <!--</div>-->
                    <!--<div class="flex-row flex-items-center">-->
                    <!--<img class="icon" src="https://img.icons8.com/ios-glyphs/50/ffffff/place-marker.png">-->
                    <!--<h3>Turnier Rechner</h3>-->
                    <!--</div>-->
                    <div class="flex-row flex-items-center">
                        <!--<img class="icon"-->
                        <!--src="https://img.icons8.com/ios-glyphs/50/ffffff/conference-background-selected.png">-->
                        <h3>{{ i }} / 10 Teilnehmer</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <!--<img class="icon" src="https://img.icons8.com/ios-glyphs/50/ffffff/time-span.png">-->
                        <h3>in {{ i }} Minute(n)</h3>
                    </div>
                </div>
            </div>
            <div class="w-128 flex-grow flex-col">
                <div v-for="i in 7" class="card card-hover dashboard-list-item">
                    <img src="../../public/games/csgo/csgo_square_bw.jpg"/>
                    <p class="flex-grow">Counter Strike Go</p>
                    <p>in {{ i }} Minuten</p>
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
        margin: 1rem 1rem;
        display: flex;
        align-items: center;
        flex-grow: 1;
    }

    .dashboard-list-item > img {
        align-self: stretch;
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        height: 100%;
    }

    .dashboard-list-item > p {
        padding: 0 0.5rem;
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
