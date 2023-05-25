import { IGameController } from "../game/IGameController";
import { OffensivePhase } from "../phases/OffensivePhase";
import { EventType } from "../subscribers/EventType";
import { IAbilityView } from "./IAbilityView";

export class AbilityView implements IAbilityView {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.Roll) {
            return;
        }

        if (!(this.controller.phase instanceof OffensivePhase)) {
            return;
        }

        const diceValues = this.controller.dice.getValues();
        const currentPlayer = this.controller.players.getCurrentPlayer()
        const playable = currentPlayer.abilities.getPlayable(diceValues);

        console.log("Playable Abilities:")
        for (let i = 0; i < playable.length; i++) {
            if (playable[i]) {
                console.log(`${i+1}) ${currentPlayer.abilities.getName(i)}`);
            }
        }
    }
}