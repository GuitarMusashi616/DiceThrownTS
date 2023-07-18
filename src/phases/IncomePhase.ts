import { End } from "../event/End";
import { IEvent } from "../event/IEvent";
import { IGameController } from "../game/IGameController";
import { EndIncomeHandler } from "../handler/EndIncomeHandler";
import { IEventHandler } from "../handler/IEventHandler";
import { IPhase } from "./IPhase";

export class IncomePhase implements IPhase {
    private controller: IGameController;
    private endHandler: IEventHandler<End>;

    constructor(controller: IGameController) {
        this.controller = controller;
        this.endHandler = new EndIncomeHandler(controller);
    }

    getName(): string {
        return "Income Phase"
    }

    handle(event: IEvent): void {
        if (event instanceof End) {
            this.endHandler.handle(event);
            return;
        }
    }
}