import { IGameController } from "../game/IGameController";

export interface IAbility {
    isPlayable(diceValues: number[]): boolean;
    play(controller: IGameController): void;
}