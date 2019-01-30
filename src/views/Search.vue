<template>
    <div class="content flex-col">
        <h1 class="">Suchergebnisse</h1>
        <div class="h-full flex-grow flex-col flex-items-stretch">
            <div v-for="i in 10" class="h-32 card card-hover flex-col">
                <img class="w-16 h-16" src="../../public/games/csgo/csgo_square.jpg"/>
            </div>
        </div>
        <div class="h-32"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Search extends Vue {

    }
</script>
