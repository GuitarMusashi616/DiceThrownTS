import { GameData } from "../deprecated/GameData";
import { IEvent } from "../event/IEvent";
import { ICardPile } from "../model/ICardPile";
import { ICombatResolver } from "../model/ICombatResolver";
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
    cardExecutor: ICardExecutor;
    events: IEventManager;
    combatResolver: ICombatResolver;
    phase: IPhase;

    constructor(players: IPlayerManager, dice: IDiceManager, cardExecutor: ICardExecutor, events: IEventManager, combatResolver: ICombatResolver) {
        this.players = players;
        this.dice = dice;
        this.cardExecutor = cardExecutor;
        this.events = events
        this.combatResolver = combatResolver;
        this.phase = new MainPhase(this, false);
    }

    handle(event: IEvent): void {
        this.phase.handle(event);
    }
}