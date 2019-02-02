<template>
    <div class="flex-col">
        <div class="m-1 flex-row flex-items-center">
            <h1 class="flex-grow">Counter Strike Global Offensive</h1>
            <h3>startet in:</h3>
            <h3>00:15</h3>
        </div>
        <div class="h-full flex-grow flex-row flex-items-stretch">
            <div class="w-64 m-1 card flex-grow">
                <img class="game-image" src="../../public/games/csgo/csgo_square_bw.jpg"/>
            </div>
            <div class="w-64 m-1 p-1 card flex-grow">
                <div class="flex-row">
                    <h2 class="flex-grow">Details</h2>
                    <button class="round-button">
                        <img src="https://img.icons8.com/ios/50/ffffff/edit.png">
                    </button>
                    <button class="round-button">
                        <img src="https://img.icons8.com/ios/50/ffffff/delete.png">
                    </button>
                </div>
                <table class="w-full">
                    <tr>
                        <td><b>Spiel</b></td>
                        <td>Counter Strike: Global Offensive</td>
                    </tr>
                    <tr>
                        <td><b>Modus</b></td>
                        <td>Ausscheidungs - Turnier</td>
                    </tr>
                    <tr>
                        <td><b>Ort</b></td>
                        <td>Turnierrechner</td>
                    </tr>
                    <tr>
                        <td><b>Erstellt von</b></td>
                        <td>Spieler 1</td>
                    </tr>
                    <tr>
                        <td><b>Startet</b></td>
                        <td>12:00</td>
                    </tr>
                </table>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div class="w-64 m-1 p-1 card flex-grow">
                <div class="flex-row">
                    <h2 class="flex-grow">Teams und Teilnehmer</h2>
                    <button class="round-button">
                        <img src="https://img.icons8.com/ios/50/ffffff/add-user-group-man-man.png">
                    </button>
                </div>
                <div class="player-list h-full">
                    <div v-for="i in 4">
                        <div class="flex-row">
                            <p class="flex-grow">Team {{ i }}</p>
                            <p>{{ i }} / 4 Spieler</p>
                        </div>
                        <div class="flex-row flex-items-center">
                            <div v-for="j in i">
                                <img src="https://img.icons8.com/ios/50/ffffff/name-filled.png">
                            </div>
                            <button class="round-button">
                                <img src="https://img.icons8.com/ios/50/ffffff/add-user-male.png">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>

<style>
    .game-image {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: inherit;
    }

    .player-list {
        /*overflow-y: scroll;*/
    }
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Tournament extends Vue {

    }
</script>
