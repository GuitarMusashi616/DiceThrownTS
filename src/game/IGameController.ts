import { ICardPile } from "../model/ICardPile";
import { IGameData } from "../deprecated/IGameData";
import { IPlayerManager } from "../model/IPlayerManager";
import { IPhase } from "../phases/IPhase";
import { IEvent } from "../event/IEvent";
import { ICardExecutor } from "./ICardExecutor";
import { IEventManager } from "../subscribers/IEventManager";
import { IDiceManager } from "../model/IDiceManager";
import { ICombatResolver } from "../model/ICombatResolver";


/**
 * Handles events and exposes interfaces to control the game
 */
export interface IGameController {
    players: IPlayerManager;
    dice: IDiceManager;
    phase: IPhase;
    cardExecutor: ICardExecutor;
    events: IEventManager;
    combatResolver: ICombatResolver;


    handle(event: IEvent): void;
}