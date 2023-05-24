import { ChooseAbility } from "../event/ChooseAbility";
import { End } from "../event/End";
import { IEvent } from "../event/IEvent";
import { PickCard } from "../event/PickCard";
import { Roll } from "../event/Roll";
import { ToggleDie } from "../event/ToggleDie";
import { IGameController } from "../game/IGameController";
import { IEventHandler } from "../handler/IEventHandler";
import { IPhase } from "./IPhase";

export class OffensivePhase implements IPhase {
    private controller: IGameController;
    // private toggleDieHandler: IEventHandler<ToggleDie>;
    // private rollHandler: IEventHandler<Roll>;
    // private chooseAbilityHandler: IEventHandler<ChooseAbility>;
    // private pickCardHandler: IEventHandler<PickCard>;
    // private endHandler: IEventHandler<End>;

    constructor (
        controller: IGameController, 
    ) {
        this.controller = controller;
        // this.toggleDieHandler = new ToggleDieHand;
        // this.rollHandler = rollHandler;
        // this.chooseAbilityHandler = chooseAbilityHandler;
        // this.pickCardHandler = pickCardHandler;
        // this.endHandler = endHandler;
    }

    handle(event: IEvent): void {
        // if (event instanceof ToggleDie) {
        //     this.toggleDieHandler.handle(ToggleDie);
        //     return;
        // }
        // if (event instanceof Roll) {
        //     this.rollHandler.handle(Roll);
        //     return;
        // }
        // if (event instanceof ChooseAbility) {
        //     this.rollHandler.handle(ChooseAbility);
        //     return;
        // }
        // if (event instanceof PickCard) {
        //     this.pickCardHandler.handle(event);
        //     return;
        // }
        // if (event instanceof End) {
        //     this.endHandler.handle(event);
        //     return;
        // }
    }
}