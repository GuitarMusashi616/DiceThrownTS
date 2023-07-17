import { ISubscriber } from "../subscribers/ISubsriber";

export interface IHeroView extends ISubscriber {
    startup(): void
}