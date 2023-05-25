import { IPlayerManager } from "./IPlayerManager";

/**
 * Responsible for initializing players for example set health to 50, draw 4 cards, choose random person to go first
 */
export interface IPlayerFactory {
    getPlayerManager(): IPlayerManager
}