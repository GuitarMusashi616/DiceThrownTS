import { Card } from "../model/Card";
import { Player } from "../model/Player";
import { ICardExecutor } from "./ICardExecutor";

export class CardExecutor implements ICardExecutor {
    execute(player: Player, card: Card): void {
        throw new Error("Method not implemented.");
    }
}