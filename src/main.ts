import { GameController } from "./game/GameController";
import { IGameController } from "./game/IGameController";
import { CardPile } from "./model/CardPile";
import { ICardPile } from "./model/ICardPile";
import { IPlayerFactory } from "./model/IPlayerFactory";
import { IPlayerManager } from "./model/IPlayerManager";
import { Player } from "./model/Player";
import { PlayerFactory } from "./model/PlayerFactory";
import { PlayerManager } from "./model/PlayerManager";


function main() {

    const cardPile: ICardPile = new CardPile();
    const playerFactory: IPlayerFactory = new PlayerFactory(cardPile);
    const playerManager: IPlayerManager = playerFactory.getPlayers();
    
    const controller: IGameController = new GameController(playerManager, cardPile);

    // gameloop(controller);
}

// function gameloop(controller: IGameController) {
//     const commandLine: ICommandLine = new CommandLine();

//     while (true) {
//         const input = commandLine.read();
//         controller.handle(input);
//     }
// }

function testCardPile() {
    let cardPile = new CardPile();

    let card = cardPile.draw();

    console.log(card.name, card.type, card.cpCost);
}

testCardPile();
// main()