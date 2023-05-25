import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { IncomePhase } from "../phases/IncomePhase";
import { MainPhase } from "../phases/MainPhase";
import { UpkeepPhase } from "../phases/UpkeepPhase";
import { IEventHandler } from "./IEventHandler";

export class EndIncomeHandler implements IEventHandler<End> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: End): void {
        this.controller.phase = new MainPhase(this.controller, false);
    }
}