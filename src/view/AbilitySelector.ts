import { IGameController } from "../game/IGameController";
import { OffensivePhase } from "../phases/OffensivePhase";
import { EventType } from "../subscribers/EventType";
import { IAbilityView } from "./IAbilityView";

export class AbilitySelector {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    select(index: number) {
        const currentPlayer = this.controller.players.getCurrentPlayer();
        const ability = currentPlayer.abilities.get(index);
        ability.play(this.controller);
    }
}