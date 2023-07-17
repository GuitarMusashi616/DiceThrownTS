import { IAbility } from "../ability/IAbility";
import { IGameController } from "../game/IGameController";
import { BarbarianDiceValues } from "./BarbarianDiceValues";


export class RecklessAbility implements IAbility {
    private calcDmg(dice: BarbarianDiceValues): number {
        if (dice.swordCount() >= 5) {
            return 8;
        }
        if (dice.swordCount() >= 4) {
            return 6;
        }
        if (dice.swordCount() >= 3) {
            return 4;
        }
        return 0;
    }

    isPlayable(diceValues: number[]): boolean {
        const dice = new BarbarianDiceValues(diceValues);
        return dice.swordCount() >= 3;
    }

    play(controller: IGameController): void {
        const diceValues = controller.dice.getValues();
        const dice = new BarbarianDiceValues(diceValues);
        controller.combatResolver.initialAttack = this.calcDmg(dice);
    }
}