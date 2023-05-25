import { EventType } from "./EventType";

export interface ISubscriber {
    notify(eventType: EventType): void;
}