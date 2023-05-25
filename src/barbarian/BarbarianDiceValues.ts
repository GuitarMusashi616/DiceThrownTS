export class BarbarianDiceValues {
    private diceValues: number[];

    constructor(diceValues: number[]) {
        this.diceValues = diceValues;
    }

    swordCount(): number {
        return this.diceValues.filter(x => x === 1 || x === 2 || x === 3).length
    }
    heartCount(): number {
        return this.diceValues.filter(x => x === 4 || x === 5).length
    }
    starCount(): number {
        return this.diceValues.filter(x => x === 6).length
    }

    toString(): string[] {
        return this.diceValues.map(x => {
            if (x <= 3) {
                return 'Sword'
            }
            if (x <= 5) {
                return 'Heart'
            }
            return 'Star'
        })
    }
}