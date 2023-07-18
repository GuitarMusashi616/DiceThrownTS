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

    startup() {
        this.refresh();
    }

    refresh() {
        let label = document.getElementById(PHASE_VIEW_ID);
        if (label == null) {
            return;
        }
        let phaseName = this.controller.phase.getName();
        label.textContent = phaseName;
        console.log(phaseName);
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.NewPhase) {
            return;
        }
        this.refresh();
    }
}