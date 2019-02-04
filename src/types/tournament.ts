import {Team} from "@/types/team";
import {Game} from "@/types/game";
import {Player} from "@/types/player";

export type Tournament = {
    id: number;
    title: string;
    description: string;
    game: Game;
    creator: Player;
    time: string;
    mode: string;
    location: string;
    teams: Team[];
}

export function dummyTournament(): Tournament {
    return {
        id: 0,
        title: '',
        description: '',
        game: {
            name: '',
            coverimgbw: '',
            coverimg: '',
            backgroundimg: '',
        },
        creator: {
            name: '',
            steamProfilePicture: '',
            steamProfileURL: '',
        },
        time: '',
        mode: '',
        location: '',
        teams: [],
    }
}