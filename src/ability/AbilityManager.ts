import { IAbility } from "./IAbility";
import { IAbilityManager } from "./IAbilityManager";

export class AbilityManager implements IAbilityManager {
    private abilities: Array<IAbility>;

    constructor(abilities: Array<IAbility>) {
        this.abilities = abilities;
    }

    get(index: number): IAbility {
        const ability = this.abilities[index];
        if (ability === undefined) {
            throw Error(`${index} does not correspond to an ability in ${this.abilities.map(x => x.constructor.toString())}`)
        }
        return ability  
    }

    getName(index: number): string {
        const ability = this.get(index);
        return ability.constructor.name;
    }

    getPlayable(diceValues: number[]): boolean[] {
        return this.abilities.map(x => x.isPlayable(diceValues));
    }

}