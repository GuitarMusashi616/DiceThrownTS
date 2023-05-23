import { Player } from "./Player";

export class GameData {
    private players: Array<Player>;
    private whoseTurn: number;

    constructor(players: Array<Player>) {
        this.players = players;
        this.whoseTurn = 0;
    }

    getCurrentPlayer() {
        return this.players[this.whoseTurn]
    }
}