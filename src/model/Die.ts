const DIE_MIN_VAL = 1
const DIE_MAX_VAL = 6

export class Die {
    private value: number;

    constructor() {
        this.value = -1;
    }

    getValue(): number {
        return this.value;
    }

    roll(): void {
        this.value = Math.floor(Math.random() * DIE_MAX_VAL) + DIE_MIN_VAL;
    }
}