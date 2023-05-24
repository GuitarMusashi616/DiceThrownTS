import { End } from "../event/End";
import { IGameController } from "../game/IGameController";
import { DiscardPhase } from "../phases/DiscardPhase";
import { OffensivePhase } from "../phases/OffensivePhase";
import { IEventHandler } from "./IEventHandler";

export class EndMainHandler implements IEventHandler<End> {
    private controller: IGameController;
    private hasDoneCombat: boolean;

    constructor(controller: IGameController, hasDoneCombat: boolean) {
        this.controller = controller;
        this.hasDoneCombat = hasDoneCombat;
    }

    handle(event: End): void {
        this.controller.phase = this.hasDoneCombat? new DiscardPhase(this.controller) : new OffensivePhase(this.controller);
    }
}