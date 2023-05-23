import { Card } from "./Card";

export class Player {
    public health: number;
    public cards: Array<Card>;

    constructor() {
        this.health = 50;
        this.cards = [];
    }

    setHealth(value: number) {
        this.health = value;
    }

    getHealth(): number {
        return this.health;
    }
}