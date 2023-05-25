import { IAbility } from "./IAbility";

export interface IAbilityManager {
    get(index: number): IAbility;
    getName(index: number): string;
    getPlayable(diceValues: number[]): boolean[];
}