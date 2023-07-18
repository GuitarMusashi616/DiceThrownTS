import { End } from "../event/End";
import { IEvent } from "../event/IEvent";
import { SellCard } from "../event/SellCard";
import { IGameController } from "../game/IGameController";
import { EndDiscardHandler } from "../handler/EndDiscardHandler";
import { IEventHandler } from "../handler/IEventHandler";
import { SellCardHandler } from "../handler/SellCardHandler";
import { EventType } from "../subscribers/EventType";
import { IPhase } from "./IPhase";

export class DiscardPhase implements IPhase {
    private controller: IGameController;
    private sellCardHandler: IEventHandler<SellCard>;
    private endHandler: IEventHandler<End>;

    constructor(controller: IGameController) {
        this.controller = controller;
        this.sellCardHandler = new SellCardHandler(controller);
        this.endHandler = new EndDiscardHandler(controller);
    }

    getName(): string {
        return "Discard Phase"
    }

    handle(event: IEvent): void {
        if (event instanceof SellCard) {
            this.sellCardHandler.handle(event);
            return;
        }
        if (event instanceof End) {
            this.endHandler.handle(event);
            this.controller.events.notify(EventType.NewPhase);
            return;
        }
    }
    
}