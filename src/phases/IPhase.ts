import { IEvent } from "../event/IEvent";
import { IGameController } from "../game/IGameController";

export interface IPhase {
    getName(): string;
    handle(event: IEvent): void;
}