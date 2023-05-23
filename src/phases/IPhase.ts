import { IEvent } from "../event/IEvent";
import { IGameController } from "../game/IGameController";

export interface IPhase {
    handle(event: IEvent): void
}