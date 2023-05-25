import { BarbarianDiceValues } from "../barbarian/BarbarianDiceValues";
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
        const diceValues = this.controller.dice.getValues();
        const dice = new BarbarianDiceValues(diceValues);
        
        console.log(`dice has changed!\n${diceValues}`)
        console.log(dice.toString())
    }
}