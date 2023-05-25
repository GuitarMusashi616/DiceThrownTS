import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { IEndButton } from "./IEndButton";

export class EndButton implements IEndButton {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    click(): void {
        const event = new End();
        this.controller.handle(event);
    }
}