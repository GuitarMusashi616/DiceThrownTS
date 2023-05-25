import { IGameController } from "../game/IGameController";
import { ICombatResolver } from "./ICombatResolver";

export class CombatResolver implements ICombatResolver {
    initialAttack: number;
    initialAttackTrueDmg: number;
    defenseAmount: number;
    record: number[];

    constructor() {
        this.initialAttack = -1;
        this.initialAttackTrueDmg = -1;
        this.defenseAmount = 0;
        this.record = [];
    }

    getTotal(): number {
        if (this.initialAttack < 0 || this.defenseAmount < 0) {
            return -1;
        }

        let total = this.initialAttack - this.defenseAmount;
        if (this.initialAttackTrueDmg > 0) {
            total += this.initialAttackTrueDmg;
        }
        return total;
    }

    reset(): void {
        if (this.initialAttack >= 0 && this.defenseAmount >= 0) {
            this.record.push(this.getTotal());
        }
        this.initialAttack = -1;
        this.initialAttackTrueDmg = 0;
        this.defenseAmount = -1;
    }

    getRecord(): number[] {
        return this.record;
    }

    resolve(controller: IGameController): void {
        const target = controller.players.getCurrentPlayer();
        const totalDmg = this.getTotal();
        target.damage(totalDmg);
        this.reset();
    }

}