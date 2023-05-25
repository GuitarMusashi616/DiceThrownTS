import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { DefensivePhase } from "../phases/DefensivePhase";
import { MainPhase } from "../phases/MainPhase";
import { IEventHandler } from "./IEventHandler";

export class EndDefensiveHandler implements IEventHandler<End> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: End): void {
        this.controller.phase = new MainPhase(this.controller, true);
    }
}