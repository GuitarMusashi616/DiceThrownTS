import { Card } from "../model/Card";
import { IEvent } from "./IEvent";

export class PickCard implements IEvent {
    index: number;

    constructor(index: number) {
        this.index = index;
    }
}