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
                name: 'Apex Legends',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/apex-legends.jpg'),
                coverimg: require('./../public/games/boxart/apex-legends.jpg'),
            });
            state.games.push({
                name: 'Beat Saber',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/beat-saber.jpg'),
                coverimg: require('./../public/games/boxart/beat-saber.jpg'),
            });
            state.games.push({
                name: 'Battlefield V',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/bf5.jpg'),
                coverimg: require('./../public/games/boxart/bf5.jpg'),
            });
            state.games.push({
                name: 'Borderlands 2',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/borderlands-2.jpg'),
                coverimg: require('./../public/games/boxart/borderlands-2.jpg'),
            });
            state.games.push({
                name: 'Counter Strike: Global Offensive',
                // backgroundimg: require('./../public/games/csgo/background-1.jpg'),
                backgroundimg: 'https://steamcdn-a.akamaihd.net/steam/apps/730/page_bg_generated.jpg',
                coverimgbw: require('./../public/games/boxart/csgo.jpg'),
                coverimg: require('./../public/games/boxart/csgo.jpg'),
            });
            state.games.push({
                name: 'DayZ',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/dayz.jpg'),
                coverimg: require('./../public/games/boxart/dayz.jpg'),
            });
            state.games.push({
                name: 'Dead by Daylight',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/dead-by-daylight.jpg'),
                coverimg: require('./../public/games/boxart/dead-by-daylight.jpg'),
            });
            state.games.push({
                name: 'Dota 2',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/dota-2.jpg'),
                coverimg: require('./../public/games/boxart/dota-2.jpg'),
            });
            state.games.push({
                name: 'Euro Truck Simulator 2',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/euro-truck-simulator-2.jpg'),
                coverimg: require('./../public/games/boxart/euro-truck-simulator-2.jpg'),
            });
            state.games.push({
                name: 'Farming Simulator 19',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/farming-simulator-19.jpg'),
                coverimg: require('./../public/games/boxart/farming-simulator-19.jpg'),
            });
            state.games.push({
                name: 'Fortnite',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/fortnite.jpg'),
                coverimg: require('./../public/games/boxart/fortnite.jpg'),
            });
            state.games.push({
                name: 'GTA V',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/gtav.jpg'),
                coverimg: require('./../public/games/boxart/gtav.jpg'),
            });
            state.games.push({
                name: 'Hearthstone',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/hearthstone.jpg'),
                coverimg: require('./../public/games/boxart/hearthstone.jpg'),
            });
            state.games.push({
                name: 'Heros of the Storm',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/hots.jpg'),
                coverimg: require('./../public/games/boxart/hots.jpg'),
            });
            state.games.push({
                name: 'League of Legends',
                backgroundimg: require('./../public/games/lol/background-1.jpg'),
                coverimgbw: require('./../public/games/boxart/lol.jpg'),
                coverimg: require('./../public/games/boxart/lol.jpg'),
            });
            state.games.push({
                name: 'Minecraft',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/minecraft.jpg'),
                coverimg: require('./../public/games/boxart/minecraft.jpg'),
            });
            state.games.push({
                name: 'Monster Hunter World',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/monster-hunter-world.jpg'),
                coverimg: require('./../public/games/boxart/monster-hunter-world.jpg'),
            });
            state.games.push({
                name: 'Overwatch',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/overwatch.jpg'),
                coverimg: require('./../public/games/boxart/overwatch.jpg'),
            });
            state.games.push({
                name: 'Player Unknowns Battlegrounds',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/pubg.jpg'),
                coverimg: require('./../public/games/boxart/pubg.jpg'),
            });
            state.games.push({
                name: 'Rainbow Six Siege',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/rainbow-six-siege.jpg'),
                coverimg: require('./../public/games/boxart/rainbow-six-siege.jpg'),
            });
            state.games.push({
                name: 'Rocket League',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/rocket-league.jpg'),
                coverimg: require('./../public/games/boxart/rocket-league.jpg'),
            });
            state.games.push({
                name: 'Starcraft 2',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/starcraft-2.jpg'),
                coverimg: require('./../public/games/boxart/starcraft-2.jpg'),
            });
            state.games.push({
                name: 'Super Smash Bros',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/super-smash-bros.jpg'),
                coverimg: require('./../public/games/boxart/super-smash-bros.jpg'),
            });
            state.games.push({
                name: 'The Division',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/the-division.jpg'),
                coverimg: require('./../public/games/boxart/the-division.jpg'),
            });
            state.games.push({
                name: 'Warcraft 3',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/warcraft-3.jpg'),
                coverimg: require('./../public/games/boxart/warcraft-3.jpg'),
            });
            state.games.push({
                name: 'Warframe',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/warframe.jpg'),
                coverimg: require('./../public/games/boxart/warframe.jpg'),
            });
            state.games.push({
                name: 'World of Tanks',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/world-of-tanks.jpg'),
                coverimg: require('./../public/games/boxart/world-of-tanks.jpg'),
            });
            state.games.push({
                name: 'World of Warships',
                backgroundimg: require('./../public/background/generic.jpg'),
                coverimgbw: require('./../public/games/boxart/world-of-warships.jpg'),
                coverimg: require('./../public/games/boxart/world-of-warships.jpg'),
            });
        },

        refreshTournaments(state) {
            for (let i = 1; i < 2; i++) {
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
