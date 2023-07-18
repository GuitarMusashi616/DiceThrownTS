import { IAbility } from "../ability/IAbility";
import { IGameController } from "../game/IGameController";
import { BarbarianDiceValues } from "./BarbarianDiceValues";

export class SturdyBlowAbility implements IAbility {
    getName(): string {
        return "Sturdy Blow"
    }

    private calcDmg(dice: BarbarianDiceValues): number {
        return 4
    }

    isPlayable(diceValues: number[]): boolean {
        const dice = new BarbarianDiceValues(diceValues);
        return dice.swordCount() >= 2 && dice.starCount() >= 2;
    }

    play(controller: IGameController): void {
        const diceValues = controller.dice.getValues();
        const dice = new BarbarianDiceValues(diceValues);
        controller.combatResolver.initialAttackTrueDmg = this.calcDmg(dice);
    }

}