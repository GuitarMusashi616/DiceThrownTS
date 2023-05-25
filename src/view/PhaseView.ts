import { IGameController } from "../game/IGameController";
import { EventType } from "../subscribers/EventType";
import { ISubscriber } from "../subscribers/ISubsriber";

export class PhaseView implements ISubscriber {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.NewPhase) {
            return;
        }
        console.log(this.controller.phase.constructor.name);
    }

}