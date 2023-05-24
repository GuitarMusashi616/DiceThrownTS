// import { IGameController } from "../game/IGameController";
// import { Player } from "../model/Player";
// import { IPhase } from "./IPhase";


// const PLAYER_MAX_HEALTH = 50;
// const STARTING_DRAW_CARD_COUNT = 4;
// // manipulates what the controller controls by doing setup specific stuff
// export class SetupPhase implements IPhase {
//     private controller: IGameController;

//     constructor(controller: IGameController) {
//         this.controller = controller;
//     }

//     handle(event: IEvent): void {
//         this.firstDraw();
//     }

//     private initPlayersHealth() {
//         for (const player of this.controller.players.getPlayers()) {
//             this.drawCards(player, STARTING_DRAW_CARD_COUNT);
//         }
//     }

//     private firstDraw() {
//         this.controller.players
//     }

//     drawCards(player: Player, count: number): void {
//         for (let i = 0; i < count; i++) {
//             const card = this.controller.cardPile.draw();
//             player.cards.push(card)
//         }
//     }

//     randNumBetween(min: number, max: number): number {
//         return Math.floor(Math.random() * max) + min;
//     }

//     chooseWhoGoesFirst() {
//         const numPlayers = this.controller.model.getPlayerCount();
//         const whoseTurn = this.randNumBetween(0, numPlayers);
//         this.controller.model.setWhoseTurn(whoseTurn);
//     }
// }