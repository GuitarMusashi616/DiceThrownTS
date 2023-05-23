import { Player } from "./Player"

/**
 * Keeps track of the players and whose turn it is
 */
export interface IPlayerManager {
    getPlayers(): Player[];
    getCurrentPlayer(): Player;
}