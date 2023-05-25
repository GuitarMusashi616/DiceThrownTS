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
        let player = this.controller.players.getCurrentPlayer()
        let chosenCard = this.getCard(player, event.index);

        if (chosenCard === undefined || this.cantAfford(player, chosenCard)) {
            return;
        }

        this.spendCPFor(player, chosenCard);
        this.discard(player, event.index);

        this.controller.cardExecutor.execute(player, chosenCard)
    }

    private getCard(player: Player, cardIndex: number): Card | undefined {
        return player.cards[cardIndex];
    }

    private cantAfford(player: Player, card: Card) {
        return card.cpCost > player.cp;
    }

    private spendCPFor(player: Player, card: Card): void {
        player.cp -= card.cpCost;
    }

    private discard(player: Player, cardIndex: number) {
        player.cards.splice(cardIndex, 1);
    }
}