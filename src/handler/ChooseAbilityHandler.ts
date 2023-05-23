import { ChooseAbility } from "../event/ChooseAbility";
import { IEventHandler } from "./IEventHandler";

export class ChooseAbilityHandler implements IEventHandler<ChooseAbility> {
    constructor() {

    }

    handle(event: ChooseAbility): void {
        throw new Error("Method not implemented.");
    }
}