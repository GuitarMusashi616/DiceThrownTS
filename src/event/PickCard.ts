import { Card } from "../model/Card";
import { IEvent } from "./IEvent";

export class PickCard implements IEvent {
    public card: Card;

    constructor(card: Card) {
        this.card = card
    }
}