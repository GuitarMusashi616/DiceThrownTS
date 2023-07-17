import { IAbilityManager } from "./ability/IAbilityManager";
import { BarbarianAbilitiesFactory } from "./barbarian/BarbarianAbilitiesFactory";
import { IFactory } from "./common/IFactory";
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
import { EventManager } from "./subscribers/EventManager";
import { IEventManager } from "./subscribers/IEventManager";
import { AbilitySelector } from "./view/AbilitySelector";
import { AbilityView } from "./view/AbilityView";
import { DiceView } from "./view/DiceView";
import { EndButton } from "./view/EndButton";
import { HeroView } from "./view/HeroView";
import { IAbilitySelector } from "./view/IAbilitySelector";
import { IAbilityView } from "./view/IAbilityView";
import { IDiceView } from "./view/IDiceView";
import { IEndButton } from "./view/IEndButton";
import { IHeroView } from "./view/IHeroView";
import { IPhaseView } from "./view/IPhaseView";
import { IRollButton } from "./view/IRollButton";
import { PhaseView } from "./view/PhaseView";
import { RollButton } from "./view/RollButton";

export class Configuration {
    barbarianCardPile: ICardPile = new CardPile();
    barbarianAbilities: IAbilityManager = new BarbarianAbilitiesFactory().create();

    players = [
        new Player(this.barbarianAbilities, this.barbarianCardPile),
    ]
    playerFactory: IFactory<IPlayerManager> = new PlayerFactory(this.players);
    playerManager: IPlayerManager = this.playerFactory.create();

    diceManager: IDiceManager = new DiceManager();
    cardExecutor: ICardExecutor = new CardExecutor();
    eventManager: IEventManager = new EventManager();
    combatResolver: ICombatResolver = new CombatResolver();
    controller: IGameController = new GameController(this.playerManager, this.diceManager, this.cardExecutor, this.eventManager, this.combatResolver);


    rollButton: IRollButton = new RollButton(this.controller);
    diceView: IDiceView = new DiceView(this.controller);

    heroView: IHeroView = new HeroView(this.controller);
    abilityView: IAbilityView = new AbilityView(this.controller);
    abilitySelector: IAbilitySelector = new AbilitySelector(this.controller);

    phaseView: IPhaseView = new PhaseView(this.controller);
    endButton: IEndButton = new EndButton(this.controller);

    constructor() {
        this.controller.events.subscribe(this.diceView);
        this.controller.events.subscribe(this.abilityView);
        this.controller.events.subscribe(this.phaseView);
    }

    startup() {
        this.heroView.startup();
    }
}