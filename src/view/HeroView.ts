import { assert } from "console";
import { IGameController } from "../game/IGameController";
import { MainPhase } from "../phases/MainPhase";
import { EventType } from "../subscribers/EventType";
import { ISubscriber } from "../subscribers/ISubsriber";
import { IHeroView } from "./IHeroView";

const ABILITY_BUTTON_IDS = [
    "ability1",
    "ability2",
    "ability3",
    "ability4",
    "ability5",
    "ability6",
    "ability7",
    "ability8",
]

// setup the ability names, change them when hero changes
export class HeroView implements IHeroView {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    startup() {
        const currentPlayer = this.controller.players.getCurrentPlayer()
        for (let i = 0; i < ABILITY_BUTTON_IDS.length; i++) {
            let abilityId = ABILITY_BUTTON_IDS[i]!;
            let abilityName = currentPlayer.abilities.getName(i);
            this.renameButton(abilityId, abilityName);
        }
    }

    renameButton(buttonId: string, newName: string) {
        let abilityButton = document.getElementById(buttonId);
        if (abilityButton == null) {
            return;
        }
        abilityButton.textContent = newName;
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.NewPhase) {
            return;
        }

        if (this.controller.phase instanceof MainPhase) {
            console.log("Refresh Abilities");
        }
    }
}