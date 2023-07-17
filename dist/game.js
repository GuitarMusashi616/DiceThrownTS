(function () {
    'use strict';

    var AbilityManager = /** @class */ (function () {
        function AbilityManager(abilities) {
            this.abilities = abilities;
        }
        AbilityManager.prototype.get = function (index) {
            var ability = this.abilities[index];
            if (ability === undefined) {
                throw Error("".concat(index, " does not correspond to an ability in ").concat(this.abilities.map(function (x) { return x.constructor.toString(); })));
            }
            return ability;
        };
        AbilityManager.prototype.getName = function (index) {
            var ability = this.get(index);
            return ability.constructor.name;
        };
        AbilityManager.prototype.getPlayable = function (diceValues) {
            return this.abilities.map(function (x) { return x.isPlayable(diceValues); });
        };
        return AbilityManager;
    }());

    var BarbarianDiceValues = /** @class */ (function () {
        function BarbarianDiceValues(diceValues) {
            this.diceValues = diceValues;
        }
        BarbarianDiceValues.prototype.swordCount = function () {
            return this.diceValues.filter(function (x) { return x === 1 || x === 2 || x === 3; }).length;
        };
        BarbarianDiceValues.prototype.heartCount = function () {
            return this.diceValues.filter(function (x) { return x === 4 || x === 5; }).length;
        };
        BarbarianDiceValues.prototype.starCount = function () {
            return this.diceValues.filter(function (x) { return x === 6; }).length;
        };
        BarbarianDiceValues.prototype.toString = function () {
            return this.diceValues.map(function (x) {
                if (x <= 3) {
                    return 'Sword';
                }
                if (x <= 5) {
                    return 'Heart';
                }
                return 'Star';
            });
        };
        return BarbarianDiceValues;
    }());

    var CritBashAbility = /** @class */ (function () {
        function CritBashAbility() {
        }
        CritBashAbility.prototype.calcDmg = function (dice) {
            if (dice.swordCount() >= 5) {
                return 8;
            }
            if (dice.swordCount() >= 4) {
                return 6;
            }
            if (dice.swordCount() >= 3) {
                return 4;
            }
            return 0;
        };
        CritBashAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 3;
        };
        CritBashAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttack = this.calcDmg(dice);
        };
        return CritBashAbility;
    }());

    var FortitudeAbility = /** @class */ (function () {
        function FortitudeAbility() {
        }
        FortitudeAbility.prototype.calcHeal = function (dice) {
            if (dice.heartCount() >= 5) {
                return 6;
            }
            if (dice.heartCount() >= 4) {
                return 5;
            }
            if (dice.heartCount() >= 3) {
                return 4;
            }
            return 0;
        };
        FortitudeAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.heartCount() >= 3;
        };
        FortitudeAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            var healAmount = this.calcHeal(dice);
            controller.players.getCurrentPlayer().heal(healAmount);
        };
        return FortitudeAbility;
    }());

    var MightyBlowAbility = /** @class */ (function () {
        function MightyBlowAbility() {
        }
        MightyBlowAbility.prototype.calcDmg = function (dice) {
            if (dice.swordCount() >= 5) {
                return 8;
            }
            if (dice.swordCount() >= 4) {
                return 6;
            }
            if (dice.swordCount() >= 3) {
                return 4;
            }
            return 0;
        };
        MightyBlowAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 3;
        };
        MightyBlowAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttack = this.calcDmg(dice);
        };
        return MightyBlowAbility;
    }());

    var OverpowerAbility = /** @class */ (function () {
        function OverpowerAbility() {
        }
        OverpowerAbility.prototype.calcDmg = function (dice) {
            return 4;
        };
        OverpowerAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 2 && dice.starCount() >= 2;
        };
        OverpowerAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttackTrueDmg = this.calcDmg(dice);
        };
        return OverpowerAbility;
    }());

    var RecklessAbility = /** @class */ (function () {
        function RecklessAbility() {
        }
        RecklessAbility.prototype.calcDmg = function (dice) {
            if (dice.swordCount() >= 5) {
                return 8;
            }
            if (dice.swordCount() >= 4) {
                return 6;
            }
            if (dice.swordCount() >= 3) {
                return 4;
            }
            return 0;
        };
        RecklessAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 3;
        };
        RecklessAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttack = this.calcDmg(dice);
        };
        return RecklessAbility;
    }());

    var SmackAbility = /** @class */ (function () {
        function SmackAbility() {
        }
        SmackAbility.prototype.calcDmg = function (dice) {
            if (dice.swordCount() >= 5) {
                return 8;
            }
            if (dice.swordCount() >= 4) {
                return 6;
            }
            if (dice.swordCount() >= 3) {
                return 4;
            }
            return 0;
        };
        SmackAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 3;
        };
        SmackAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttack = this.calcDmg(dice);
        };
        return SmackAbility;
    }());

    var SturdyBlowAbility = /** @class */ (function () {
        function SturdyBlowAbility() {
        }
        SturdyBlowAbility.prototype.calcDmg = function (dice) {
            return 4;
        };
        SturdyBlowAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 2 && dice.starCount() >= 2;
        };
        SturdyBlowAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttackTrueDmg = this.calcDmg(dice);
        };
        return SturdyBlowAbility;
    }());

    var ThickSkinAbility = /** @class */ (function () {
        function ThickSkinAbility() {
        }
        ThickSkinAbility.prototype.calcDmg = function (dice) {
            if (dice.swordCount() >= 5) {
                return 8;
            }
            if (dice.swordCount() >= 4) {
                return 6;
            }
            if (dice.swordCount() >= 3) {
                return 4;
            }
            return 0;
        };
        ThickSkinAbility.prototype.isPlayable = function (diceValues) {
            var dice = new BarbarianDiceValues(diceValues);
            return dice.swordCount() >= 3;
        };
        ThickSkinAbility.prototype.play = function (controller) {
            var diceValues = controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            controller.combatResolver.initialAttack = this.calcDmg(dice);
        };
        return ThickSkinAbility;
    }());

    var BarbarianAbilitiesFactory = /** @class */ (function () {
        function BarbarianAbilitiesFactory() {
        }
        BarbarianAbilitiesFactory.prototype.create = function () {
            var abilities = [
                new SmackAbility(),
                new SturdyBlowAbility(),
                new FortitudeAbility(),
                new OverpowerAbility(),
                new MightyBlowAbility(),
                new CritBashAbility(),
                new RecklessAbility(),
                new ThickSkinAbility(),
            ];
            return new AbilityManager(abilities);
        };
        return BarbarianAbilitiesFactory;
    }());

    var CardExecutor = /** @class */ (function () {
        function CardExecutor() {
        }
        CardExecutor.prototype.execute = function (player, card) {
            throw new Error("Method not implemented.");
        };
        return CardExecutor;
    }());

    var End = /** @class */ (function () {
        function End() {
        }
        return End;
    }());

    var PickCard = /** @class */ (function () {
        function PickCard(index) {
            this.index = index;
        }
        return PickCard;
    }());

    var SellCard = /** @class */ (function () {
        function SellCard(card) {
            this.card = card;
        }
        return SellCard;
    }());

    var EventType;
    (function (EventType) {
        EventType[EventType["Roll"] = 0] = "Roll";
        EventType[EventType["NewPhase"] = 1] = "NewPhase";
    })(EventType || (EventType = {}));

    var EndIncomeHandler = /** @class */ (function () {
        function EndIncomeHandler(controller) {
            this.controller = controller;
        }
        EndIncomeHandler.prototype.handle = function (event) {
            this.controller.phase = new MainPhase(this.controller, false);
            this.controller.events.notify(EventType.NewPhase);
        };
        return EndIncomeHandler;
    }());

    var IncomePhase = /** @class */ (function () {
        function IncomePhase(controller) {
            this.controller = controller;
            this.endHandler = new EndIncomeHandler(controller);
        }
        IncomePhase.prototype.handle = function (event) {
            if (event instanceof End) {
                this.endHandler.handle(event);
                return;
            }
        };
        return IncomePhase;
    }());

    var EndUpkeepHandler = /** @class */ (function () {
        function EndUpkeepHandler(controller) {
            this.controller = controller;
        }
        EndUpkeepHandler.prototype.handle = function (event) {
            this.controller.phase = new IncomePhase(this.controller);
            this.controller.events.notify(EventType.NewPhase);
        };
        return EndUpkeepHandler;
    }());

    var UpkeepPhase = /** @class */ (function () {
        function UpkeepPhase(controller) {
            this.controller = controller;
            this.endHandler = new EndUpkeepHandler(controller);
        }
        UpkeepPhase.prototype.handle = function (event) {
            if (event instanceof End) {
                this.endHandler.handle(event);
                return;
            }
        };
        return UpkeepPhase;
    }());

    var EndDiscardHandler = /** @class */ (function () {
        function EndDiscardHandler(controller) {
            this.controller = controller;
        }
        EndDiscardHandler.prototype.handle = function (event) {
            this.controller.phase = new UpkeepPhase(this.controller);
            this.controller.events.notify(EventType.NewPhase);
        };
        return EndDiscardHandler;
    }());

    var SellCardHandler = /** @class */ (function () {
        function SellCardHandler(controller) {
            this.controller = controller;
        }
        SellCardHandler.prototype.handle = function (event) {
            var chosenCard = event.card;
            var player = this.controller.players.getCurrentPlayer();
            if (!this.hasInHand(player, chosenCard)) {
                return;
            }
            this.discard(player, chosenCard);
        };
        SellCardHandler.prototype.hasInHand = function (player, card) {
            return player.cards.includes(card);
        };
        SellCardHandler.prototype.discard = function (player, card) {
            var index = player.cards.indexOf(card);
            player.cards.splice(index, 1);
        };
        return SellCardHandler;
    }());

    var DiscardPhase = /** @class */ (function () {
        function DiscardPhase(controller) {
            this.controller = controller;
            this.sellCardHandler = new SellCardHandler(controller);
            this.endHandler = new EndDiscardHandler(controller);
        }
        DiscardPhase.prototype.handle = function (event) {
            if (event instanceof SellCard) {
                this.sellCardHandler.handle(event);
                return;
            }
            if (event instanceof End) {
                this.endHandler.handle(event);
                this.controller.events.notify(EventType.NewPhase);
                return;
            }
        };
        return DiscardPhase;
    }());

    var Roll = /** @class */ (function () {
        function Roll(whichDice) {
            this.whichDice = whichDice;
        }
        return Roll;
    }());

    var EndDefensiveHandler = /** @class */ (function () {
        function EndDefensiveHandler(controller) {
            this.controller = controller;
        }
        EndDefensiveHandler.prototype.handle = function (event) {
            this.controller.phase = new MainPhase(this.controller, true);
            this.controller.events.notify(EventType.NewPhase);
        };
        return EndDefensiveHandler;
    }());

    var RollHandler = /** @class */ (function () {
        function RollHandler(controller) {
            this.controller = controller;
        }
        RollHandler.prototype.handle = function (event) {
            this.controller.dice.roll(event.whichDice);
            this.controller.events.notify(EventType.Roll);
        };
        return RollHandler;
    }());

    var DefensivePhase = /** @class */ (function () {
        function DefensivePhase(controller) {
            this.controller = controller;
            this.rollHandler = new RollHandler(controller);
            this.endHandler = new EndDefensiveHandler(controller);
        }
        DefensivePhase.prototype.handle = function (event) {
            if (event instanceof Roll) {
                this.rollHandler.handle(event);
                return;
            }
            // if (event instanceof ChooseAbility) {
            //     this.rollHandler.handle(ChooseAbility);
            //     return;
            // }
            // if (event instanceof PickCard) {
            //     this.pickCardHandler.handle(event);
            //     return;
            // }
            if (event instanceof End) {
                this.endHandler.handle(event);
                return;
            }
        };
        return DefensivePhase;
    }());

    var EndOffensiveHandler = /** @class */ (function () {
        function EndOffensiveHandler(controller) {
            this.controller = controller;
        }
        EndOffensiveHandler.prototype.handle = function (event) {
            this.controller.phase = new DefensivePhase(this.controller);
            this.controller.events.notify(EventType.NewPhase);
        };
        return EndOffensiveHandler;
    }());

    var OffensivePhase = /** @class */ (function () {
        function OffensivePhase(controller) {
            this.controller = controller;
            // this.toggleDieHandler = new ToggleDieHand;
            this.rollHandler = new RollHandler(controller);
            // this.chooseAbilityHandler = chooseAbilityHandler;
            // this.pickCardHandler = pickCardHandler;
            this.endHandler = new EndOffensiveHandler(controller);
        }
        OffensivePhase.prototype.handle = function (event) {
            // if (event instanceof ToggleDie) {
            //     this.toggleDieHandler.handle(ToggleDie);
            //     return;
            // }
            if (event instanceof Roll) {
                this.rollHandler.handle(event);
                return;
            }
            // if (event instanceof ChooseAbility) {
            //     this.rollHandler.handle(ChooseAbility);
            //     return;
            // }
            // if (event instanceof PickCard) {
            //     this.pickCardHandler.handle(event);
            //     return;
            // }
            if (event instanceof End) {
                this.endHandler.handle(event);
                return;
            }
        };
        return OffensivePhase;
    }());

    var EndMainHandler = /** @class */ (function () {
        function EndMainHandler(controller, hasDoneCombat) {
            this.controller = controller;
            this.hasDoneCombat = hasDoneCombat;
        }
        EndMainHandler.prototype.handle = function (event) {
            if (this.hasDoneCombat) {
                this.controller.combatResolver.resolve(this.controller);
            }
            this.controller.phase = this.hasDoneCombat ? new DiscardPhase(this.controller) : new OffensivePhase(this.controller);
            this.controller.events.notify(EventType.NewPhase);
        };
        return EndMainHandler;
    }());

    var PickCardHandler = /** @class */ (function () {
        function PickCardHandler(controller) {
            this.controller = controller;
        }
        PickCardHandler.prototype.handle = function (event) {
            var player = this.controller.players.getCurrentPlayer();
            var chosenCard = this.getCard(player, event.index);
            if (chosenCard === undefined || this.cantAfford(player, chosenCard)) {
                return;
            }
            this.spendCPFor(player, chosenCard);
            this.discard(player, event.index);
            this.controller.cardExecutor.execute(player, chosenCard);
        };
        PickCardHandler.prototype.getCard = function (player, cardIndex) {
            return player.cards[cardIndex];
        };
        PickCardHandler.prototype.cantAfford = function (player, card) {
            return card.cpCost > player.cp;
        };
        PickCardHandler.prototype.spendCPFor = function (player, card) {
            player.cp -= card.cpCost;
        };
        PickCardHandler.prototype.discard = function (player, cardIndex) {
            player.cards.splice(cardIndex, 1);
        };
        return PickCardHandler;
    }());

    /**
     * Main Phase
     * display cards to player
     * valid events: pick card or sell cards or end turn
     * - pick card: hero upgrades or main phase action
     */
    var MainPhase = /** @class */ (function () {
        function MainPhase(controller, hasDoneCombat) {
            this.controller = controller;
            this.pickCardHandler = new PickCardHandler(this.controller);
            this.sellCardHandler = new SellCardHandler(this.controller);
            this.endHandler = new EndMainHandler(this.controller, hasDoneCombat);
        }
        MainPhase.prototype.handle = function (event) {
            if (event instanceof PickCard) {
                this.pickCardHandler.handle(event);
                return;
            }
            if (event instanceof SellCard) {
                this.sellCardHandler.handle(event);
                return;
            }
            if (event instanceof End) {
                this.endHandler.handle(event);
                return;
            }
        };
        return MainPhase;
    }());

    /**
     * Exposes interfaces to states which do stuff specific to their state
     */
    var GameController = /** @class */ (function () {
        function GameController(players, dice, cardExecutor, events, combatResolver) {
            this.players = players;
            this.dice = dice;
            this.cardExecutor = cardExecutor;
            this.events = events;
            this.combatResolver = combatResolver;
            this.phase = new MainPhase(this, false);
        }
        GameController.prototype.handle = function (event) {
            this.phase.handle(event);
        };
        return GameController;
    }());

    /**
     * Parameter class for cards
     */
    var Card = /** @class */ (function () {
        function Card(name, description, type, cpCost) {
            this.name = name;
            this.description = description;
            this.type = type;
            this.cpCost = cpCost;
        }
        return Card;
    }());

    var CardType;
    (function (CardType) {
        /**
         * Can only be played during your own Main Phase (blue)
         */
        CardType[CardType["HeroUpgrade"] = 0] = "HeroUpgrade";
        /**
         * Can only be played during your own Main Phase (blue)
         */
        CardType[CardType["MainPhaseAction"] = 1] = "MainPhaseAction";
        /**
         * Can be played during any player's Offensive / Targeting / Defensive Roll Phases (orange)
         */
        CardType[CardType["RollPhaseAction"] = 2] = "RollPhaseAction";
        CardType[CardType["AttackModifier"] = 3] = "AttackModifier";
        /**
         * Can be played at any time. These cards resolve immediately and can't be interrupted (red)
         */
        CardType[CardType["InstantAction"] = 4] = "InstantAction";
    })(CardType || (CardType = {}));

    var CardPile = /** @class */ (function () {
        function CardPile() {
            this.drawPile = this.initDrawPile();
            this.discardPile = [];
        }
        CardPile.prototype.initDrawPile = function () {
            var drawPile = [
                new Card("FEELIN' GOOD!", "Roll 3 <Dice>:\nHeal <1Heart> + <2Heart> x <HeartDice>.", CardType.InstantAction, 0),
                new Card("TRANSFERENCE!", "Transfer 1 status effect token\nfrom a chosen player to another\nchosen player.", CardType.MainPhaseAction, 2),
                new Card("WHAT STATUS EFFECTS?", "Remove all status effect tokens\nfrom a chosen player", CardType.MainPhaseAction, 2),
                new Card("VEGAS BABY!", "Roll 1 <Dice>:\nGame 1/2 the value as <CP>\n(rounded up).", CardType.MainPhaseAction, 0),
                new Card("GET THAT OUTA HERE!", "Remove a status effect\ntoken from a chosen player.", CardType.MainPhaseAction, 1),
            ];
            this.shuffle(drawPile);
            return drawPile;
        };
        CardPile.prototype.shuffle = function (array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
        };
        CardPile.prototype.reshufflePiles = function () {
            var _a;
            (_a = this.drawPile).push.apply(_a, this.discardPile);
            this.discardPile = [];
            this.shuffle(this.drawPile);
        };
        CardPile.prototype.draw = function () {
            if (this.drawPile.length <= 0) {
                this.reshufflePiles();
            }
            var card = this.drawPile.pop();
            this.discardPile.push(card);
            return card;
        };
        return CardPile;
    }());

    var CombatResolver = /** @class */ (function () {
        function CombatResolver() {
            this.initialAttack = -1;
            this.initialAttackTrueDmg = -1;
            this.defenseAmount = 0;
            this.record = [];
        }
        CombatResolver.prototype.getTotal = function () {
            if (this.initialAttack < 0 || this.defenseAmount < 0) {
                return -1;
            }
            var total = this.initialAttack - this.defenseAmount;
            if (this.initialAttackTrueDmg > 0) {
                total += this.initialAttackTrueDmg;
            }
            return total;
        };
        CombatResolver.prototype.reset = function () {
            if (this.initialAttack >= 0 && this.defenseAmount >= 0) {
                this.record.push(this.getTotal());
            }
            this.initialAttack = -1;
            this.initialAttackTrueDmg = 0;
            this.defenseAmount = -1;
        };
        CombatResolver.prototype.getRecord = function () {
            return this.record;
        };
        CombatResolver.prototype.resolve = function (controller) {
            var target = controller.players.getCurrentPlayer();
            var totalDmg = this.getTotal();
            target.damage(totalDmg);
            this.reset();
        };
        return CombatResolver;
    }());

    var DIE_MIN_VAL = 1;
    var DIE_MAX_VAL = 6;
    var Die = /** @class */ (function () {
        function Die() {
            this.value = -1;
        }
        Die.prototype.getValue = function () {
            return this.value;
        };
        Die.prototype.roll = function () {
            this.value = Math.floor(Math.random() * DIE_MAX_VAL) + DIE_MIN_VAL;
        };
        return Die;
    }());

    var NUM_DICE = 6;
    var DiceManager = /** @class */ (function () {
        function DiceManager() {
            this.dice = Array.from({ length: NUM_DICE }, function () { return new Die(); });
        }
        DiceManager.prototype.getValues = function () {
            return this.dice.map(function (x) { return x.getValue(); });
        };
        DiceManager.prototype.roll = function (whichDice) {
            if (whichDice.length != NUM_DICE) {
                return;
            }
            for (var i = 0; i < whichDice.length; i++) {
                if (whichDice[i]) {
                    this.dice[i].roll();
                }
            }
        };
        return DiceManager;
    }());

    var PLAYER_MAX_HEALTH$1 = 50;
    /**
     * Parameter class for players
     */
    var Player = /** @class */ (function () {
        function Player(abilities, cardPile) {
            this.health = PLAYER_MAX_HEALTH$1;
            this.cards = [];
            this.cp = 0;
            this.abilities = abilities;
            this.cardPile = cardPile;
        }
        Player.prototype.heal = function (amount) {
            this.health = Math.min(this.health + amount, PLAYER_MAX_HEALTH$1);
            console.log("player heals ".concat(amount, " health, ").concat(this.health, " hp remaining"));
        };
        Player.prototype.damage = function (amount) {
            this.health = Math.max(this.health - amount, 0);
            console.log("player takes ".concat(amount, " dmg, ").concat(this.health, " hp remaining"));
        };
        return Player;
    }());

    var PlayerManager = /** @class */ (function () {
        function PlayerManager(players, whoseTurn) {
            this.players = players;
            this.whoseTurn = whoseTurn;
        }
        PlayerManager.prototype.getPlayers = function () {
            return this.players;
        };
        PlayerManager.prototype.getCurrentPlayer = function () {
            return this.players[this.whoseTurn];
        };
        return PlayerManager;
    }());

    var PLAYER_MAX_HEALTH = 50;
    var STARTING_DRAW_CARD_COUNT = 4;
    /**
     * Responsible for initializing players and configuring IPlayerManager
     */
    var PlayerFactory = /** @class */ (function () {
        function PlayerFactory(players) {
            this.players = players;
        }
        PlayerFactory.prototype.initPlayer = function (player) {
            player.health = PLAYER_MAX_HEALTH;
            for (var i = 0; i < STARTING_DRAW_CARD_COUNT; i++) {
                var card = player.cardPile.draw();
                player.cards.push(card);
            }
            return player;
        };
        PlayerFactory.prototype.initPlayers = function () {
            for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
                var player = _a[_i];
                this.initPlayer(player);
            }
        };
        PlayerFactory.prototype.chooseWhoGoesFirst = function (players) {
            return Math.floor(Math.random() * players.length);
        };
        PlayerFactory.prototype.create = function () {
            this.initPlayers();
            var whoseTurn = this.chooseWhoGoesFirst(this.players);
            var playerManager = new PlayerManager(this.players, whoseTurn);
            return playerManager;
        };
        return PlayerFactory;
    }());

    var EventManager = /** @class */ (function () {
        function EventManager() {
            this.subscribers = [];
        }
        EventManager.prototype.subscribe = function (subscriber) {
            this.subscribers.push(subscriber);
        };
        EventManager.prototype.unsubscribe = function (subscriber) {
            var subscriberIndex = this.subscribers.indexOf(subscriber);
            if (subscriberIndex > -1) {
                this.subscribers.splice(subscriberIndex, 1);
            }
        };
        EventManager.prototype.notify = function (eventType) {
            for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
                var subscriber = _a[_i];
                subscriber.notify(eventType);
            }
        };
        return EventManager;
    }());

    var AbilitySelector = /** @class */ (function () {
        function AbilitySelector(controller) {
            this.controller = controller;
        }
        AbilitySelector.prototype.select = function (index) {
            var currentPlayer = this.controller.players.getCurrentPlayer();
            var ability = currentPlayer.abilities.get(index);
            console.log("ability ".concat(index, " selected: ").concat(ability.constructor.name));
            ability.play(this.controller);
        };
        return AbilitySelector;
    }());

    var ABILITY_IDS = [
        "ability1",
        "ability2",
        "ability3",
        "ability4",
        "ability5",
        "ability6",
        "ability7",
        "ability8",
    ];
    var AbilityView = /** @class */ (function () {
        function AbilityView(controller) {
            this.controller = controller;
        }
        AbilityView.prototype.notify = function (eventType) {
            if (eventType === EventType.NewPhase) {
                this.resetHighlight();
            }
            if (eventType !== EventType.Roll) {
                return;
            }
            if (!(this.controller.phase instanceof OffensivePhase)) {
                return;
            }
            this.highlightPlayable();
        };
        AbilityView.prototype.resetHighlight = function () {
            for (var _i = 0, ABILITY_IDS_1 = ABILITY_IDS; _i < ABILITY_IDS_1.length; _i++) {
                var id = ABILITY_IDS_1[_i];
                var button = document.getElementById(id);
                if (button == null) {
                    return;
                }
                button.style.border = '';
            }
        };
        AbilityView.prototype.highlightPlayable = function () {
            var diceValues = this.controller.dice.getValues();
            var currentPlayer = this.controller.players.getCurrentPlayer();
            var playable = currentPlayer.abilities.getPlayable(diceValues);
            console.log("Playable Abilities:");
            for (var i = 0; i < playable.length; i++) {
                if (playable[i]) {
                    console.log("".concat(i + 1, ") ").concat(currentPlayer.abilities.getName(i)));
                }
                this.highlight(ABILITY_IDS[i], playable[i]);
            }
        };
        AbilityView.prototype.highlight = function (abilityButtonId, isPlayable) {
            var button = document.getElementById(abilityButtonId);
            if (button == null) {
                return;
            }
            if (isPlayable) {
                button.style.border = '2px solid green';
            }
            else {
                button.style.border = '2px solid red';
            }
        };
        return AbilityView;
    }());

    var ID_INDEX_MAP = {
        'dice1': 0,
        'dice2': 1,
        'dice3': 2,
        'dice4': 3,
        'dice5': 4,
        'dice6': 5,
    };
    var NUM_AS_WORD_MAP = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
    };
    var DiceView = /** @class */ (function () {
        function DiceView(controller) {
            this.controller = controller;
            this.toggled = [false, false, false, false, false, false];
        }
        DiceView.prototype.toggleBorder = function (whichDie) {
            var element = document.getElementById(whichDie);
            var index = ID_INDEX_MAP[whichDie];
            if (element == null || index == undefined) {
                return;
            }
            if (element.style.border) {
                element.style.border = "";
                element.style.padding = "";
                element.style.borderRadius = "";
                this.toggled[index] = false;
            }
            else {
                element.style.border = "2px solid red";
                element.style.paddingBlock = "2px";
                element.style.paddingInline = "4px";
                element.style.borderRadius = "10px";
                this.toggled[index] = true;
            }
        };
        DiceView.prototype.click = function (whichDie) {
            console.log("%s clicked", whichDie);
            this.toggleBorder(whichDie);
        };
        DiceView.prototype.getToggledDice = function () {
            return this.toggled;
        };
        DiceView.prototype.set = function (whichDie, num) {
            var element = document.getElementById(whichDie);
            var asWord = NUM_AS_WORD_MAP[num];
            if (asWord == undefined || element == null) {
                return;
            }
            element.className = "fas fa-dice-".concat(asWord);
        };
        DiceView.prototype.notify = function (eventType) {
            if (eventType !== EventType.Roll) {
                return;
            }
            var diceValues = this.controller.dice.getValues();
            var dice = new BarbarianDiceValues(diceValues);
            console.log("dice has changed!\n".concat(diceValues));
            console.log(dice.toString());
            for (var id in ID_INDEX_MAP) {
                var index = ID_INDEX_MAP[id];
                if (index == undefined) {
                    continue;
                }
                var num = diceValues[index];
                if (num == undefined) {
                    continue;
                }
                this.set(id, num);
            }
        };
        return DiceView;
    }());

    var EndButton = /** @class */ (function () {
        function EndButton(controller) {
            this.controller = controller;
        }
        EndButton.prototype.click = function () {
            var event = new End();
            this.controller.handle(event);
        };
        return EndButton;
    }());

    var ABILITY_BUTTON_IDS = [
        "ability1",
        "ability2",
        "ability3",
        "ability4",
        "ability5",
        "ability6",
        "ability7",
        "ability8",
    ];
    // setup the ability names, change them when hero changes
    var HeroView = /** @class */ (function () {
        function HeroView(controller) {
            this.controller = controller;
        }
        HeroView.prototype.startup = function () {
            var currentPlayer = this.controller.players.getCurrentPlayer();
            for (var i = 0; i < ABILITY_BUTTON_IDS.length; i++) {
                var abilityId = ABILITY_BUTTON_IDS[i];
                var abilityName = currentPlayer.abilities.getName(i);
                this.renameButton(abilityId, abilityName);
            }
        };
        HeroView.prototype.renameButton = function (buttonId, newName) {
            var abilityButton = document.getElementById(buttonId);
            if (abilityButton == null) {
                return;
            }
            abilityButton.textContent = newName;
        };
        HeroView.prototype.notify = function (eventType) {
            if (eventType !== EventType.NewPhase) {
                return;
            }
            if (this.controller.phase.constructor.name === "MainPhase") {
                console.log("Refresh Abilities");
            }
        };
        return HeroView;
    }());

    var PHASE_VIEW_ID = "phaseView";
    var PhaseView = /** @class */ (function () {
        function PhaseView(controller) {
            this.controller = controller;
        }
        PhaseView.prototype.notify = function (eventType) {
            if (eventType !== EventType.NewPhase) {
                return;
            }
            var label = document.getElementById(PHASE_VIEW_ID);
            if (label == null) {
                return;
            }
            var phase = this.controller.phase.constructor.name;
            label.textContent = phase;
            console.log(phase);
        };
        return PhaseView;
    }());

    var RollButton = /** @class */ (function () {
        function RollButton(controller) {
            this.controller = controller;
        }
        RollButton.prototype.click = function (whichDice) {
            console.log("Roll Clicked! %s", whichDice);
            this.controller.handle(new Roll(whichDice));
        };
        return RollButton;
    }());

    var Configuration = /** @class */ (function () {
        function Configuration() {
            this.barbarianCardPile = new CardPile();
            this.barbarianAbilities = new BarbarianAbilitiesFactory().create();
            this.players = [
                new Player(this.barbarianAbilities, this.barbarianCardPile),
            ];
            this.playerFactory = new PlayerFactory(this.players);
            this.playerManager = this.playerFactory.create();
            this.diceManager = new DiceManager();
            this.cardExecutor = new CardExecutor();
            this.eventManager = new EventManager();
            this.combatResolver = new CombatResolver();
            this.controller = new GameController(this.playerManager, this.diceManager, this.cardExecutor, this.eventManager, this.combatResolver);
            this.rollButton = new RollButton(this.controller);
            this.diceView = new DiceView(this.controller);
            this.heroView = new HeroView(this.controller);
            this.abilityView = new AbilityView(this.controller);
            this.abilitySelector = new AbilitySelector(this.controller);
            this.phaseView = new PhaseView(this.controller);
            this.endButton = new EndButton(this.controller);
            this.controller.events.subscribe(this.diceView);
            this.controller.events.subscribe(this.abilityView);
            this.controller.events.subscribe(this.phaseView);
        }
        Configuration.prototype.startup = function () {
            this.heroView.startup();
        };
        return Configuration;
    }());

    var config = new Configuration();
    function wireDie(id, config) {
        var button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function () { return config.diceView.click(id); });
        }
    }
    function wireRoll(id, config) {
        // the roll button
        var roll = document.getElementById(id);
        if (roll) {
            roll.addEventListener("click", function () { return config.rollButton.click(config.diceView.getToggledDice()); });
        }
    }
    function wireVoid(id, config) {
        // the roll button
        var button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function () { return config.endButton.click(); });
        }
    }
    function wireAbilitySelect(id, num, config) {
        var button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function () { return config.abilitySelector.select(num); });
        }
    }
    window.onload = function () {
        config.startup();
        wireDie('dice1', config);
        wireDie('dice2', config);
        wireDie('dice3', config);
        wireDie('dice4', config);
        wireDie('dice5', config);
        wireDie('dice6', config);
        wireRoll('rollButton', config);
        wireVoid('endButton', config);
        wireAbilitySelect('ability1', 0, config);
        wireAbilitySelect('ability2', 1, config);
        wireAbilitySelect('ability3', 2, config);
        wireAbilitySelect('ability4', 3, config);
        wireAbilitySelect('ability5', 4, config);
        wireAbilitySelect('ability6', 5, config);
        wireAbilitySelect('ability7', 6, config);
        wireAbilitySelect('ability8', 7, config);
    };

})();
//# sourceMappingURL=game.js.map
