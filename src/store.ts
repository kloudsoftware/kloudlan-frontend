import Vue from 'vue';
import Vuex from 'vuex';
import {Tournament} from "@/types/tournament";
import {Game} from "@/types/game";

Vue.use(Vuex);

class Store {
    tournaments: Tournament[] = [];
    games: Game[] = [];
}

export default new Vuex.Store({
    state: new Store(),
    getters: {
        getTournaments: state => {
            return state.tournaments;
        },
        getGames: state => {
            return state.games;
        },
    },
    mutations: {
        refreshGames(state) {
            console.log('Refreshing game list');
            state.games = [];
            state.games.push({
                name: 'Counter Strike',
                backgroundimg: require('./../public/games/csgo/background-1.jpg'),
                coverimgbw: require('./../public/games/csgo/cover.jpg'),
                coverimg: require('./../public/games/csgo/cover-bw.jpg'),
            });
            state.games.push({
                name: 'League of Legends',
                backgroundimg: require('./../public/games/lol/background-1.jpg'),
                coverimgbw: require('./../public/games/lol/cover.jpg'),
                coverimg: require('./../public/games/lol/cover-bw.jpg'),
            });
        },

        refreshTournaments(state) {
            // const newTournament = {
            //     game: 'Tournament X',
            //     players: 12,
            // }
        },
    },
    actions: {
        login(context) {
            context.commit('refreshTournaments');
        }
    },
});
