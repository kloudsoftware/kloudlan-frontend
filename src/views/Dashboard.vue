<template>
    <div class="flex-col">
        <div class="h-full flex-grow flex-row flex-items-stretch">
            <router-link to="details" v-for="i in 4"
                         class="w-64 flex-grow card m-1 card-hover flex-col image-hover-parent">
                <img class="dashboard-image image-normal" src="../../public/games/csgo/cover-bw.jpg"/>
                <img class="dashboard-image image-hover" src="../../public/games/csgo/cover.jpg"/>
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
                    <div v-for="i in 7" class="card-hover dashboard-list-item image-hover-parent">
                        <img class="image-normal" src="../../public/games/csgo/cover-bw.jpg"/>
                        <img class="image-hover" src="../../public/games/csgo/cover.jpg"/>
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
    .dashboard-image {
        width: 100%;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
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
