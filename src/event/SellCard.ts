import { Card } from "../model/Card";
import { IEvent } from "./IEvent";

export class SellCard implements IEvent {
    card: Card;

    constructor(card: Card) {
        this.card = card
    }
}