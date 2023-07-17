import { IGameController } from "../game/IGameController";
import { OffensivePhase } from "../phases/OffensivePhase";
import { EventType } from "../subscribers/EventType";
import { IAbilitySelector } from "./IAbilitySelector";
import { IAbilityView } from "./IAbilityView";

export class AbilitySelector implements IAbilitySelector {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    select(index: number) {
        const currentPlayer = this.controller.players.getCurrentPlayer();
        const ability = currentPlayer.abilities.get(index);
        console.log(`ability ${index} selected: ${ability.constructor.name}`);
        ability.play(this.controller);
    }
}