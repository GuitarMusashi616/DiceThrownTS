import { Card } from "./Card";
import { CardType } from "./CardType";
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
            new Card(
                "FEELIN' GOOD!", 
                "Roll 3 <Dice>:\nHeal <1Heart> + <2Heart> x <HeartDice>.", 
                CardType.InstantAction, 
                0,
            ),
            new Card(
                "TRANSFERENCE!",
                "Transfer 1 status effect token\nfrom a chosen player to another\nchosen player.",
                CardType.MainPhaseAction,
                2,
            ),
            new Card(
                "WHAT STATUS EFFECTS?",
                "Remove all status effect tokens\nfrom a chosen player",
                CardType.MainPhaseAction,
                2,
            ),
            new Card(
                "VEGAS BABY!",
                "Roll 1 <Dice>:\nGame 1/2 the value as <CP>\n(rounded up).",
                CardType.MainPhaseAction,
                0,
            ),
            new Card(
                "GET THAT OUTA HERE!",
                "Remove a status effect\ntoken from a chosen player.",
                CardType.MainPhaseAction,
                1,
            ),
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