import { IEvent } from "../event/IEvent";
import { PickCard } from "../event/PickCard";
import { SellCard } from "../event/SellCard";
import { IGameController } from "../game/IGameController";
import { Card } from "../model/Card";
import { Player } from "../model/Player";
import { IEventHandler } from "./IEventHandler";

export class SellCardHandler implements IEventHandler<SellCard> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: SellCard): void {
        let chosenCard = event.card;
        let player = this.controller.players.getCurrentPlayer()

        if (!this.hasInHand(player, chosenCard)) {
            return;
        }

        this.discard(player, chosenCard);
    }

    private hasInHand(player: Player, card: Card): boolean {
        return player.cards.includes(card);
    }

    private discard(player: Player, card: Card) {
        const index = player.cards.indexOf(card);
        player.cards.splice(index, 1);
    }
}