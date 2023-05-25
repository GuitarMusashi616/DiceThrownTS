import { GameData } from "../deprecated/GameData";
import { IEvent } from "../event/IEvent";
import { ICardPile } from "../model/ICardPile";
import { IDiceManager } from "../model/IDiceManager";
import { IPlayerManager } from "../model/IPlayerManager";
import { IPhase } from "../phases/IPhase";
import { MainPhase } from "../phases/MainPhase";
import { IEventManager } from "../subscribers/IEventManager";
import { ICardExecutor } from "./ICardExecutor";
import { IGameController } from "./IGameController";

/**
 * Exposes interfaces to states which do stuff specific to their state
 */
export class GameController implements IGameController {
    players: IPlayerManager;
    dice: IDiceManager;
    cardPile: ICardPile;
    cardExecutor: ICardExecutor;
    events: IEventManager;
    phase: IPhase;

    constructor(players: IPlayerManager, dice: IDiceManager, cardPile: ICardPile, cardExecutor: ICardExecutor, events: IEventManager) {
        this.players = players;
        this.dice = dice;
        this.cardPile = cardPile;
        this.cardExecutor = cardExecutor;
        this.events = events
        this.phase = new MainPhase(this, false);
    }

    handle(event: IEvent): void {
        this.phase.handle(event);
    }
}