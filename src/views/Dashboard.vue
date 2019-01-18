<template>
    <div class="flex-col">
        <h1 class="">Nächste Turniere:</h1>
        <div class="h-full flex-grow flex-row flex-items-stretch">
            <div v-for="i in 4" class="w-64 flex-grow card flex-col">
                <img class="w-full" src="../../public/games/csgo/csgo_square.jpg"/>
                <div class="p-1">
                    <div class="flex-row flex-items-center">
                        <img class="w-16 h-16 p-1" src="https://img.icons8.com/ios-glyphs/50/ffffff/controller.png">
                        <h3>Counter Strike Go</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <img class="w-16 h-16 p-1" src="https://img.icons8.com/ios-glyphs/50/ffffff/trophy.png">
                        <h3>Turnier</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <img class="w-16 h-16 p-1" src="https://img.icons8.com/ios-glyphs/50/ffffff/place-marker.png">
                        <h3>Turnier Rechner</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <img class="w-16 h-16 p-1"
                             src="https://img.icons8.com/ios-glyphs/50/ffffff/conference-background-selected.png">
                        <h3>{{ i }} freie Plätze</h3>
                    </div>
                    <div class="flex-row flex-items-center">
                        <img class="w-16 h-16 p-1" src="https://img.icons8.com/ios-glyphs/50/ffffff/time-span.png">
                        <h3>in {{ i }} Minute(n)</h3>
                    </div>
                </div>
            </div>
            <div class="w-64 flex-grow card">
                <p class="p-1">Danach:</p>
                <div v-for="i in 5" class="flex-row flex-items-center">
                    <img class="w-16 h-16 p-1" src="../../public/games/csgo/csgo_square.jpg"/>
                    <p class="flex-grow">Counter Strike Go</p>
                    <p>in {{ i }} Minuten</p>
                </div>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>

<style>
    .card {
        margin: 1rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        box-shadow: 0 0 4rem rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 0 0 2rem rgba(255, 185, 0, 0.8);
    }

    .card > img {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
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
