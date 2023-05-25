import { IAbility } from "../ability/IAbility";
import { IGameController } from "../game/IGameController";
import { BarbarianDiceValues } from "./BarbarianDiceValues";

export class FortitudeAbility implements IAbility {
    calcHeal(dice: BarbarianDiceValues): number {
        if (dice.heartCount() >= 5) {
            return 6;
        }
        if (dice.heartCount() >= 4) {
            return 5;
        }
        if (dice.heartCount() >= 3) {
            return 4;
        }
        return 0;
    }

    isPlayable(diceValues: number[]): boolean {
        const dice = new BarbarianDiceValues(diceValues);
        return dice.heartCount() >= 3;
    }
    play(controller: IGameController): void {
        const diceValues = controller.dice.getValues();
        const dice = new BarbarianDiceValues(diceValues);
        const healAmount = this.calcHeal(dice);
        controller.players.getCurrentPlayer().heal(healAmount);
    }

}