import { IGameController } from "../game/IGameController";
import { EventType } from "../subscribers/EventType";
import { ISubscriber } from "../subscribers/ISubsriber";

export class EndView implements ISubscriber {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.NewPhase) {
            return
        }

        console.log(`New Phase: ${this.controller.phase.constructor.name}`)
    }
    
}