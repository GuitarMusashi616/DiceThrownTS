import { IFactory } from "../common/IFactory";
import { ICardPile } from "./ICardPile";
import { IPlayerManager } from "./IPlayerManager";
import { Player } from "./Player";
import { PlayerManager } from "./PlayerManager";

const PLAYER_MAX_HEALTH = 50;
const STARTING_DRAW_CARD_COUNT = 4;

/**
 * Responsible for initializing players and configuring IPlayerManager
 */
export class PlayerFactory implements IFactory<IPlayerManager> {
    private players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    initPlayer(player: Player) {
        player.health = PLAYER_MAX_HEALTH;
        for (let i = 0; i < STARTING_DRAW_CARD_COUNT; i++) {
            const card = player.cardPile.draw();
            player.cards.push(card);
        }
        return player
    }
    
    initPlayers() {
        for (const player of this.players) {
            this.initPlayer(player);
        }
    }

    chooseWhoGoesFirst(players: Player[]): number {
        return Math.floor(Math.random() * players.length);
    }

    create(): IPlayerManager {
        this.initPlayers();
        const whoseTurn = this.chooseWhoGoesFirst(this.players);
        const playerManager = new PlayerManager(this.players, whoseTurn);
        return playerManager
    }

}