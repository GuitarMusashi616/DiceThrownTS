import { ISubscriber } from "../subscribers/ISubsriber";

export interface IDiceView extends ISubscriber {
    click(whichDie: string): void,
    getToggledDice(): Array<boolean>,
    set(whichDie: string, num: number): void
}