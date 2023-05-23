import { Card } from "./Card";

/**
 * Parameter class for players
 */
export class Player {
    public health: number;
    public cp: number;
    public cards: Array<Card>;

    constructor() {
        this.health = 50;
        this.cards = [];
        this.cp = 0;
    }
}