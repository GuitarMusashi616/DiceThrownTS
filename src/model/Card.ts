import { CardType } from "./CardType";

/**
 * Parameter class for cards
 */
export class Card {
    name: string;
    type: CardType;
    cpCost: number;

    constructor(name: string, type: CardType, cpCost: number) {
        this.name = name;
        this.type = type;
        this.cpCost = cpCost;
    }
}