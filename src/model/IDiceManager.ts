export interface IDiceManager {
    getValues(): Array<number>
    roll(whichDice: Array<boolean>): void;
}