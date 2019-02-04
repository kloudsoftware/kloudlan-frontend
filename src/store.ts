import Vue from 'vue';
import Vuex from 'vuex';
import {Tournament} from "@/types/tournament";
import {Game} from "@/types/game";
import {Player} from "@/types/player";

Vue.use(Vuex);

class Store {
    tournaments: Tournament[] = [];
    games: Game[] = [];
    user: Player = {
        name: 'Malte',
        steamProfileURL: '',
        steamProfilePicture: '',
    };
}

export default new Vuex.Store({
    state: new Store(),
    getters: {
        getGames: state => {
            return state.games;
        },
        getAllTournaments: state => {
            return state.tournaments;
        },
        getNextTournaments: state => {
            return state.tournaments;
        },
        getTorunamentsMatchingFilter: state => (filter: string) => {
            return state.tournaments.filter(t => t.title.includes(filter));
        },
        getTournamentById: state => (id: string) => {
            return state.tournaments.filter(t => t.title === id)[0];
        }
    },
    mutations: {
        refreshGames(state) {
            console.log('Refreshing game list');
            state.games = [];
            state.games.push({
                name: 'Counter Strike',
                backgroundimg: require('./../public/games/csgo/background-1.jpg'),
                coverimgbw: require('./../public/games/csgo/cover-bw.jpg'),
                coverimg: require('./../public/games/csgo/cover.jpg'),
            });
            state.games.push({
                name: 'League of Legends',
                backgroundimg: require('./../public/games/lol/background-1.jpg'),
                coverimgbw: require('./../public/games/lol/cover-bw.jpg'),
                coverimg: require('./../public/games/lol/cover.jpg'),
            });
        },

        refreshTournaments(state) {
            for (let i = 1; i < 10; i++) {
                state.games.forEach(game => {
                    state.tournaments.push({
                        id: i,
                        title: `${game.name} Tournament ${i}`,
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                        game: game,
                        creator: state.user,
                        time: '12:00',
                        mode: 'Turnier',
                        location: 'Turnierrechner',
                        teams: [],
                    });
                });
            }
        },
    },
    actions: {
        login(context) {
            context.commit('refreshTournaments');
        }
    },
});
