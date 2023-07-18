import { End } from "../event/End";
import { IEvent } from "../event/IEvent";
import { Roll } from "../event/Roll";
import { IGameController } from "../game/IGameController";
import { EndDefensiveHandler } from "../handler/EndDefensiveHandler";
import { IEventHandler } from "../handler/IEventHandler";
import { RollHandler } from "../handler/RollHandler";
import { IPhase } from "./IPhase";

export class DefensivePhase implements IPhase {
    private controller: IGameController;
    // private toggleDieHandler: IEventHandler<ToggleDie>;
    private rollHandler: IEventHandler<Roll>;
    // private chooseAbilityHandler: IEventHandler<ChooseAbility>;
    // private pickCardHandler: IEventHandler<PickCard>;
    private endHandler: IEventHandler<End>;

    constructor(controller: IGameController) {
        this.controller = controller;
        this.rollHandler = new RollHandler(controller);
        this.endHandler = new EndDefensiveHandler(controller);
    }

    getName(): string {
        return "Defensive Phase"
    }

    handle(event: IEvent): void {
        if (event instanceof Roll) {
            this.rollHandler.handle(event);
            return;
        }
        // if (event instanceof ChooseAbility) {
        //     this.rollHandler.handle(ChooseAbility);
        //     return;
        // }
        // if (event instanceof PickCard) {
        //     this.pickCardHandler.handle(event);
        //     return;
        // }
        if (event instanceof End) {
            this.endHandler.handle(event);
            return;
        }
    }
}