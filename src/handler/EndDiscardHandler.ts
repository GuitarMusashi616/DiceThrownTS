import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { UpkeepPhase } from "../phases/UpkeepPhase";
import { IEventHandler } from "./IEventHandler";

export class EndDiscardHandler implements IEventHandler<End> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: End): void {
        this.controller.phase = new UpkeepPhase(this.controller);
    }
}