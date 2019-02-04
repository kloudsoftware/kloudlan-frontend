import {Player} from "@/types/player";
import {Tournament} from "@/types/tournament";

export type Team = {
    tournament: Tournament;
    players: Player[];
}