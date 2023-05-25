import { AbilityManager } from "../ability/AbilityManager";
import { IAbilityManager } from "../ability/IAbilityManager";
import { IFactory } from "../common/IFactory";
import { IGameController } from "../game/IGameController";
import { FortitudeAbility } from "./FortitudeAbility";
import { SmackAbility } from "./SmackAbility";
import { SturdyBlowAbility } from "./SturdyBlowAbility";

export class BarbarianAbilitiesFactory implements IFactory<IAbilityManager> {
    create(): IAbilityManager {
        const abilities = [
           new SmackAbility(),
           new SturdyBlowAbility(),
           new FortitudeAbility(),
        ]
        return new AbilityManager(abilities);
    }
}