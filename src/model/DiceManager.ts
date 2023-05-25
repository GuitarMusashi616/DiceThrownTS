import { Die } from "./Die";
import { IDiceManager } from "./IDiceManager";

const NUM_DICE = 6;

export class DiceManager implements IDiceManager {
    private dice: Array<Die>

    constructor() {
        this.dice = Array.from({ length: NUM_DICE }, () => new Die());
    }

    getValues(): number[] {
        return this.dice.map(x => x.getValue())
    }

    roll(whichDice: boolean[]): void {
        if (whichDice.length != NUM_DICE) {
            return;
        }

        for (let i = 0; i < whichDice.length; i++) {
            if (whichDice[i]) {
                this.dice[i]!.roll();
            }
        }
    }
}