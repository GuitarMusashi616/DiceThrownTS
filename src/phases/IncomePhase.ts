import { IEvent } from "../event/IEvent";
import { IGameController } from "../game/IGameController";
import { IPhase } from "./IPhase";

export class IncomePhase implements IPhase {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: IEvent): void {
        throw new Error("Method not implemented.");
    }
}