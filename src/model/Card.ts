import { CardType } from "./CardType";

/**
 * Parameter class for cards
 */
export class Card {
    name: string;
    description: string;
    type: CardType;
    cpCost: number;

    constructor(name: string, description: string, type: CardType, cpCost: number) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.cpCost = cpCost;
    }
}