import { End } from "../event/End";
import { IEvent } from "../event/IEvent";
import { PickCard } from "../event/PickCard";
import { SellCard } from "../event/SellCard";
import { IGameController } from "../game/IGameController";
import { EndMainHandler } from "../handler/EndMainHandler";
import { IEventHandler } from "../handler/IEventHandler";
import { PickCardHandler } from "../handler/PickCardHandler";
import { SellCardHandler } from "../handler/SellCardHandler";
import { IPhase } from "./IPhase";

/**
 * Main Phase
 * display cards to player
 * valid events: pick card or sell cards or end turn 
 * - pick card: hero upgrades or main phase action
 */
export class MainPhase implements IPhase {
    private controller: IGameController;
    private pickCardHandler: IEventHandler<PickCard>;
    private sellCardHandler: IEventHandler<SellCard>;
    private endHandler: IEventHandler<End>;

    constructor (
        controller: IGameController, 
        hasDoneCombat: boolean,
    ) {
        this.controller = controller;
        this.pickCardHandler = new PickCardHandler(this.controller);
        this.sellCardHandler = new SellCardHandler(this.controller);
        this.endHandler = new EndMainHandler(this.controller, hasDoneCombat);
    }

    getName(): string {
        return "Main Phase"
    }

    handle(event: IEvent): void {
        if (event instanceof PickCard) {
            this.pickCardHandler.handle(event);
            return;
        }
        if (event instanceof SellCard) {
            this.sellCardHandler.handle(event);
            return;
        }
        if (event instanceof End) {
            this.endHandler.handle(event);
            return;
        }
    }
}