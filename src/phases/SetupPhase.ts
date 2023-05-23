export class SetupPhase implements IPhase {
    private controller: IGameController;

    constructor(controller: IGameController) {
        this.controller = controller;
    }

    handle(): void {
        const players = this.controller.model.getPlayers();
        for (const player in players) {
            player.setHealth(50);
            this.drawCards(player);
        }
    }

    drawCards(player: Player, count: number): void {
        for (let i = 0; i < count; i++) {
            const card = this.cardPile.draw();
            player.addCard(card);
        }
    }

    randNumBetween(min: number, max: number): number {
        return Math.floor(Math.random() * max) + min;
    }

    chooseWhoGoesFirst() {
        const numPlayers = this.controller.model.getPlayerCount();
        const whoseTurn = this.randNumBetween(0, numPlayers);
        this.controller.model.setWhoseTurn(whoseTurn);
    }
}