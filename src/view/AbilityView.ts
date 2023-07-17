import { IGameController } from "../game/IGameController";
import { OffensivePhase } from "../phases/OffensivePhase";
import { EventType } from "../subscribers/EventType";
import { IAbilityView } from "./IAbilityView";

const ABILITY_IDS = [
    "ability1",
    "ability2",
    "ability3",
    "ability4",
    "ability5",
    "ability6",
    "ability7",
    "ability8",
]

export class AbilityView implements IAbilityView {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    notify(eventType: EventType): void {
        if (eventType === EventType.NewPhase) {
            this.resetHighlight();
        }
        if (eventType !== EventType.Roll) {
            return;
        }

        if (!(this.controller.phase instanceof OffensivePhase)) {
            return;
        }
        this.highlightPlayable();
    }

    resetHighlight() {
        for (let id of ABILITY_IDS) {
            let button = document.getElementById(id);
            if (button == null) {
                return;
            }
            button.style.border = '';
        }
    }

    highlightPlayable() {
        const diceValues = this.controller.dice.getValues();
        const currentPlayer = this.controller.players.getCurrentPlayer()
        const playable = currentPlayer.abilities.getPlayable(diceValues);

        console.log("Playable Abilities:")
        for (let i = 0; i < playable.length; i++) {
            if (playable[i]) {
                console.log(`${i+1}) ${currentPlayer.abilities.getName(i)}`);
            }

            this.highlight(ABILITY_IDS[i]!, playable[i]!);
        }
    }

    highlight(abilityButtonId: string, isPlayable: boolean) {
        let button = document.getElementById(abilityButtonId);
        if (button == null) {
            return;
        }
        if (isPlayable) {
            button.style.border = '2px solid green';
        }
        else {
            button.style.border = '2px solid red';
        }
    }
}