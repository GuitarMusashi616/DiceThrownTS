import { ToggleDie } from "../event/ToggleDie";
import { IEventHandler } from "./IEventHandler";

export class ToggleDieHandler implements IEventHandler<ToggleDie> {
    handle(event: ToggleDie): void {
        throw new Error("Method not implemented.");
    }
    
}