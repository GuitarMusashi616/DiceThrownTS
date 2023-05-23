import { IEvent } from "../event/IEvent";
import { PickCard } from "../event/PickCard";
import { IGameController } from "../game/IGameController";
import { Card } from "../model/Card";
import { Player } from "../model/Player";
import { IEventHandler } from "./IEventHandler";

export class PickCardHandler implements IEventHandler<PickCard> {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(event: PickCard): void {
        let chosenCard = event.card;
        let player = this.controller.players.getCurrentPlayer()

        if (!this.hasInHand(player, chosenCard) || !this.canAfford(player, chosenCard)) {
            return;
        }

        this.spendCPFor(player, chosenCard);
        this.discard(player, chosenCard);
        this.controller.cardExecutor.execute(player, chosenCard)
    }

    private hasInHand(player: Player, card: Card): boolean {
        return player.cards.includes(card);
    }

    private canAfford(player: Player, card: Card): boolean  {
        return player.cp > card.cpCost;
    }

    private spendCPFor(player: Player, card: Card): void {
        player.cp -= card.cpCost;
    }

    private discard(player: Player, card: Card) {
        const index = player.cards.indexOf(card);
        player.cards.splice(index, 1);
    }
}