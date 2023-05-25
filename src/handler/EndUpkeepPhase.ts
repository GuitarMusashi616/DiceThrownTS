import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { IncomePhase } from "../phases/IncomePhase";
import { UpkeepPhase } from "../phases/UpkeepPhase";
import { IEventHandler } from "./IEventHandler";

export class EndUpkeepHandler implements IEventHandler<End> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: End): void {
        this.controller.phase = new IncomePhase(this.controller);
    }
}