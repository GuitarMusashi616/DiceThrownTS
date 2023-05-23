import { ICardPile } from "../model/ICardPile";
import { IGameData } from "./IGameData";
import { Player } from "../model/Player";

export class GameData implements IGameData {
    private players: Array<Player>;
    private whoseTurn: number;
    private cardPile: ICardPile;

    constructor(players: Array<Player>, cardPile: ICardPile) {
        this.players = players;
        this.whoseTurn = 0;
    }

    getPlayers(): Player[] {
        return this.players
    }

    getCurrentPlayer() {
        return this.players[this.whoseTurn]
    }
}