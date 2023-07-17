import { AbilityManager } from "../ability/AbilityManager";
import { IAbilityManager } from "../ability/IAbilityManager";
import { IFactory } from "../common/IFactory";
import { IGameController } from "../game/IGameController";
import { CritBashAbility } from "./CritBashAbility";
import { FortitudeAbility } from "./FortitudeAbility";
import { MightyBlowAbility } from "./MightyBlowAbility";
import { OverpowerAbility } from "./OverpowerAbility";
import { RecklessAbility } from "./RecklessAbility";
import { SmackAbility } from "./SmackAbility";
import { SturdyBlowAbility } from "./SturdyBlowAbility";
import { ThickSkinAbility } from "./ThickSkinAbility";

export class BarbarianAbilitiesFactory implements IFactory<IAbilityManager> {
    create(): IAbilityManager {
        const abilities = [
           new SmackAbility(),
           new SturdyBlowAbility(),
           new FortitudeAbility(),
           new OverpowerAbility(),
           new MightyBlowAbility(),
           new CritBashAbility(),
           new RecklessAbility(),
           new ThickSkinAbility(),
        ]
        return new AbilityManager(abilities);
    }
}