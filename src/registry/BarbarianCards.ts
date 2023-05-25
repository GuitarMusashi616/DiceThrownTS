import { Card } from "../model/Card";
import { CardType } from "../model/CardType";
import { ICardRegistry } from "./ICardRegistry";

export class BarbarianCards implements ICardRegistry {
    private cards: Card[]

    constructor() {
        this.cards = [
            new Card(
                "FEELIN' GOOD!", 
                "Roll 3 <Dice>:\nHeal <1Heart> + <2Heart> x <HeartDice>.", 
                CardType.InstantAction, 
                [],
                0,
                () => {
                    const outcome = new RollCommand(dice=3).execute();
                    new HealCommand(1 + outcome.hearts*2).execute();
                },
            ),
            new Card(
                "GET SOME!", 
                "Roll 5 <Dice>:\nAdd <1Circle> x <SwordDice> to the total dmg.\nInflict Concussion <Concussion>.", 
                CardType.RollPhaseAction,
                [CardType.AttackModifier], 
                2,
                () => {
                    const outcome = new RollCommand(dice=5).execute();
                    new DamageEnemyCommand(outcome.swords).execute();
                    new StatusEffectOnEnemyCommand(StatusEffect.Concussion).execute();
                    new AttackModifier() // add to attack at end of phase
                }
            ),
            new Card(
                "HEAD BASH!",
                "if you successfully dealt <8Circle>\ndmg to an opponent after their\ndefense concluded, play this card to\ninflict Concussion <Concussion>.",
                CardType.RollPhaseAction,
                ["After their defense phase"],
                0,
                () => {},
            ),
            new Card(
                "CONCUSS!",
                "Inflict Concussion <Concussion>\non a chosen opponent.",
                CardType.MainPhaseAction,
                [],
                1,
                () => {},
            ),
            new Card(
                "ADRENALINE SURGE!",
                "Roll 1 <Dice>:\n\nOn <StarDice>, heal <2Heart> & inflict Concussion <Concussion> on a chosen opponent.\n\nOn any other outcome, draw <1Card>.",
                CardType.MainPhaseAction,
                ["Promo Card"],
                0,
                () => {},
            ),
        ]
    }


    getCards(): Card[] {
        return this.cards;
    }
}