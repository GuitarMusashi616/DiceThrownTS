import { EventType } from "./EventType";
import { IEventManager } from "./IEventManager";
import { ISubscriber } from "./ISubsriber";

export class EventManager implements IEventManager {
    private subscribers: ISubscriber[];

    constructor() {
        this.subscribers = []
    }

    subscribe(subscriber: ISubscriber): void {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: ISubscriber): void {
        const subscriberIndex = this.subscribers.indexOf(subscriber);
        if (subscriberIndex > -1) {
            this.subscribers.splice(subscriberIndex, 1);
        }
    }

    notify(eventType: EventType): void {
        for (const subscriber of this.subscribers) {
            subscriber.notify(eventType);
        }
    }
}