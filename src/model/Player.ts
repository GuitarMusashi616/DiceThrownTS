import { IAbilityManager } from "../ability/IAbilityManager";
import { Card } from "./Card";
import { ICardPile } from "./ICardPile";

const PLAYER_MAX_HEALTH = 50;

/**
 * Parameter class for players
 */
export class Player {
    public health: number;
    public cp: number;
    public cards: Array<Card>;
    public abilities: IAbilityManager;
    public cardPile: ICardPile;

    constructor(abilities: IAbilityManager, cardPile: ICardPile) {
        this.health = PLAYER_MAX_HEALTH;
        this.cards = [];
        this.cp = 0;
        this.abilities = abilities;
        this.cardPile = cardPile;
    }

    public heal(amount: number) {
        this.health = Math.min(this.health + amount, PLAYER_MAX_HEALTH);
        console.log(`player heals ${amount} health, ${this.health} hp remaining`)
    }

    public damage(amount: number) {
        this.health = Math.max(this.health - amount, 0);
        console.log(`player takes ${amount} dmg, ${this.health} hp remaining`)
    }
}