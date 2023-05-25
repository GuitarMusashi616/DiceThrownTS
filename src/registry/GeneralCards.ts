// import { Card } from "../model/Card";
// import { CardType } from "../model/CardType";
// import { ICardRegistry } from "./ICardRegistry";

// export class GeneralCards implements ICardRegistry {
//     private cards: Card[]

//     constructor() {
//         this.cards = [
//             new Card(
//                 "TRANSFERENCE!",
//                 "Transfer 1 status effect token\nfrom a chosen player to another\nchosen player.",
//                 CardType.MainPhaseAction,
//                 [],
//                 2,
//                 () => {
//                     const oneWithStatus = ChoosePlayerCommand();
//                     const target = ChoosePlayerCommand();
//                     const status_token = ChooseStatusToken(oneWithStatus);
//                     new RemoveStatusEffectOn(target, status_token);
//                     new StatusEffectOn(target, status_token);
//                 },
//             ),
//             new Card(
//                 "WHAT STATUS EFFECTS?",
//                 "Remove all status effect tokens\nfrom a chosen player",
//                 CardType.MainPhaseAction,
//                 [],
//                 2,
//                 () => {},
//             ),
//             new Card(
//                 "VEGAS BABY!",
//                 "Roll 1 <Dice>:\nGame 1/2 the value as <CP>\n(rounded up).",
//                 CardType.MainPhaseAction,
//                 [],
//                 0,
//                 () => {
//                     const outcome = RollCommand(dice=1)
//                     const total = Math.ceil(outcome.sum() / 2)
//                     new GainCPCommand(total)
//                 },
//             ),
//             new Card(
//                 "GET THAT OUTA HERE!",
//                 "Remove a status effect\ntoken from a chosen player.",
//                 CardType.MainPhaseAction,
//                 [],
//                 1,
//                 () => {
//                     const target = ChoosePlayerCommand();
//                     const status_token = ChooseStatusEffectOn(target)
//                     new RemoveStatusEffectOn(target, status_token);
//                 },
//             ),
//         ]
//     }

//     getCards(): Card[] {
//         return this.cards;
//     }
// }