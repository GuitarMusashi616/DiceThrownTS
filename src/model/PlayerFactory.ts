import { ICardPile } from "./ICardPile";
import { IPlayerFactory } from "./IPlayerFactory";
import { IPlayerManager } from "./IPlayerManager";
import { Player } from "./Player";
import { PlayerManager } from "./PlayerManager";

const PLAYER_COUNT = 2;
const PLAYER_MAX_HEALTH = 50;
const STARTING_DRAW_CARD_COUNT = 4;

/**
 * Responsible for initializing players and configuring IPlayerManager
 */
export class PlayerFactory implements IPlayerFactory {
    private cardPile: ICardPile;

    constructor(cardPile: ICardPile) {
        this.cardPile = cardPile;
    }

    initPlayer(): Player {
        const player = new Player();
        player.health = PLAYER_MAX_HEALTH;
        for (let i = 0; i < STARTING_DRAW_CARD_COUNT; i++) {
            const card = this.cardPile.draw();
            player.cards.push(card);
        }
        return player
    }
    
    initPlayers(): Player[] {
        let players: Player[] = []

        for (let i = 0; i < PLAYER_COUNT; i++) {
            players.push(this.initPlayer());
        }

        return players
    }

    chooseWhoGoesFirst(players: Player[]): number {
        return Math.floor(Math.random() * players.length);
    }

    getPlayers(): IPlayerManager {
        const players = this.initPlayers();
        const whoseTurn = this.chooseWhoGoesFirst(players);
        const playerManager = new PlayerManager(players, whoseTurn);
        return playerManager
    }

}