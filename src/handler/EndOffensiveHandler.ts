import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { DefensivePhase } from "../phases/DefensivePhase";
import { IEventHandler } from "./IEventHandler";

export class EndOffensiveHandler implements IEventHandler<End> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: End): void {
        this.controller.phase = new DefensivePhase(this.controller);
    }
}