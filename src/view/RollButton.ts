import { Roll } from "../event/Roll";
import { IGameController } from "../game/IGameController";
import { EventType } from "../subscribers/EventType";
import { IRollButton } from "./IRollButton";

export class RollButton implements IRollButton {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    click(whichDice: Array<boolean>): void {
        this.controller.handle(new Roll(whichDice))
    }
}