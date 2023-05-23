import { IPlayerManager } from "./IPlayerManager";
import { Player } from "./Player";

export class PlayerManager implements IPlayerManager {
    private players: Array<Player>;
    private whoseTurn: number;

    constructor(players: Array<Player>, whoseTurn: number) {
        this.players = players;
        this.whoseTurn = whoseTurn;
    }

    getPlayers(): Player[] {
        return this.players
    }

    getCurrentPlayer() {
        return this.players[this.whoseTurn]!
    }
}