import { EventType } from "./EventType";
import { ISubscriber } from "./ISubsriber";

export interface IEventManager {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    notify(eventType: EventType): void;
}