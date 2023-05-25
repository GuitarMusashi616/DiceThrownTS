import { IEvent } from "../event/IEvent";
import { PickCard } from "../event/PickCard";
import { Roll } from "../event/Roll";
import { SellCard } from "../event/SellCard";
import { IGameController } from "../game/IGameController";
import { Card } from "../model/Card";
import { Player } from "../model/Player";
import { EventType } from "../subscribers/EventType";
import { IEventHandler } from "./IEventHandler";

export class RollHandler implements IEventHandler<Roll> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: Roll): void {
        this.controller.dice.roll(event.whichDice);
        this.controller.events.notify(EventType.Roll);
    }
}