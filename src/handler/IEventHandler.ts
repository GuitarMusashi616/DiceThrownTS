import { IEvent } from "../event/IEvent";

export interface IEventHandler<T extends IEvent> {
    handle(event: T): void;
}