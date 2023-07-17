import { IGameController } from "../game/IGameController";
import { EventType } from "../subscribers/EventType";
import { ISubscriber } from "../subscribers/ISubsriber";
import { IPhaseView } from "./IPhaseView";

const PHASE_VIEW_ID: string = "phaseView"

export class PhaseView implements IPhaseView {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.NewPhase) {
            return;
        }
        let label = document.getElementById(PHASE_VIEW_ID);
        if (label == null) {
            return;
        }
        let phase = this.controller.phase.constructor.name;
        label.textContent = phase;
        console.log(phase);
    }
}