import { End } from "../event/End";
import { IEvent } from "../event/IEvent";
import { IGameController } from "../game/IGameController";
import { EndUpkeepHandler } from "../handler/EndUpkeepPhase";
import { IEventHandler } from "../handler/IEventHandler";
import { IPhase } from "./IPhase";

export class UpkeepPhase implements IPhase {
    private controller: IGameController;
    private endHandler: IEventHandler<End>;

    constructor(controller: IGameController) {
        this.controller = controller;
        this.endHandler = new EndUpkeepHandler(controller);
    }

    getName(): string {
        return "Upkeep Phase"
    }

    handle(event: IEvent): void {
        if (event instanceof End) {
            this.endHandler.handle(event);
            return;
        }
    }
}