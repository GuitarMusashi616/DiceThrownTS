import { ICardPile } from "../model/ICardPile";
import { IGameData } from "../deprecated/IGameData";
import { IPlayerManager } from "../model/IPlayerManager";
import { IPhase } from "../phases/IPhase";
import { IEvent } from "../event/IEvent";
import { ICardExecutor } from "./ICardExecutor";


/**
 * Handles events and exposes interfaces to control the game
 */
export interface IGameController {
    players: IPlayerManager;
    cardPile: ICardPile;
    phase: IPhase;
    cardExecutor: ICardExecutor;


    handle(event: IEvent): void;
}