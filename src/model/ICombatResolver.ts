import { IGameController } from "../game/IGameController";

export interface ICombatResolver {
    initialAttack: number;
    initialAttackTrueDmg: number;
    defenseAmount: number;

    getTotal(): number;
    reset(): void;
    resolve(controller: IGameController): void;
    getRecord(): number[];
}