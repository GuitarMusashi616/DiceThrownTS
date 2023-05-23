import { Card } from "./Card";
import { ICardPile } from "./ICardPile";

export class CardPile implements ICardPile {
    private drawPile: Card[];
    private discardPile: Card[];

    constructor() {
        this.drawPile = this.initDrawPile();
        this.discardPile = [];
    }

    private initDrawPile(): Card[] {
        const drawPile = [
            new Card('card 1', CardType.HeroUpgrade, 3),
            new Card('card 2', CardType.MainPhaseAction, 2),
        ]

        this.shuffle<Card>(drawPile);
        return drawPile;
    }

    private shuffle<T>(array: Array<T>): void {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex]!;
            array[randomIndex] = temporaryValue!;
        }
    }

    private reshufflePiles() {
        this.drawPile.push(...this.discardPile);
        this.discardPile = []
        this.shuffle<Card>(this.drawPile);
    }

    draw(): Card {
        if (this.drawPile.length <= 0) {
            this.reshufflePiles();
        }
        const card = this.drawPile.pop()!;
        this.discardPile.push(card);
        return card;
    }
}