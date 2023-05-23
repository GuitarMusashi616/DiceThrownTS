import { Card } from "../model/Card";
import { Player } from "../model/Player";

export interface ICardExecutor {
    execute(player: Player, card: Card): void;
}