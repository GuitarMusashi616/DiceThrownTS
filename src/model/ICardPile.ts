import { Card } from "./Card";

export interface ICardPile {
    draw(): Card;
}