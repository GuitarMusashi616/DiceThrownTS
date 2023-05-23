import { GameData } from "../deprecated/GameData";
import { IEvent } from "../event/IEvent";
import { ICardPile } from "../model/ICardPile";
import { IPlayerManager } from "../model/IPlayerManager";
import { IPhase } from "../phases/IPhase";
import { MainPhase } from "../phases/MainPhase";
import { SetupPhase } from "../phases/SetupPhase";
import { ICardExecutor } from "./ICardExecutor";
import { IGameController } from "./IGameController";

/**
 * Exposes interfaces to states which do stuff specific to their state
 */
export class GameController implements IGameController {
    players: IPlayerManager;
    cardPile: ICardPile;
    cardExecutor: ICardExecutor;
    phase: IPhase;

    constructor(players: IPlayerManager, cardPile: ICardPile, cardExecutor: ICardExecutor) {
        this.players = players;
        this.cardPile = cardPile;
        this.cardExecutor = cardExecutor;
        this.phase = new MainPhase(this);
    }

    handle(event: IEvent): void {
        this.phase.handle(event);
    }
}