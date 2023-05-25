import { End } from "./event/End";
import { PickCard } from "./event/PickCard";
import { SellCard } from "./event/SellCard";
import { CardExecutor } from "./game/CardExecutor";
import { GameController } from "./game/GameController";
import { ICardExecutor } from "./game/ICardExecutor";
import { IGameController } from "./game/IGameController";
import { CardPile } from "./model/CardPile";
import { DiceManager } from "./model/DiceManager";
import { ICardPile } from "./model/ICardPile";
import { IDiceManager } from "./model/IDiceManager";
import { IPlayerFactory } from "./model/IPlayerFactory";
import { IPlayerManager } from "./model/IPlayerManager";
import { Player } from "./model/Player";
import { PlayerFactory } from "./model/PlayerFactory";
import { PlayerManager } from "./model/PlayerManager";
import { EventManager } from "./subscribers/EventManager";
import { IEventManager } from "./subscribers/IEventManager";
import { DiceView } from "./view/DiceView";
import { EndButton } from "./view/EndButton";
import { IDiceView } from "./view/IDiceView";
import { IEndButton } from "./view/IEndButton";
import { IRollButton } from "./view/IRollButton";
import { RollButton } from "./view/RollButton";


export function main() {

    const controller = getController();

    console.log(controller);

    // controller.handle(new PickCard("FEELIN' GOOD!"));
    // controller.handle(new SellCard("name of the card"));

    controller.handle(new End());

    console.log(controller);
    console.log(controller.phase);
    

    // logs when new events occur
    // const commandLineListener = new CommandLineListener();
    // controller.events.addListener(CommandLineListener);


    // now when things happen it should be reported


    // view sends objects that the controller handles
    // controller should send objects updating things


    // gameloop(controller);
}

// function gameloop(controller: IGameController) {
//     const commandLine: ICommandLine = new CommandLine();

//     while (true) {
//         const input = commandLine.read();
//         controller.handle(input);
//     }
// }

function getController(): IGameController {
    const cardPile: ICardPile = new CardPile();
    const playerFactory: IPlayerFactory = new PlayerFactory(cardPile);
    const playerManager: IPlayerManager = playerFactory.getPlayerManager();
    const diceManager: IDiceManager = new DiceManager();
    const cardExecutor: ICardExecutor = new CardExecutor();
    const eventManager: IEventManager = new EventManager();
    const controller: IGameController = new GameController(playerManager, diceManager, cardPile, cardExecutor, eventManager);
    return controller;
}

function testCardPile() {
    let cardPile = new CardPile();

    let card = cardPile.draw();

    console.log(card.name, card.type, card.cpCost);
}

function testMainPhase() {
    const controller = getController();
    // const chooseCardButton: IChooseCardButton = new ChooseCardButton(controller);
    const endButton: IEndButton = new EndButton(controller);

    // chooseCardButton.choose(2)  // index of card in player.cards
    // GameController.handle(PlayCard(2))
    // -2 CP, added 5 HP

    // chooseCardButton.choose(0)
    // GameController.handle(PlayCard(0))
    // Not enough CP


    endButton.click();
    // Onto Offense Phase
}

export function testBasicOffense() {
    const controller = getController();

    const rollButton: IRollButton = new RollButton(controller);
    const diceView: IDiceView = new DiceView(controller);
    const endButton: IEndButton = new EndButton(controller);

    console.log(controller.phase.constructor.name)
    endButton.click();  // skip main phase
    console.log(controller.phase.constructor.name)


    controller.events.subscribe(diceView);
    rollButton.click([true, true, true, true, true, true]);  // sends rollEvent to controller
    // controller.handle(Roll) - called implicitly

    // diceView.notify(Events.Roll or Roll) - called implicitly
    // diceView.print() called

    // try again
    rollButton.click([true, false, false, false, false, true]);  // sends rollEvent to controller


    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto defense phase

    rollButton.click([true, false, false, false, false, true])

    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto main phase 2

    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto discard phase

    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto upkeep phase

    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto income phase

    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto main phase

    endButton.click();
    console.log(controller.phase.constructor.name)
    // onto next (offense phase)

    // onto player 2 turn
}


// testCardPile();
// main()
// testBasicOffense();