<template>
    <div class="flex-col">
        <div class="flex-row">
            <div class="flex-col m-1 filter">
                <h1>Filter</h1>
                <div class="card">
                    <input v-model="filter"/>

                    <p>Nach Spielen filtern</p>
                    <div class="flex-row">
                        <img class="h-24 pr-1" src="../../public/games/csgo/cover.jpg"/>
                        <img class="h-24 pr-1" src="../../public/games/csgo/cover.jpg"/>
                        <img class="h-24 pr-1" src="../../public/games/csgo/cover.jpg"/>
                        <img class="h-24 pr-1" src="../../public/games/csgo/cover.jpg"/>
                        <img class="h-24 pr-1" src="../../public/games/csgo/cover.jpg"/>
                        <img class="h-24 pr-1" src="../../public/games/csgo/cover.jpg"/>
                    </div>

                    <p>Startzeit</p>
                    <div>
                        <input type="checkbox">
                        Started in 0 bis 15 Minuten
                    </div>
                    <div>
                        <input type="checkbox">
                        Started in 15 bis 30 Minuten
                    </div>
                    <div>
                        <input type="checkbox">
                        Started in 30 bis 60 Minuten
                    </div>
                    <div>
                        <input type="checkbox">
                        Started in 1 bis 2 Stunden
                    </div>
                </div>
            </div>
            <div class="flex-grow flex-col m-1">
                <h1>Turniere</h1>
                <table class="card" cellspacing="0" cellpadding="0">
                    <thead>
                    <tr>
                        <td>Spiel</td>
                        <td>Erstellt von</td>
                        <td>Teilnehmer</td>
                        <td>Startet in</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="t in $store.getters.getTorunamentsMatchingFilter(filter)"
                        @click="$router.push(`details?tournament=${t.title}`)">
                        <td>
                            <div class="flex-row flex-items-center">
                                <img class="h-24 pr-1" :src="t.game.coverimg"/>
                                <p>{{ t.title }}</p>
                            </div>
                        </td>
                        <td>
                            <div class="flex-row flex-items-center">
                                <img class="h-24 pr-1" src="https://img.icons8.com/ios/50/ffffff/name-filled.png">
                                <p>{{ t.creator.name }}</p>
                            </div>
                        </td>
                        <td>{{ 0 }} Teilnehmer</td>
                        <td>{{ t.time }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="h-32"></div>
    </div>
</template>

<style>
    .filter {
        /*position: fixed;*/
    }
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class TournamentSearch extends Vue {
        private filter: string = '';
    }
</script>
