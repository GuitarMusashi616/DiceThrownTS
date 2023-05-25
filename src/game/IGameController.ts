import { ICardPile } from "../model/ICardPile";
import { IGameData } from "../deprecated/IGameData";
import { IPlayerManager } from "../model/IPlayerManager";
import { IPhase } from "../phases/IPhase";
import { IEvent } from "../event/IEvent";
import { ICardExecutor } from "./ICardExecutor";
import { IEventManager } from "../subscribers/IEventManager";
import { IDiceManager } from "../model/IDiceManager";


/**
 * Handles events and exposes interfaces to control the game
 */
export interface IGameController {
    players: IPlayerManager;
    dice: IDiceManager;
    cardPile: ICardPile;
    phase: IPhase;
    cardExecutor: ICardExecutor;
    events: IEventManager;


    handle(event: IEvent): void;
}