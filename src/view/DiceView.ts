import { IGameController } from "../game/IGameController";
import { EventType } from "../subscribers/EventType";
import { IDiceView } from "./IDiceView";

export class DiceView implements IDiceView {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.Roll ) {
            return;
        }
        
        console.log(`dice has changed!\n${this.controller.dice.getValues()}`)
    }
}