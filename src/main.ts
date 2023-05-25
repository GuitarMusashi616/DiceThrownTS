import { IAbilityManager } from "./ability/IAbilityManager";
import { BarbarianAbilitiesFactory } from "./barbarian/BarbarianAbilitiesFactory";
import { IFactory } from "./common/IFactory";
import { End } from "./event/End";
import { PickCard } from "./event/PickCard";
import { SellCard } from "./event/SellCard";
import { CardExecutor } from "./game/CardExecutor";
import { GameController } from "./game/GameController";
import { ICardExecutor } from "./game/ICardExecutor";
import { IGameController } from "./game/IGameController";
import { CardPile } from "./model/CardPile";
import { CombatResolver } from "./model/CombatResolver";
import { DiceManager } from "./model/DiceManager";
import { ICardPile } from "./model/ICardPile";
import { ICombatResolver } from "./model/ICombatResolver";
import { IDiceManager } from "./model/IDiceManager";
import { IPlayerManager } from "./model/IPlayerManager";
import { Player } from "./model/Player";
import { PlayerFactory } from "./model/PlayerFactory";
import { PlayerManager } from "./model/PlayerManager";
import { EventManager } from "./subscribers/EventManager";
import { IEventManager } from "./subscribers/IEventManager";
import { AbilitySelector } from "./view/AbilitySelector";
import { AbilityView } from "./view/AbilityView";
import { DiceView } from "./view/DiceView";
import { EndButton } from "./view/EndButton";
import { IAbilityView } from "./view/IAbilityView";
import { IDiceView } from "./view/IDiceView";
import { IEndButton } from "./view/IEndButton";
import { IRollButton } from "./view/IRollButton";
import { PhaseView } from "./view/PhaseView";
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
    const barbarianCardPile: ICardPile = new CardPile();
    const barbarianAbilities: IAbilityManager = new BarbarianAbilitiesFactory().create();
    const players = [
        new Player(barbarianAbilities, barbarianCardPile),
    ]
    const playerFactory: IFactory<IPlayerManager> = new PlayerFactory(players);
    const playerManager: IPlayerManager = playerFactory.create();

    const diceManager: IDiceManager = new DiceManager();
    const cardExecutor: ICardExecutor = new CardExecutor();
    const eventManager: IEventManager = new EventManager();
    const combatResolver: ICombatResolver = new CombatResolver();
    const controller: IGameController = new GameController(playerManager, diceManager, cardExecutor, eventManager, combatResolver);
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
    const abilityView: IAbilityView = new AbilityView(controller);
    const abilitySelector: AbilitySelector = new AbilitySelector(controller);
    const phaseView: PhaseView = new PhaseView(controller);
    const endButton: IEndButton = new EndButton(controller);

    controller.events.subscribe(diceView);
    controller.events.subscribe(abilityView);
    controller.events.subscribe(phaseView);


    endButton.click();  // skip main phase


    rollButton.click([true, true, true, true, true, true]);  // sends rollEvent to controller
    // controller.handle(Roll) - called implicitly

    // diceView.notify(Events.Roll or Roll) - called implicitly
    // diceView.print() called (show the swords / hearts based on hero)

    // abilityView should listen for a dice roll?
    // check if the phase is offensive
    // how to tell which player's turn? player manager
    // abilityView.notify() -> return abilities that are playable
    abilitySelector.select(0)  // unique ability names for heros? or do it index based left-right top-bottom?
    // tell user if not valid and act like nothing happened

    // endButton.click()
    // tell user that you must pick an offensive ability?


    // try again
    rollButton.click([true, false, false, false, false, true]);  // sends rollEvent to controller


    endButton.click();
    // onto defense phase

    rollButton.click([true, false, false, false, false, true])

    endButton.click();
    // onto main phase 2

    endButton.click();
    // onto discard phase

    endButton.click();
    // onto upkeep phase

    endButton.click();
    // onto income phase

    endButton.click();
    // onto main phase

    endButton.click();
    // onto next (offense phase)

    // onto player 2 turn
}


// testCardPile();
// main()
// testBasicOffense();