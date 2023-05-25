import { IEvent } from "./IEvent";

export class Roll implements IEvent {
    whichDice: boolean[];

    constructor(whichDice: boolean[]) {
        this.whichDice = whichDice;
    }
}