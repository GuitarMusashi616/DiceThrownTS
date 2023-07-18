import { IGameController } from "../game/IGameController";

export interface IAbility {
    getName(): string;
    isPlayable(diceValues: number[]): boolean;
    play(controller: IGameController): void;
}